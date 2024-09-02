import { useEffect, useState } from "react";
import "./styles/general.css";
import SearchForm from "./SearchForm";
import WeatherInfo from "./WeatherInfo";
import Error from "./Error";
import Loading from "./Loading";

function App() {
	const apiKey = "d6ec54cbc19b4f1b81792215241808";
	const [weather, setWeather] = useState();
	const [city, setCity] = useState("Kyiv");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	useEffect(() => {
		async function getWeather() {
			setLoading(true); // начинаем загрузку
			try {
				let response = await fetch(
					`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
				);
				let result = await response.json();
				console.log(result);
				if (result.error) {
					// Ошибка
					setError(result);
				} else {
					// удачный запрос
					setWeather(result);
					setError("");
				}
				setTimeout(() => setLoading(false), 1000); // убираем загрузку
			} catch (err) {
				setError(err);
			}
		}
		getWeather();
	}, [city]);

	return (
		<div>
			<SearchForm onSearch={(city) => setCity(city)} />
			{loading ? (
				<Loading />
			) : error ? (
				<Error message={error.error.message} />
			) : (
				weather && <WeatherInfo {...weather} />
			)}
		</div>
	);
}

export default App;
