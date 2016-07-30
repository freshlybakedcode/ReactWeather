var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h4 className="text-center">It's {temp}&deg;c in {location}</h4>
  );
};

module.exports = WeatherMessage;
