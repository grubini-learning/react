import {
  createContext,
  useEffect,
  useState,
  useCallback,
  useContext,
} from "react";
import { ICity } from "../types";

type CitiesContextType = {
  cities: ICity[];
  isLoading: boolean;
};

const CitiesContext = createContext<CitiesContextType | null>(null);
const BaseURL = "http://localhost:9000";

export const CitiesProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [cities, setCities] = useState<ICity[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCities = useCallback(async () => {
    console.log("am i fetching=======");

    try {
      setIsLoading(true);
      const res = await fetch(`${BaseURL}/cities`);
      const data = await res.json();
      setCities(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(`There was an error ${error}`);
    }
  }, []);

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export const useCitiesContext = () => {
  const ctx = useContext(CitiesContext);

  if (ctx === null) {
    throw new Error("City Context is undefined");
  }

  return ctx;
};
