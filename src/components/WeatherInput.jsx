import React, { Component } from 'react';
import "./style.css";

class WeatherInput extends Component {
    render() {
        return ( 
            <div>
                <div className="container">
                    <div className="Weather">
                        <form onSubmit={this.props.test}>
                            <input 
                                type="text"
                                name="input"
                                value={this.props.input} 
                                id="weatherInput"
                                onChange={this.props.onChange}
                                placeholder="Enter a city.."
                                autoComplete="off"
                            />
                            <br/>
                        </form>
                        <br/>
                        <button id="btn" className="lgbprimary" onClick={this.props.locationWeather}>Use my location</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default WeatherInput;