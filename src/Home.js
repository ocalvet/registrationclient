import React from "react";
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Home extends React.Component {

    render() {
		return (
            <div>
                <Typography variant="h1" color="primary">Home</Typography>
                <Link to="/Register" style={{ textDecorationLine: 'none' }}><Button variant="outlined" color="secondary">Register</Button></Link>
            </div>
        )
    }
}

export default Home;