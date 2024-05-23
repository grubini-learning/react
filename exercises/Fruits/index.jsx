import React, {
  Fragment,
  useEffect,
  useState,
  useRef,
  memo,
  useCallback,
} from "react";
import "./index.css";

// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

/*
 =============================================================================
 README:
 =============================================================================  - Considerations
    - performance
    		- Parent (List) => provide a stable version for the props provided 
        									 to the child from the parent
                           - Avoid using state as much as possible
                           - Need to update options when the prop items 
                             changes in useEffect
        - Child (Fruit) => prevent rendering if props received don't change
                           - maintain selection state at the child level to
                             avoid unnecessary re renders and avoid to 
                             create unnecessary 
                             structures.
     - Utility
        		- swap => swaps two elements in a list
            
     - Styling
        		- CSS class to convey the 'selected' state as 'red'

     - Approach:
        		- maintain a record of the last selected item, to enable easy 
              access without having to use a loop
            - fruit needs to pass up its selected state and indice for the 
              parent to know which child needs to get swapped
            - when adding to the selected items at the top of the List
            		- last selected increments by 1
                - swap with the selected child indice
            - when unselecting
                - swap with last selected child
                - toggle selected child to off state
                - last selected is decremented by 1
==============================================================================
*/

const swap = (list, aIdx, bIdx) => {
  const tempList = [...list];
  [tempList[aIdx], tempList[bIdx]] = [tempList[bIdx], tempList[aIdx]];

  return tempList;
};

const Fruit = memo(({ name, color, idx, organizeSelection }) => {
  const [selected, setSelected] = useState(false);
  let fruitColor = selected ? "active" : color;

  const toggleSelected = () => {
    // un easy about not using setSelected(prevSelected => !prevSelected);
    const newSelectedFruitState = !selected;
    setSelected(newSelectedFruitState);
    organizeSelection(idx, newSelectedFruitState);
  };

  return (
    <li className={`List__item List__item--${fruitColor}`}>
      <button className="button__item" onClick={toggleSelected}>
        {name}
      </button>
    </li>
  );
});
export const List = ({ items }) => {
  const [options, setOptions] = useState([]);
  const lastSelected = useRef(-1);

  const sortBySelectedItems = useCallback((idx, selectedState) => {
    let lastIdx;
    if (selectedState) {
      // add selection
      lastSelected.current += 1;
      lastIdx = lastSelected.current;
    } else {
      // remove selection
      lastIdx = lastSelected.current === 0 ? 0 : lastSelected.current;
      lastSelected.current -= 1;
    }

    setOptions((prevOpts) => {
      const newOpts = swap(prevOpts, lastIdx, idx);

      return newOpts;
    });
  }, []);

  //   const modifyOptions = useCallback((idx, selectedState) => {
  //     if (selectedState) {
  //       // add selection
  //       // setOptions([...swap(options, lastSelected.current, idx)]);
  //       lastSelected.current += 1;
  //       setOptions((prevOptions) => {
  //         const newOpts = swap(prevOptions, lastSelected.current, idx);
  //         return newOpts;
  //       });
  //     } else {
  //       // remove selection
  //       //   const newOptions = swap(options, lastSelected.current, idx);
  //       const lastIdx = lastSelected.current === 0 ? 0 : lastSelected.current;
  //       setOptions((prevOpts) => {
  //         const newOpts = swap(prevOpts, lastIdx, idx);

  //         return newOpts;
  //       });
  //       lastSelected.current -= 1;
  //     }
  //   }, []);

  useEffect(() => {
    setOptions([...items]);
  }, [items]);

  return (
    <Fragment>
      <ul className="List">
        {options.map((item, idx) => (
          <Fruit
            key={item.name}
            {...item}
            idx={idx}
            organizeSelection={sortBySelectedItems}
          />
        ))}
      </ul>
    </Fragment>
  );
};

const sizes = ["tiny", "small", "medium", "large", "huge"];
const colors = [
  "navy",
  "blue",
  "aqua",
  "teal",
  "olive",
  "green",
  "lime",
  "yellow",
  "orange",
  "red",
  "maroon",
  "fuchsia",
  "purple",
  "silver",
  "gray",
  "black",
];
const fruits = [
  "apple",
  "banana",
  "watermelon",
  "orange",
  "peach",
  "tangerine",
  "pear",
  "kiwi",
  "mango",
  "pineapple",
];

export const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          []
        ),
      ],
      []
    ),
  ],
  []
);
