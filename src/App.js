import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends React.Component {
  state = {
    current_temperature: undefined,
    min_temperature: undefined,
    max_temperature:undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    wind_speed: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if( city && country ){
    const care_weather_adapter_call = await fetch(`http://localhost:8080/care-weather-adapter/v1/weather?city=${city}&country=${country}`);
    const data = await care_weather_adapter_call.json();
    this.setState({
        current_temperature: data.temperature.current,
        min_temperature: data.temperature.minimum,
        max_temperature: data.temperature.maximum,
        city: data.location.city,
        country: data.location.country,
        humidity: data.humidity,
        description: data.description,
        wind_speed: data.wind.speed,
        error: ""
      });
      
    } else {
      
       this.setState({
          current_temperature: undefined,
          min_temperature: undefined,
          max_temperature:undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          wind_speed: undefined,
          error: "Please enter the values." 
        });    
    }
  }
  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles/>
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather 
                    current_temperature={this.state.current_temperature}
                    min_temperature={this.state.min_temperature}
                    max_temperature={this.state.max_temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    wind_speed={this.state.wind_speed}
                    error={this.state.error}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
};

export default App;