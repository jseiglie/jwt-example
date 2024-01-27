import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { ProfesorMain } from "../component/profesorMain";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	useEffect(()=>{
		//localStorage.getitem("token")
		if (!store.user) navigate("/")
		console.log(store.user)
	},[])

	return (
		<div className="container">
			{store.user?.is_active? <ProfesorMain/> : <h2>No lo está</h2>}
		</div>
	);
};
