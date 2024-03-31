import { ICity } from "../types";
import styles from "./CountryItem.module.css";

export function CountryItem({
  emoji,
  country,
}: Pick<ICity, "emoji" | "country">) {
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{country}</span>
    </li>
  );
}
