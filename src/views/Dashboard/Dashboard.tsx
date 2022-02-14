import React, { FunctionComponent, useEffect, useState } from 'react';
import { Container } from '../../globalStyles';
import { io } from 'socket.io-client';

const socket = io('http://localhost:7775');

const Dashboard: FunctionComponent = () => {
	const [msg, setMsg] = useState('');
	useEffect(() => {
		socket.on('MESSAGE_KO', (mssg) => {
			console.log(mssg);
			setMsg(mssg);
		});
	}, []);

	const handleSendMsg = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			console.log(e.currentTarget.value);
			socket.emit('clientMsg', e.currentTarget.value);
		}
	};

	return (<Container>{msg}
	<input type='text' onKeyPress={handleSendMsg} />
	</Container>);
};

export default Dashboard;
