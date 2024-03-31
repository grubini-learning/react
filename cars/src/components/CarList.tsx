import { useSelector, useDispatch } from "react-redux";

import { ReducerState, removeCar } from "../store";

export const CarList = () => {
    const dispatch = useDispatch();

    const {cars, name} = useSelector(({cars: {carList, term}, form: {name}}: ReducerState) => {
        return {
            cars: carList.filter((car) => car.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())),
            name
        }
    });

    return <div className="car-list">
        {cars.map((car) => {
            const bold = name && car.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
            return (
                <div key={car.id} className={`panel ${bold && 'bold'}`}>
                    <p>{car.name} - ${car.cost}</p>
                    <button className="button is-danger" onClick={() => dispatch(removeCar(car.id))}>delete</button>
                </div>
            )
        })}
    </div>
}

export default CarList;