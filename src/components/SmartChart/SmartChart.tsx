import React, {useRef} from 'react';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import {useAppSelector} from "../../hook";
import {filteredSmart} from "../../utils/filteredSmart";
import {createOptions} from "../../utils/createOptions";

const SmartChart: React.FC = () => {
    const {smart} = useAppSelector((state) => state.smartData)
    const {dropdownValue} = useAppSelector((state) => state.dropDown)
    const filterSmartPhone = filteredSmart(smart, 'smartphones')
    const filterSmartLaptop = filteredSmart(smart, 'laptops')
    const filter = dropdownValue === 'Phone' ? filterSmartPhone : filterSmartLaptop

    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
    const options = createOptions(dropdownValue, filter)

    return (
        <>
            <HighchartsReact
                ref={chartComponentRef}
                highcharts={Highcharts}
                options={options}
            />
        </>
    );
}

export default SmartChart;
