import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Group = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="text-center">
			<h1 className="display-4">Working in this page</h1>
		</div>
	);
};
