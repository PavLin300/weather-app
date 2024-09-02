import { useState } from "react";
import "./styles/searchFormStyle.css";
function SearchForm({ onSearch = (f) => f }) {
	const [value, setValue] = useState("");
	return (
		<div className='searchFrom'>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					onSearch(value);
				}}
			>
				<input
					type='text'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button onClick={() => onSearch(value)}>Find</button>
			</form>
		</div>
	);
}

export default SearchForm;
