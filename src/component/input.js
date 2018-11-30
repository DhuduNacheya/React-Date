import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./input.css";
import propTypes from "prop-types";
const InputDate=(props)=>{
         return (<div className={"main"}>    
                <div className={"child"}>{props.dateText +" :"}</div>
                 <div className={"child"}>  <DatePicker dateFormat="dd/MM/YYYY" className={props.valid?"dateClass":"error"} placeholderText={props.dateText} selected={props.date}  onChange={props.chng}/> 
                </div>
        </div>
        );
}

InputDate.propTypes={
        dateText:propTypes.string,
        valid:propTypes.bool,
        chng:propTypes.func,
        placeholderText:propTypes.string,
        date:propTypes.date
}
export default InputDate;