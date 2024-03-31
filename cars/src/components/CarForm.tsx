import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar, changeName, changeCost, ReducerState } from "../store";

export const CarForm = () => {
    const dispatch = useDispatch();
    const {name, cost} = useSelector((state: ReducerState) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(addCar({name, cost}));
    }

    return <div className="car-form panel">
        <h4 className="subtitle is-3">Add Car</h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                        <label className="label" htmlFor="name">Name</label>
                        <input 
                            className="input is-expanded" 
                            value={name} 
                            onChange={(event) => dispatch(changeName(event.target.value))} 
                            type="text" 
                            id="name" 
                            name="name" 
                        />
                </div>
                <div className="field">
                    <label className="label" htmlFor="value">Value</label>
                    <input 
                        className="input is-expanded" 
                        value={cost || ''} 
                        onChange={(event) => dispatch(changeCost(isNaN(+event.target.value) ? 0 : +event.target.value))} 
                        type="number" 
                        min={0} 
                        step={1} 
                        name="value" 
                    />
                </div>
            </div>
            <div className="field">
                <button className="button is-link" type="submit">Submit</button>
            </div>
        </form>
    </div>
}

export default CarForm;