import React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Input from '@material-ui/core/Input';
import MenuItem from "@material-ui/core/MenuItem";
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import HackImg from "../assests/hack.PNG"

const skillOptions = [
  'nodeJs',
  'React',
  'Ng',
  'C#',
  'Java',
  'Sql Server',
  'Oracle',
];

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formTouched: false,
      firstName: "John",
      lastName: "Doe",
      email: "",
      teamName: "",
      teamMembers: ["one", "two", "three"],
      ideaTitle: "",
      ideaDescription: "Another idea that will be better",
      skills: []
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
  }

  formIsValid() {
    if (this.state.firstName.length === 0 || this.state.lastName.length === 0 || !this.emailIsValid(this.state.email))
      return false
    else
      return true
  }

  emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  handleTextChange = name => event => {
    this.setState({ formTouched: true })
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

    // fetch(request, {mode: 'no-cors'})
    // .then(function(response) {
    //   console.log(response); 
    // }).catch(function(error) {  
    //   console.log('Request failed', error)  
    // });


    // fetch("http://940.121.12.189:8080/api/registrations/", {
    //   mode: 'no-cors',
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // }).then(response => {
    //   response.json().then(data => {
    //     console.log("Successful" + data);
    //   });
    // });

    debugger;

    // this.props.history.push(`/Baseline`)
  }

  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item md={5}>
            <Card>
              <CardHeader title="NCCI HACKATHON" />
              <CardContent>
                <Grid container spacing={16} alignItems="stretch">
                  <Grid item lg={5} style={{ backgroundColor: 'dark' }}>
                    <Typography variant="h3" color="secondary">Register Now..</Typography>
                    <Hidden mdDown>
                      <img src={HackImg} alt="Hack Class" style={{ height: "200px", width: "200px", borderRadius: "50%", marginTop: "25px", marginBottom: "25px", opacity: "0.3" }} />
                    </Hidden>
                    <Typography variant="h5" color="secondary">and let the hacking begin!</Typography>
                  </Grid>
                  <Grid item lg={7}>
                    <Grid container>
                      <Grid item xs={12}>
                        <TextField id="firstName" label="First Name"
                          value={this.state.firstName}
                          onChange={this.handleTextChange("firstName")}
                          margin="normal" variant="outlined" fullWidth
                          helperText={this.state.formTouched && this.state.firstName.length === 0 ? 'Required' : ''}
                          error={this.state.formTouched && this.state.firstName.length === 0 ? true : false}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="lastName" label="Last Name"
                          value={this.state.lastName}
                          onChange={this.handleTextChange("lastName")}
                          margin="normal" variant="outlined" fullWidth
                          helperText={this.state.formTouched && this.state.lastName.length === 0 ? 'Required' : ''}
                          error={this.state.formTouched && this.state.lastName.length === 0 ? true : false}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="email" label="Email"
                          value={this.state.email}
                          onChange={this.handleTextChange("email")}
                          margin="normal" variant="outlined" fullWidth
                          helperText={this.state.formTouched && !this.emailIsValid(this.state.email) ? 'Valid Email Required' : ''}
                          error={this.state.formTouched && !this.emailIsValid(this.state.email) ? true : false}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="teamName" label="Team Name"
                          value={this.state.teamName}
                          onChange={this.handleTextChange("teamName")}
                          margin="normal" variant="outlined" fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="ideaTitle" label="Idea"
                          value={this.state.ideaTitle}
                          onChange={this.handleTextChange("ideaTitle")}
                          margin="normal" variant="outlined" fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="ideaDescription" label="Idea Description"
                          value={this.state.ideaDescription}
                          onChange={this.handleTextChange("ideaDescription")}
                          margin="normal" variant="outlined" fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        Skills
                        <Select
                          label="Skills" multiple
                          value={this.state.skills}
                          onChange={this.handleTextChange("skills")}
                          input={<Input id="select-multiple-chip" />}
                          renderValue={selected => (
                            <div>
                              {selected.map(value => (
                                <Chip key={value} label={value} color={"primary"} style={{marginRight: '2px'}} />
                              ))}
                            </div>
                          )}
                          variant="outlined" fullWidth
                        >
                          {skillOptions.map(skills => (
                            <MenuItem key={skills} value={skills}>
                              {skills}
                            </MenuItem>
                          ))}
                        </Select>
                      </Grid>
                    </Grid>
                    <br />
                    <Button onClick={this.handleContinue} variant="outlined" color="primary" disabled={!this.formIsValid()}>
                      Continue
                    </Button>
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