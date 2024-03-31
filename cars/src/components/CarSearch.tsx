import { useDispatch, useSelector } from "react-redux";

import { ReducerState, changeTerm } from "../store";

export const CarSearch = () => {
    const dispatch = useDispatch();

    const term = useSelector((state: ReducerState) => state.cars.term);

    return <div className="list-header">
        <h3 className="title is-3">My Cars</h3>
        <div className="search field is-horizontal">
            <label className="label" htmlFor="term">Search</label>
            <input 
                className="input" 
                type="text" 
                id="term" 
                name="term" 
                value={term} 
                onChange={(event) => dispatch(changeTerm(event.target.value))} />
        </div>
    </div>
}

export default CarSearch;