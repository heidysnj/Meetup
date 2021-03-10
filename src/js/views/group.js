import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Group = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
			{store.group.map((item, index) => {
				<div key={index} className="container-fluid bg-dark text-white">
					<div className="container" />
					<div className="row">
						<div className="col-md-6 d-flex justify-content-center">
							<h1>
								<div className="col-md-12 mt-3 greySquare">600 X 350</div>
							</h1>
						</div>
						<p className="col-md-6">
							<p>{item.post_content}</p>
							<p>Location</p>
							<p />
						</p>
					</div>
				</div>;
			})}
		</div>
	);
};
Group.propTypes = {
	match: PropTypes.object
};
