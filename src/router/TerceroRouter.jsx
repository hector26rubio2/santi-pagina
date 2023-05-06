import { Route, Routes } from "react-router-dom";
import { TemasTercero } from "../pages";

export const TerceroRouter = () => {
	return (
		<Routes>
			<Route path="/matematicas" element={<h1>asdas</h1>} />
			<Route path="/" element={<TemasTercero/>} />
		</Routes>
	);
};
