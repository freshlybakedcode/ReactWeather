var React = require('react');
var {Link} = require('react-router');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About component</h3>
//     )
//   }
// });

// var About = function(props) {
//   return (
//     <h3>About component</h3>
//   )
// }

var About = () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <h2 className="text-center">A weather app built using React</h2><br />
      <p>The source code for this site is hosted <Link to='https://github.com/freshlybakedcode/ReactWeather'>on github</Link></p>
      <p>The weather API is courtesy of <Link to='http://openweathermap.org/'>OpenWeatherMap</Link></p>
    </div>
  )
};

module.exports = About;
