import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import { Box } from "@material-ui/core";

export const Navbar = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">4GeeksAcademy</span>
			</Link>
			<div className="ml-auto">
				<button onClick={handleClickOpen} className="btn btn-primary">
					Login
				</button>
			</div>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Login</DialogTitle>
				<Divider />
				<DialogContent>
					<Box style={{ width: 400 }}>
						<TextField autoFocus margin="dense" id="name" label="Username" variant="outlined" />
					</Box>
					<Box>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Password"
							type="password"
							variant="outlined"
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Login
					</Button>
				</DialogActions>
			</Dialog>
		</nav>
	);
};
