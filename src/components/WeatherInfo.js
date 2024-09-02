import "./styles/weatherInfoStyle.css";
function WeatherInfo({ location, current }) {
	return (
		<div className='container'>
			<div className='weatherInfo'>
				<div>
					<h2>{location.name}</h2>
					<img className='weatherInfoImg' src={current.condition.icon} alt='' />
				</div>
				<div className='weatherLocationInfo'>
					<p>City: {location.name}</p>
					<p>Location: {location.region}</p>
					<p>Country: {location.country}</p>
					<p>Time zone: {location.tz_id}</p>
					<p>Localtime: {location.localtime}</p>
				</div>
				<div className='weatherCurrentInfo'>
					<p>Last time upadated: {current.last_updated}</p>
					<p>
						Temperature: {current.temp_c} °C / {current.temp_f} °F
					</p>
					<p>
						Feels like: {current.feelslike_c}°C / {current.feelslike_f}
					</p>
					<p>Weather: {current.condition.text}</p>
					<p>
						Window speed: {current.wind_mph} mph / {current.wind_kph} kph.
						Direction: {current.wind_dir}
					</p>
				</div>
			</div>
		</div>
	);
}

export default WeatherInfo;
