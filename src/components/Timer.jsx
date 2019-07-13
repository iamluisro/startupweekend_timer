import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerStyled = styled.div`
	display: grid;
	justify-content: center;
	border: 1px solid red;
`;

const TimerTimeStyled = styled.div`
	font-size: 1000%;
	text-align: center;
	border: 1px solid blue;

	@media only screen and (max-width: 767px) {
		font-size: 45px;
	}
`;

const StartStyled = styled.div`
	display: grid;

	justify-content: center;

	@media only screen and (max-width: 767px) {
		grid-template-columns: 250px;
		justify-content: center;
		border: 1px solid red;
	}
`;

const ButtonStyled = styled.button`
	background-color: #0db14b;
	color: white;
	text-align: center;
	font-size: 25px;
	margin: 1em;
	padding: 0.5em 0.5em;
	border-radius: 10px;

	@media only screen and (max-width: 767px) {
		grid-template-rows: auto;
		grid-template-rows: fit-content(40%);

		justify-content: center;
		border: 1px solid red;
	}
`;

const ConsoleLog = ({ children }) => {
	console.log(children);
	return false;
};

const Timer = () => {
	const [
		timerTime,
		setTimerTime
	] = useState(0);

	const [
		seconds,
		setSeconds
	] = useState(0);

	const [
		minutes,
		setMinutes
	] = useState(0);

	const [
		isActive,
		setIsActive
	] = useState(false);

	function startTimer() {
		setIsActive(!isActive);
	}

	function threeMin() {
		const threeMin = 180;
		setMinutes(Math.floor(threeMin / 60));
		setSeconds(threeMin % 60);
		setTimerTime(threeMin);

		return minutes, seconds;
	}

	function fiveMin() {
		const fiveMin = 300;
		setMinutes(Math.floor(fiveMin / 60));
		setSeconds(fiveMin % 60);
		setTimerTime(fiveMin);

		return minutes, seconds;
	}

	function oneMin() {
		setTimerTime(60);
		setSeconds(60);
		setMinutes(0);
	}

	useEffect(
		() => {
			let interval = null;
			if (isActive) {
				interval = setInterval(() => {
					if (timerTime > 0) {
						setTimerTime((timerTime) => timerTime - 1);
						setSeconds((timerTime) => timerTime - 1);

						if (seconds === 0) {
							setSeconds(59);
							setMinutes((minutes) => minutes - 1);
						}
					} else {
						clearInterval(interval);
						setIsActive(false);
						alert('Countdown ended');
					}
				}, 1000);
			}
			if (!isActive && timerTime !== 0 && seconds !== 0) {
				clearInterval(interval);
			}
			return () => clearInterval(interval);
		},
		[
			isActive,
			timerTime,
			seconds,
			minutes
		]
	);

	return (
		<TimerStyled>
			<TimerTimeStyled>
				{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}{' '}
			</TimerTimeStyled>

			<StartStyled>
				<ButtonStyled className={`${isActive ? 'active' : 'inactive'}`} onClick={startTimer}>
					{isActive ? 'Pause' : 'Start'}
				</ButtonStyled>

				{isActive === false && (
					<StartStyled>
						<ButtonStyled onClick={oneMin}>1 min</ButtonStyled>
						<ButtonStyled onClick={threeMin}>3 min</ButtonStyled>
						<ButtonStyled onClick={fiveMin}>5 min</ButtonStyled>
					</StartStyled>
				)}
			</StartStyled>
			<ConsoleLog>{isActive}</ConsoleLog>
			<ConsoleLog>{timerTime}</ConsoleLog>
			<ConsoleLog>{`Min: ${minutes}`}</ConsoleLog>
			<ConsoleLog>{`Sec: ${seconds}`}</ConsoleLog>
		</TimerStyled>
	);
};

export default Timer;
