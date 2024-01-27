import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
		//validate
		if (actions.login(email, password) ) navigate("/demo")

	}

	return (
		<section className="text-center mt-5">

			<form onSubmit={e => handleSubmit(e)}>
				<input type="text" placeholder="email" name="email" onChange={e => setEmail(e.target.value)} value={email} />
				<input type="text" placeholder="password" name="password" onChange={e => setPassword(e.target.value)} value={password} />
				<input type="submit" value={"login"} />
			</form>

		</section>

	);
};
