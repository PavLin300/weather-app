import "./styles/errorStyle.css";

function Error({ message }) {
	return (
		<div className='container'>
			<div className='errorComponent'>
				<h1>Oops...{message}</h1>
			</div>
		</div>
	);
}
export default Error;
