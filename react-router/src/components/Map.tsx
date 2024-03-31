import { useNavigate, useSearchParams } from "react-router-dom";
import classes from "./Map.module.css";

export const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const navigate = useNavigate();

  return <div className={classes.mapContainer}>Map</div>;
};
