import React, { useState, useEffect, useContext } from "react";

import "../../styles/home.scss";
import Moment from "react-moment";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container d-flex justify-content-center">
			<ul className="list-group">
				{store.events.reverse().map((item, index) => {
					return (
						<div
							className="card mt-3 d-flex justify-content-center "
							key={index}
							style={{ width: "400px" }}>
							<div className="card-header">
								<h5>
									<Moment format="MMMM Do YYYY">{item.meta_keys.day}</Moment>
								</h5>
							</div>
							<div className="card-body" />
							<div />
							<div className="row">
								<div className="col-md-5">
									<h5 className="card-title d-flex justify-content-center">{item.meta_keys.time}</h5>
								</div>
								<div className="col-md-7">
									<p className="card-text">
										<Link to={"/event"}>
											<span>{item.post_title}</span>
										</Link>
									</p>
									<p className="card-text">
										<Link to={"/group"}>
											<span>Meetup {item.meta_keys._groupId}</span>
										</Link>
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</ul>
		</div>
	);
};
