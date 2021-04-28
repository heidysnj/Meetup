import React, { useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store } = useContext(Context);
	let nameGroup = "";

	return (
		<div>
			<div className="container-fluid bg-dark text-white">
				<div className="container">
					<h2 className="d-flex justify-content-center">
						<p>The Meetup Clone</p>
					</h2>
					<p className="d-flex justify-content-center">This is a mini project create by Heidys Nunez</p>
					<p className="d-flex justify-content-center" style={{ fontSize: "10px" }}>
						Using: ReactJs, Bootstrap Moment, React-router
					</p>
					<br />
				</div>
			</div>

			<div className="container d-flex justify-content-center">
				<ul className="list-group">
					{store.event.reverse().map((item, index) => {
						for (let i in store.group) {
							if (store.group[i].ID === item.meta_keys._groupId) {
								nameGroup = store.group[i].post_content;
							}
						}
						return (
							<div
								className="card mt-2 mb-2 d-flex justify-content-center "
								key={index}
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
											<Link to={"/event/" + item.ID}>
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
						);
					})}
				</ul>
			</div>
		</div>
	);
};

Home.propTypes = {
	match: PropTypes.object
};
