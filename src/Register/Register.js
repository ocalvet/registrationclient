import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@material-ui/core/";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core/";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Fab from '@material-ui/core/Fab';
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { sortBy } from "lodash";


import SchoolIcon from '@material-ui/icons/School';
import HelpIcon from '@material-ui/icons/Help';
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";

import logo2 from '../Graphics/NCCI-1st-IT-Hackathon-17.png';
import HackImg from "../Graphics/hackclasssq.png";
import hackathonLogo from "../Graphics/ncciHackathonLogo.png";
import HackathonTechFlow from "../Graphics/HackathonTechFlow.jpg";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formTouched: false,
            displayTeammateHelper: false,
            displaySkillHelper: false,
            dialogOpen: false,
            dialogType: '',
            dialogMessage: '',
            newItem: "",
            skillOptions: ["NodeJs", "React", "Angular", "C#", "Java", "Oracle", "SQL Server", "JavaScript", "CSS", "HTML5", "AJAX", "JSON", "Material-UI", "Selenium", "Jest", "Mongo", "Protractor", "Jasmine", "JUnit", "Windows", "Linux"],
            firstName: "",
            lastName: "",
            email: "",
            equipment: "",
            teamName: "",
            teamMembers: [],
            ideaTitle: "",
            ideaDescription: "",
            skills: []
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleContinue = this.handleContinue.bind(this);
    }

    formIsValid() {
        if (this.state.firstName.length === 0 || this.state.lastName.length === 0 || !this.emailIsValid(this.state.email) || this.state.equipment.length === 0)
            return false
        else
            return true
    }

    emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    handleTextChange = name => event => {
        this.setState({ displayTeammateHelper: (name === "teamName") });
        this.setState({ displaySkillHelper: (name === "skills") });
        this.setState({ formTouched: true })
        this.setState({ [name]: event.target.value });
    };

    handleDeleteMember = (name) => {
        this.setState({ teamMembers: this.state.teamMembers.filter(e => e !== name.member) });
    }

    handleDialogClickOpen = (actionType) => {
        debugger;
        this.setState({ dialogType: actionType })
        this.setState({ dialogOpen: true });
    };

    handleDialogAddItem = () => {
        this.setState({ dialogMessage: "" });

        if (this.state.dialogType === "Skill") {
            if (typeof this.state.skills.find(x => x === this.state.newItem) === 'undefined') {
                var newSkills = this.state.skills;
                newSkills.push(this.state.newItem);
                this.setState({ skills: newSkills });
                this.setState({ newItem: "" });
            } else {
                this.setState({ dialogMessage: "Skill entered is a duplicate." })
            };

            if (typeof this.state.skillOptions.find(x => x === this.state.newItem) === 'undefined') {
                var newOptions = this.state.skillOptions;
                newOptions.push(this.state.newItem);
                this.setState({ skillOptions: newOptions });
            };
        } else {
            if (typeof this.state.teamMembers.find(x => x === this.state.newItem) === 'undefined') {
                var newMember = this.state.teamMembers;
                newMember.push(this.state.newItem);
                this.setState({ teamMembers: newMember });
                this.setState({ newItem: "" });
            } else {
                this.setState({ dialogMessage: "Teammate entered is a duplicate." })
            };
        }
    }

    handleDialogClose = () => {
        this.setState({ newItem: "" });
        this.setState({ dialogOpen: false });
    };

    handleContinue = () => {
        let userData = {
            "user": {
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "email": this.state.email,
                "skills": this.state.skills,
                "equipment": this.state.equipment
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

        fetch(`${process.env.REACT_APP_API_URL}`, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            console.log(res)
            if (res.status !== 200) {
                throw new Error("Error creating registration");
            }
            return res.json();
        })
        .then(json => {
            console.log('Got data', json);
            this.props.history.push("/Baseline");
        }).catch(function (error) {
            //Handle error
            // TODO Add error to state so that it can be display for the user to contact us
            console.log(error);
        });
    }

    render() {
        return (
            <div >
                <div className="stripe--1">
                    <div className="text-box--1">
                        <img src={logo2} alt="NCCI" id="ncci_logo" ></img>
                        {/* <p>Presented by the Innovation Group.</p> */}
                        <img src={hackathonLogo} alt="logo" className="hackathon_Logo" id="hackathon_logo" ></img>
                    </div>
                </div>
                <Grid container justify="center" style={{ paddingTop: '245px' }}>
                    <Grid item md={5}>
                        <Card style={{ background: '#222222' }}>
                            <CardContent>
                                <Grid container spacing={16} alignItems="stretch">
                                    <Grid item lg={5} style={{ backgroundColor: 'dark', paddingTop: '65px' }}>
                                        <Typography variant="h4" color="secondary">Register Now</Typography>
                                        <Typography align="left">First name, last name, and email address is required. If you have a team enter the name and teammates.</Typography>
                                        <Hidden mdDown>
                                            <img src={HackImg} alt="Hack Class" style={{ height: "200px", width: "200px", borderRadius: "50%", marginTop: "25px", marginBottom: "25px" }} />
                                        </Hidden>
                                        <Typography align="left">Feel free to brainstorm ideas for the Hackathon. Also don't forget to select any computer skills you possess.</Typography>
                                        <Typography variant="h5" color="secondary">Get your Hack-on!</Typography>
                                    </Grid>
                                    <Grid item lg={7}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <TextField id="firstName" label="First Name"
                                                    value={this.state.firstName} inputProps={{ maxLength: 15 }}
                                                    onChange={this.handleTextChange("firstName")}
                                                    margin="normal" variant="outlined" fullWidth autoComplete="new-password"
                                                    helperText={this.state.firstName.length < 2 ? 'Required' : ''}
                                                    error={this.state.firstName.length < 2 ? true : false}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField id="lastName" label="Last Name"
                                                    value={this.state.lastName} inputProps={{ maxLength: 20 }}
                                                    onChange={this.handleTextChange("lastName")}
                                                    margin="normal" variant="outlined" fullWidth autoComplete="new-password"
                                                    helperText={this.state.lastName.length < 2 ? 'Required' : ''}
                                                    error={this.state.lastName.length < 2 ? true : false}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField id="email" label="Email"
                                                    value={this.state.email} inputProps={{ maxLength: 50 }}
                                                    onChange={this.handleTextChange("email")}
                                                    margin="normal" variant="outlined" fullWidth autoComplete="off"
                                                    helperText={!this.emailIsValid(this.state.email) ? 'Valid Email Required' : ''}
                                                    error={!this.emailIsValid(this.state.email) ? true : false}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>

                                                <FormControl component="fieldset" error={this.state.equipment.length === 0 ? true : false}>
                                                    <FormLabel component="legend">Will you be using your own equipment <Tooltip title="Help me decide"><HelpIcon color="primary" onClick={() => this.handleDialogClickOpen('Equipment')} /></Tooltip></FormLabel>
                                                    <RadioGroup
                                                        name="equipment"
                                                        value={this.state.equipment}
                                                        onChange={this.handleTextChange('equipment')}
                                                        row
                                                    >
                                                        <FormControlLabel value="own" control={<Radio color='primary' />} label="I will bring my own laptop" />
                                                        <FormControlLabel value="ncci" control={<Radio color='primary' />} label="I need assistance" />
                                                    </RadioGroup>
                                                </FormControl>

                                            </Grid>
                                            <Grid item xs={12} style={{ display: (this.state.displayTeammateHelper ? 'block' : 'none') }}>
                                                <Typography variant="h5" color="primary">Click the icon to add teammates</Typography>
                                            </Grid>
                                            <Grid item xs={10}>
                                                <TextField id="teamName" label="Team Name"
                                                    value={this.state.teamName} inputProps={{ maxLength: 35 }}
                                                    onChange={this.handleTextChange("teamName")}
                                                    margin="normal" variant="outlined" fullWidth autoComplete="new-password"
                                                />
                                            </Grid>
                                            <Grid item xs={2} style={{ verticalAlign: 'bottom' }}>
                                                <Tooltip title="Add your teammate">
                                                    <div>
                                                        <Fab color="primary" size={(this.state.teamName.length ? 'large' : 'small')} style={{ marginTop: '22px' }} disabled={(!this.state.teamName.length)}
                                                            onClick={() => this.handleDialogClickOpen('Teammate')}>
                                                            <PersonAddIcon />
                                                        </Fab>
                                                    </div>
                                                </Tooltip>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <div>
                                                    {this.state.teamMembers.map((member, i) =>
                                                        <Chip key={i} name={member} label={member} onDelete={() => this.handleDeleteMember({ member })} color={"secondary"} style={{ marginBottom: '3px', marginRight: '3px' }}
                                                            avatar={<Avatar> <PersonIcon /> </Avatar>} />
                                                    )}
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField id="ideaTitle" label="Idea"
                                                    value={this.state.ideaTitle} inputProps={{ maxLength: 100 }}
                                                    onChange={this.handleTextChange("ideaTitle")}
                                                    margin="normal" variant="outlined" fullWidth autoComplete="new-password"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField id="ideaDescription" label="Idea Description"
                                                    value={this.state.ideaDescription} inputProps={{ maxLength: 200 }}
                                                    onChange={this.handleTextChange("ideaDescription")}
                                                    margin="normal" variant="outlined" fullWidth autoComplete="new-password"
                                                />
                                            </Grid>
                                            <Grid item xs={12} style={{ display: (this.state.displaySkillHelper ? 'block' : 'none') }}>
                                                <Typography variant="h5" color="primary">Click the icon to add additional skills</Typography>
                                            </Grid>
                                            <Grid item xs={10}>
                                                <FormControl fullWidth variant="outlined" style={{ marginTop: '15px' }}>
                                                    <InputLabel htmlFor="skillSelect" style={{ background: '000000' }}>Skills</InputLabel >
                                                    <Select
                                                        multiple
                                                        value={this.state.skills}
                                                        onChange={this.handleTextChange("skills")}
                                                        input={<OutlinedInput id="skillSelect" labelWidth={40} />}
                                                        renderValue={selected => (
                                                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                                {selected.map(value => (
                                                                    <Chip key={value} label={value} color={"secondary"} style={{ marginTop: '3px', marginRight: '3px' }} />
                                                                ))}
                                                            </div>
                                                        )}
                                                        fullWidth
                                                    >
                                                        {sortBy(this.state.skillOptions).map(skills => (
                                                            <MenuItem key={skills} value={skills} dense={true}>
                                                                {skills}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Tooltip title="Add a skill">
                                                    <div>
                                                        <Fab color="primary" aria-label="Add" size={(this.state.skills.length ? 'large' : 'small')} style={{ marginTop: '22px' }} onClick={() => this.handleDialogClickOpen('Skill')} disabled={!this.state.formTouched}>
                                                            <SchoolIcon />
                                                        </Fab>
                                                    </div>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <Button onClick={this.handleContinue} variant="outlined" color="primary" disabled={!this.formIsValid()}>
                                            Register
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <br />
                <Link to="/Home" style={{ paddingRight: '10px', textDecoration: 'none' }}>Home</Link> | <Link to="/Baseline" style={{ paddingLeft: '10px', textDecoration: 'none' }} >Enrollment Data</Link>
                <Dialog open={this.state.dialogOpen} onClose={this.handleDialogClose} fullScreen={(this.state.dialogType === 'Equipment') ? true : false}>
                    <DialogTitle>
                        {(this.state.dialogType === 'Equipment') ? 'Technology Equipment Flow Chart' : (<div>Enter additional {this.state.dialogType}</div>)}
                    </DialogTitle>
                    <DialogContent >
                        {(this.state.dialogType === 'Equipment') ?
                            <DialogContentText style={{ textAlign: "center" }}>
                                <img src={HackathonTechFlow} style={{ width: "70%" }} alt="Ugly tech flow" />
                            </DialogContentText> :
                            <DialogContentText>
                                <Typography>{this.state.dialogMessage}</Typography>
                                <TextField id="newItem" label={this.state.dialogType}
                                    value={this.state.newItem} inputProps={{ maxLength: 35 }}
                                    onChange={this.handleTextChange("newItem")}
                                    margin="normal" variant="outlined" fullWidth />
                                <div>
                                    {(this.state.dialogType === "Teammate" && this.state.teamMembers.length > 0 ?
                                        this.state.teamMembers.map(m => (<div>{m}</div>)) : '')}
                                    {(this.state.dialogType === "Skill" && this.state.skills.length > 0 ?
                                        this.state.skills.map((s, i) => (<div key={i}>{s}</div>)) : '')}
                                </div>
                            </DialogContentText>
                        }
                    </DialogContent>
                    <DialogActions>
                        {(this.state.dialogType !== 'Equipment') ?
                            <Button onClick={() => this.handleDialogAddItem()} color="primary" disabled={(this.state.newItem === "")} autoFocus>
                                Add
                        </Button> : ''}
                        <Button onClick={this.handleDialogClose} color="disabled">
                            Done
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Register;
