import React from "react";
import { Card, CardContent } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Jon",
      lastName: "Doe",
      email: "jon@email.com",
      teamName: "blue",
      teamMembers: ["one", "two", "three"],
      ideaTitle: "Idea 1",
      ideaDescription: "Another idea that will be better",
      skills: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
  }

  handleChange = name => event => {
    debugger;
    this.setState({ [name]: event.target.value });
  };

  handleContinue = () => {
    let userData = {
      "user": {
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "email": this.state.email
      },
      "team": {
        "name": this.state.teamName,
        "members": this.state.teamMembers
      },
      "idea": {
        "title": this.state.ideaTitle,
        "description": this.state.ideaDescription
      }
    };

    debugger;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });

    this.props.history.push(`/Baseline`)
  }

  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item md={5}>
            <Card>
              <CardContent>
                <Grid container spacing={16} alignItems="stretch">
                  <Grid item lg={5} style={{ backgroundColor: 'dark' }}>
                    <Typography variant="h3" color="secondary">Register Now..</Typography>
                    <Typography variant="h5" color="primary">and let the hacking begin!</Typography>
                  </Grid>
                  <Grid item lg={7}>
                    <Grid container>
                      <Grid item xs={12}>
                        <TextField id="firstName" label="First Name"
                          value={this.state.firstName}
                          onChange={this.handleChange("firstName")}
                          margin="normal" variant="outlined" fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="lastName" label="Last Name"
                          value={this.state.lastName}
                          onChange={this.handleChange("lastName")}
                          margin="normal" variant="outlined" fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="email" label="Email"
                          value={this.state.email}
                          onChange={this.handleChange("email")}
                          margin="normal" variant="outlined" fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="teamName" label="Team Name"
                          value={this.state.teamName}
                          onChange={this.handleChange("teamName")}
                          margin="normal" variant="outlined" fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="ideaTitle" label="Idea"
                          value={this.state.ideaTitle}
                          onChange={this.handleChange("ideaTitle")}
                          margin="normal" variant="outlined" fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="ideaDescription" label="Idea Description"
                          value={this.state.ideaDescription}
                          onChange={this.handleChange("ideaDescription")}
                          margin="normal" variant="outlined" fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="skills" label="Skills"
                          value={this.state.skills}
                          onChange={this.handleChange("skills")}
                          margin="normal" variant="outlined" fullWidth
                        />
                      </Grid>
                    </Grid>
                    <Button onClick={this.handleContinue} variant="outlined" color="secondary">Continue</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </div>
    )
  }
}

export default Register;