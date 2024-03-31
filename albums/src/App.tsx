import { UsersList } from "./component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchUsers, AppDispatch } from "./store";

const App = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return  (
        <div className="container mx-auto">
            <UsersList />
        </div>
    )
};

export default App;