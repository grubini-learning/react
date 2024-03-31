import { Link } from "react-router-dom";
import { ICity } from "../types";

import { formatDate } from "../utility";

import classes from "./CityItem.module.css";

export const CityItem = ({
  id,
  position,
  cityName,
  emoji,
  date,
}: Pick<ICity, "cityName" | "emoji" | "date" | "id" | "position">) => {
  return (
    <li>
      <Link
        className={classes.cityItem}
        to={`${id}?lat=${position.lat}&${position.lng}`}
      >
        <span className={classes.emoji}>{emoji}</span>
        <h3 className={classes.name}>{cityName}</h3>
        <time className={classes.date}>({formatDate(date)})</time>
        <button className={classes.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
};
