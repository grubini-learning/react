import { useState } from "react";
import className from 'classnames';

interface Item {
    label: string; 
    content: string;
}

type Props = { items?: Item[]}

export const Accordion: React.FC<Props> = ({items = [{label: '1st label', content: '1st content'}, {label: '2nd label', content: '2nd content'}]}) => {
    const [expanded, setExpanded] = useState(-1);

    const handleExpand = (idx: number) => {
        if (expanded === idx) {
            setExpanded(-1);
        } else {
            setExpanded(idx);
        }
    }



    return <>
    {
        items.map((item, idx) => {
            const classesPanel = className("panel px-0 py-18 bg-white overflow-hidden", {hidden: expanded !== idx});
            return (
                <div key={idx}>
                    <button onClick={() => handleExpand(idx)} className="accordion w-full flex justify-start cursor-pointer duration-400 hover:bg-grey-300 active:bg-grey-300">{item.label}</button>
                    <div className={classesPanel}>
                        <p> {item.content}</p>
                    </div>
                </div>
            )
        })
    }
    </>
}

export default Accordion;