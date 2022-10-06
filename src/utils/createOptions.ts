import {Filter} from "../Models/DataDTO";

export const createOptions = (dropdownValue:string, filter:Filter[]) => {
    return {
        chart: {
            type: 'column'
        },
        title: {
            text: dropdownValue
        },
        xAxis: {
            type: 'category'
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                pointPadding: 0.3,
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                }
            }
        },
        series: [
            {
                name: "Phone",
                colorByPoint: true,
                data: filter,
            }
        ],
    };
}