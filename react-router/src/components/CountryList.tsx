import { Message, Spinner, CountryItem } from ".";
import { useCitiesContext } from "../contexts";
import { ICity } from "../types";
import classes from "./CountryList.module.css";

export const CountryList = () => {
  const { cities, isLoading } = useCitiesContext();
  let countries: { [str: string]: Pick<ICity, "emoji"> } = {};

  cities.forEach((city) => {
    if (city && countries[city.cityName] === undefined) {
      countries = {
        ...countries,
        [city.country]: { emoji: city.emoji },
      };
    }
  });

  console.log("the cities are: ", countries);

  if (isLoading) return <Spinner />;
  else if (!cities.length)
    return (
      <Message message="Add you first city by clicking on a city in the map" />
    );

  return (
    <ul className={classes.countryList}>
      {Object.keys(countries).map((country, idx) => {
        return (
          <CountryItem key={idx} {...{ ...countries[country], country }} />
        );
      })}
    </ul>
  );
};
