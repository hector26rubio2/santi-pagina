import { Navigate, Route, Routes } from "react-router-dom";
import { Menu } from "../component";

import { TerceroRouter } from "./";
import { Inicio } from "../pages";

export const AppRouter = () => {
	return (
		<>
			<Menu />
			<div className="container mt-5">
				<Routes>
					<Route path="/inicio" element={<Inicio />} />
					<Route path="/tercero/*" element={<TerceroRouter />} />
					<Route path="/cuarto/*" element={<h1>cuarto</h1>} />
					<Route path="/*" element={<Navigate to="/inicio" />} />
				</Routes>
			</div>
		</>
	);
};
