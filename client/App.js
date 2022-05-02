import React, { useEffect, useState } from 'react';
import axiosClient from './axiosClient';
import Input from './components/Input';
import Results from './components/Result';
import WallEImg from './images/wall-e.png';

function App() {
	const [loading, setLoading] = useState(true);
	const [connected, setConnected] = useState(false);
	const [results, setResults] = useState();

	useEffect(() => {
		testConnection();
	}, []);

	const testConnection = () => {
		axiosClient
			.get('/alive', {})
			.then((res) => {
				setConnected(true);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const getResults = (data) => {
		return axiosClient
			.post('/mission', data)
			.then((res) => {
				setResults(res.data);
				return res;
			}).catch((res) => {
				console.log(res);
				setResults(res.data);
			});
	}

	return (
		<div className="App" style={{ textAlign: 'center' }}>
			<img src={WallEImg} height="200" alt="wall-e robot" />
			<h1>MARS ROVER</h1>
			{loading ? (
				<span>Loading...</span>
			) : connected ? (
				<Input onSubmit={getResults} />
			) : (
				<span className="text-danger">
					Could not communicate with remote server
				</span>
			)}
			{results && <Results results={results} />}
		</div>
	);
}

export default App;
