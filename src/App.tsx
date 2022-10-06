import React, {useEffect} from 'react';

import SmartChart from "./components/SmartChart/SmartChart";
import DropDown from "./components/DropDown/DropDown";

import {useAppSelector, useAppDispatch} from "./hook";
import {fetchSmartStore} from "./redux/slices/data";
import Loader from "./components/Loader/Loader";

function App() {
    const dispatch = useAppDispatch();
    const {isLoading, isError} = useAppSelector((state) => state.smartData)

    useEffect(() => {
        dispatch(fetchSmartStore());
    }, [dispatch]);

    if (isError) {
        return <h1>Opps, Error, Please try again later</h1>
    }

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div className="App">
            <DropDown/>
            <SmartChart/>
        </div>
    );
}

export default App;
