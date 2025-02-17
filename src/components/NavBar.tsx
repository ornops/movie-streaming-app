import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					<Link to="/" style={{ textDecoration: "none", color: "white" }}>
						🎬 Movie Stream
					</Link>
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
