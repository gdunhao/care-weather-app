import React from "react";

const Weather = props =>(
    <div className="weahter__info">
      { 
      	props.city && props.country && <p className="weather__key"> Location: 
      	  <span className="weather__value"> { props.city } , { props.country }</span> 
      	</p> 
      }
      { 
            props.description && <p className="weather__key"> Conditions: 
              <span className="weather__value"> { props.description }</span> 
            </p> 
      }
      { 
      	props.current_temperature && <p className="weather__key"> Temperature: 
      	  <span className="weather__value"> { props.current_temperature } °C</span> 
      	</p> 
      }
      { 
            props.min_temperature && <p className="weather__key"> Minimum temperature: 
              <span className="weather__value"> { props.min_temperature } °C</span> 
            </p> 
      }
      { 
            props.max_temperature && <p className="weather__key"> Maximum temperature: 
              <span className="weather__value"> { props.max_temperature } °C</span> 
            </p> 
      }
      { 
      	props.humidity && <p className="weather__key"> Humidity: 
      	  <span className="weather__value"> { props.humidity } %</span> 
      	</p> 
      }
      { 
            props.wind_speed && <p className="weather__key"> Wind speed: 
              <span className="weather__value"> { props.wind_speed } meter/sec</span> 
            </p> 
      }
      { 
      	props.error && <p className="weather__error"> { props.error } </p> 
      }
    </div>
);

export default Weather;