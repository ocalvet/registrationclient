import React from "react";
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Register extends React.Component {

    render() {
		return (
            <div>
                <Typography variant="h1" color="primary">Register</Typography>
                <Link to="/Baseline" style={{ textDecorationLine: 'none' }}><Button variant="outlined" color="secondary">Continue</Button></Link>
            </div>
        )
    }
}

export default Register;