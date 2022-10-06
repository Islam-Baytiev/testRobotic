import React from "react";
import {setDropdownState, setDropDownValue} from "../../redux/slices/dropDown";
import {useAppSelector, useAppDispatch} from "../../hook";

import classes from './DropDown.module.scss'

const DropDown = () => {
    const dispatch = useAppDispatch()
    const {dropdownValue, dropdownState} = useAppSelector((state) => state.dropDown)
    return (
        <div className={classes.dropdown}>
            <button onClick={() => {
                dispatch(setDropdownState())
            }} className={classes.dropdownBtn}>
                {dropdownValue}
            </button>
            <div
                className={dropdownState ? `${classes.dropdownItems} ${classes.isVisible}` : `${classes.dropdownItems} ${classes.isHidden}`}
            >
                <div className={classes.dropdownItem}>
                    <div
                        onClick={() => {
                            dispatch(setDropDownValue("Phone"))
                            dispatch(setDropdownState())
                        }}
                    >
                        Phone
                    </div>
                </div>
                <div className={classes.dropdownItem}>
                    <div
                        onClick={() => {
                            dispatch(setDropDownValue('Laptops'))
                            dispatch(setDropdownState())
                        }}
                    >
                        Laptops
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DropDown
