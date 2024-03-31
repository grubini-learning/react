import { Message, Spinner } from ".";
import { useCitiesContext } from "../contexts";
import { CityItem } from "./CityItem";
import classes from "./CityList.module.css";

export const CityList = () => {
  const { cities, isLoading } = useCitiesContext();
  console.log("the cities are: ", cities);

  if (isLoading) return <Spinner />;
  else if (!cities.length)
    return (
      <Message message="Add you first city by clicking on a city in the map" />
    );

  return (
    <ul className={classes.cityList}>
      {cities.map((city) => {
        return (
          <li key={city.id}>
            <CityItem {...city} />
          </li>
        );
      })}
    </ul>
  );
};
