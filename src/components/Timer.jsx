import React, { useState, useEffect } from 'react';

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
		minutes,
		setMinutes
	] = useState(0);

	const [
		seconds,
		setSeconds
	] = useState(0);

	const [
		isActive,
		setIsActive
	] = useState(false);

	function startTimer() {
		setIsActive(!isActive);
	}

	function reset() {
		setTimerTime(3);
		setIsActive(false);
	}

	function oneMin() {
		setTimerTime(60);
	}
	function threeMin() {
		setTimerTime(180);
		//if (timerTime > 60) {
		//   transform into min:secs
		//   minutes = timerTime / 60
		//   seconds = math.floor((timerTime - minutes) * 60 )
		//}
	}

	useEffect(
		() => {
			let interval = null;
			if (isActive) {
				interval = setInterval(() => {
					if (timerTime > 0) {
						setTimerTime((timerTime) => timerTime - 1);
					} else {
						clearInterval(interval);
						setIsActive(false);
						alert('Countdown ended');
					}
				}, 1000);
			}
			if (!isActive && timerTime !== 0) {
				clearInterval(interval);
			}
			return () => clearInterval(interval);
		},
		[
			isActive,
			timerTime
		]
	);

	return (
		<div className='app'>
			<div className='time'>
				{timerTime} {minutes} {seconds}
			</div>

			<div className='row'>
				<button className={`${isActive ? 'active' : 'inactive'}`} onClick={startTimer}>
					{isActive ? 'Pause' : 'Start'}
				</button>
				<ConsoleLog>{isActive}</ConsoleLog>
				<ConsoleLog>{timerTime}</ConsoleLog>
				<ConsoleLog>{`Min: ${minutes}`}</ConsoleLog>
				<ConsoleLog>{`Sec: ${seconds}`}</ConsoleLog>
				<button onClick={reset}>Reset timer</button>
			</div>
			<div className='presetTimer'>
				{' '}
				<button onClick={oneMin}>1 min</button> <button onClick={threeMin}>3 min</button>{' '}
			</div>
		</div>
	);
};

export default Timer;
