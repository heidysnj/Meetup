import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Moment from "react-moment";

export const Group = () => {
	const { store } = useContext(Context);
	const params = useParams();
	let cityGroup = "";
	let nameGroup = "";
	let stateGroup = "";
	let idGroup = parseInt(params.theid);

	for (let i in store.group) {
		if (store.group[i].ID === idGroup) {
			cityGroup = store.group[i].city;
			stateGroup = store.group[i].state;
			nameGroup = store.group[i].post_content;
		}
	}

	return (
		<div>
			<div className="container-fluid bg-dark text-white">
				<div className="container" />
				<div className="row">
					<div className="col-md-6 d-flex justify-content-center">
						<h1>
							<div className="col-md-12  center mt-3">600 X 350</div>
						</h1>
					</div>
					<p className="col-md-6">
						<p style={{ fontSize: "30px" }}>{nameGroup}</p>
						<p style={{ fontSize: "14px", color: "darkgrey" }}>Location</p>
						<p style={{ fontSize: "18px" }}>
							{cityGroup} , {stateGroup}
						</p>
					</p>
				</div>
			</div>

			<div className="container d-flex justify-content-center">
				<ul className="list-group">
					{store.event.reverse().map((item, index) => {
						if (item.meta_keys._groupId === idGroup) {
							return (
								<div key={index}>
									<div className="container">
										<div
											className="card mt-2 mb-2 d-flex justify-content-center "
											style={{ width: "400px" }}>
											<div className="card-header">
												<h5>
													<Moment format="MMMM Do">{item.meta_keys.day}</Moment>
												</h5>
											</div>
											<div className="card-body" />
											<div />
											<div className="row">
												<div className="col-md-4">
													<h5 className="card-title d-flex justify-content-center">
														{item.meta_keys.time}
													</h5>
												</div>
												<div className="col-md-8">
													<p className="card-text">
														<Link to={"/event/" + item.meta_keys._groupId}>
															<span>{item.post_title}</span>
														</Link>
													</p>
													<p className="card-text mb-2">
														<Link to={"/group/" + item.meta_keys._groupId}>
															<span>{nameGroup}</span>
														</Link>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						}
					})}
				</ul>
			</div>
		</div>
	);
};

Group.propTypes = {
	match: PropTypes.object
};
