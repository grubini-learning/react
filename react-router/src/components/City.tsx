import { useParams } from "react-router-dom";
import { formatDate } from "../utility";
import styles from "./City.module.css";
import { useCitiesContext } from "../contexts";

export function City() {
  const { id } = useParams();

  const { cities } = useCitiesContext();
  const selectedCity = cities.find((city) => city.id === id);

  if (!selectedCity || Object.keys(selectedCity).length === 0) {
    return <p>I need a valid city</p>;
  }

  const { emoji, cityName, date, notes } = selectedCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        {/* <ButtonBack /> */}
        <button>back</button>
      </div>
    </div>
  );
}
