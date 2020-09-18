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
                    </div>
                </div>
            </div>
         );
    }
}
 
export default WeatherInput;