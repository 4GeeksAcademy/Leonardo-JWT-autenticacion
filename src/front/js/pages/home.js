import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context);
	const token = store.token;
	const user = store.user;

	if (!token) {
		return (
			<div className="text-center mb-5">
				<h1>¡Hola y bienvenido a nuestra plataforma!</h1>
				<p>Regístrate para acceder a todas las funciones increíbles que hemos preparado para ti.</p>
				<p>Si ya tienes una cuenta, inicia sesión para continuar.</p>
			</div>
		);
	} else {
		return (
			<div className="text-center mb-5">
				<h1>¡Bienvenido de nuevo, {user}!</h1>
				<p>Esperamos que disfrutes de tu experiencia. Explora, descubre y aprovecha todas nuestras herramientas.</p>
				<p>Cuando termines, puedes cerrar sesión con el botón en la parte superior.</p>
			</div>
		);
	}
};