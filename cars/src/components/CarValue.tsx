import { useSelector } from "react-redux";

import { ReducerState } from "../store";

export const CarValue = () => {
    const totalCost = useSelector(({cars: {carList, term}}: ReducerState) => {
        return carList
                .filter((car) => car.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
                .reduce((total, current) => total + current.cost, 0);
    });

    return <div className="car-value">
        Total Cost: ${totalCost}
    </div>
}

export default CarValue;