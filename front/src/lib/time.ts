import { appActions, store } from "../store/store";

const paddedNumber = (number: number) =>
	number < 10 ? `0${number}` : number.toString();

export 	const getTime = () => {
	return setInterval(()=>{
	const date = new Date();
	const time = `${paddedNumber(date.getHours())}:${paddedNumber(date.getMinutes())}:${paddedNumber(date.getSeconds())}`;
	store.dispatch(appActions.setTime({
		time,
		date: date.toTimeString(),
	}))
	}, 1000)
}