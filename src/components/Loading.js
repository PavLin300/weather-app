import "./styles/loadingStyle.css";
import BeatLoader from "react-spinners/BeatLoader";
function Loading() {
	return (
		<div className='container'>
			<div className='loadingComponent'>
				<h1>Loading...</h1>
				<BeatLoader />
			</div>
		</div>
	);
}

export default Loading;
