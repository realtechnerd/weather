import React from 'react';
import "./style.css";

function DispWeather(props) {
    return(
        <div className="smallContainer">
            <div className="DispWeather" id="disp">
                <img src={"http://openweathermap.org/img/wn/" + props.img + "@2x.png"} alt={props.img} id="img"/>
                <h5>{props.weather}</h5>
                <h1 id="temp">{props.main}&#730;</h1>
                <h5>{props.name}, {props.country}.</h5>
            </div>
            <h3 id="ver">version 0.0.1 - more updates to come :)</h3>
        </div>
    )
}

export default DispWeather;