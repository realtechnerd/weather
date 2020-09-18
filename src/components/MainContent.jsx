import React from 'react';
import WeatherInput from "./WeatherInput.jsx";
import "./style.css";
import DispWeather from "./DispWeather.jsx";

class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
           input: "London",
            main: {},
            sys: {},
            weather: "",
            name: "",
            alert: "",
            cond: false,
            icon: "",
            dt: 0
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }
    handleChange(e) {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }
    componentDidMount() {
        fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=ea6d4788c2440f3f6ddce67043b19eb3")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ main: data.main, sys: data.sys, name:data.name, weather:data.weather[0], dt: data.dt, cond: true });
            })
            .catch(
                this.setState({
                    alert: "Please enter a valid city."
                })
            );
    }
    getWeather(e) {
        fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q="+ this.state.input +"&units=imperial&appid=ea6d4788c2440f3f6ddce67043b19eb3")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ main: data.main, sys: data.sys, name:data.name, weather:data.weather[0], dt: data.dt, cond: true });
            })
            .catch(
                this.setState({
                    alert: "Please enter a valid city."
                })
            );

            e.preventDefault();
    }
    render() { 
        const dt = new Date(this.state.dt * 1000);
        const d = dt.toLocaleTimeString();
        const dt1 = new Date(this.state.sys.sunrise * 1000);
        const d1 = dt1.toUTCString();
        return ( 
            <div className="MainContent">
                <WeatherInput test={this.getWeather} input={this.state.input} onChange={this.handleChange}/>
                <br/>
                <DispWeather 
                    img={this.state.weather.icon}
                    main={Math.floor(this.state.main.temp)} 
                    name={this.state.name} 
                    country={this.state.sys.country} 
                    weather={this.state.weather.main} 
                />
            </div>
         );
    }
}
 
export default MainContent;