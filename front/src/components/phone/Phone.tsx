import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getTime } from '../../lib/time';
import { RootState } from '../../types';
import './Phone.scss'

interface PhonePropsType {
  children: JSX.Element;
}

export const Phone = ({children}: PhonePropsType) => {
	const time = useSelector((state: RootState) => {
		return state.app.time})

	useEffect(()=>{
		getTime();
	},[])

	return (
		<div className='phone-container'>
			<div className='top-bar'>
				<div className='notifications' />
				<div className='notch' />
				<span className='clock'>{time}</span>
			</div>
			{children}
		</div>
	)
}
