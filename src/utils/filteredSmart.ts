import {Filter, ISmartAccessory} from "../Models/DataDTO";

export  const filteredSmart = (arr:ISmartAccessory[], categoryName: string):Filter[] =>  {
    const resultArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].category === categoryName) {
            const obj = {name:arr[i].title, y: arr[i].rating }
            resultArray.push(obj)
        }
    }
    return resultArray
}
