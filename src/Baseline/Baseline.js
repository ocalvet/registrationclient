import React from "react";
import { Link } from "react-router-dom";
import * as _ from 'lodash';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { Card, CardContent } from "@material-ui/core/";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core/';
import Typography from "@material-ui/core/Typography";

import AccountIcon from '@material-ui/icons/Whatshot';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import GroupIcon from '@material-ui/icons/Security';
import SchoolIcon from '@material-ui/icons/School';
import DeveloperImg from '../Graphics/Developer.png';
import TeamImg from '../Graphics/Team.png';
import IdeaImg from '../Graphics/Idea.png';
import SkillsImg from '../Graphics/Skills.png';

class Baseline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registrationData: [],
            //registrationData: [{ "id": "0b72db9d-c3fd-4d62-46b7-6a495cd55816", "user": { "firstName": "Jack", "lastName": "Black", "email": "jblack@test.com", "skills": ["Oracle", "Unix"] }, "idea": { "title": "my idea", "description": "coffe maker" }, "team": { "name": "Motorhead", "logo": "", "members": ["Lemmy", "Kimble"] } }, { "id": "0dd58785-61fc-4019-6f40-5af718f4c812", "user": { "firstName": "jane", "lastName": "doe", "email": "jdoe@test.com", "skills": ["Ng", "SQL Server"] }, "idea": { "title": "idea test", "description": "descript test" }, "team": { "name": "blue", "logo": "", "members": ["jack doe"] } }, { "id": "10708e80-57a0-42ef-5d30-09e353781aad", "user": { "firstName": "Tintin", "lastName": "Llolote", "email": "ifletcher@example.com", "skills": ["c#", "go", "NodeJS"] }, "idea": { "title": "Idea 31", "description": "Another idea that will be better" }, "team": { "name": "Horizon", "logo": "http://example.com/logo.jpg", "members": ["John", "Yohay", "Jeff"] } }, { "id": "163e51d9-a2ac-4f46-486d-c1104bbc1639", "user": { "firstName": "", "lastName": "", "email": "", "skills": null }, "idea": { "title": "", "description": "Another idea that will be better" }, "team": { "name": "", "logo": "", "members": ["one", "two", "three"] } }, { "id": "26f0f42b-5f61-403e-632c-42b4691e7032", "user": { "firstName": "steve", "lastName": "jobs", "email": "sjobs@test.com", "skills": [] }, "idea": { "title": "", "description": "" }, "team": { "name": "apple", "logo": "", "members": [] } }, { "id": "37591762-9cac-4cb3-7a1e-9d0ca13a3e83", "user": { "firstName": "Tintin", "lastName": "Tina", "email": "ifletcher@example.com", "skills": ["c#", "go", "NodeJS"] }, "idea": { "title": "Idea 31", "description": "Another idea that will be better" }, "team": { "name": "Horizon", "logo": "http://example.com/logo.jpg", "members": ["John", "Yohay", "Jeff"] } }, { "id": "41fa09a0-fc79-4f89-409f-ab3bb592e4c8", "user": { "firstName": "trent", "lastName": "renzor", "email": "nin@test.com", "skills": [] }, "idea": { "title": "", "description": "" }, "team": { "name": "machine", "logo": "", "members": [] } }, { "id": "5ee42d4d-d612-45b8-48ba-2d7d460df558", "user": { "firstName": "John", "lastName": "Doe", "email": "jdoe@test.com", "skills": null }, "idea": { "title": "", "description": "Another idea that will be better" }, "team": { "name": "", "logo": "", "members": ["one", "two", "three"] } }, { "id": "63e2e767-7c56-4d5a-6775-4ba072eb1cd0", "user": { "firstName": "barry", "lastName": "sanders", "email": "bsanders@test.com", "skills": [] }, "idea": { "title": "", "description": "" }, "team": { "name": "", "logo": "", "members": [] } }, { "id": "6e98adfb-652f-48fc-73e7-f518f40393ad", "user": { "firstName": "bill", "lastName": "gates", "email": "bgates@test.com", "skills": [] }, "idea": { "title": "", "description": "" }, "team": { "name": "microsoft", "logo": "", "members": [] } }, { "id": "75e88754-c236-4ba4-47df-67f1efe9afae", "user": { "firstName": "chester", "lastName": "bennington", "email": "cbenn@test.com", "skills": ["React"] }, "idea": { "title": "", "description": "" }, "team": { "name": "linkin", "logo": "", "members": [] } }, { "id": "7d018acb-8a28-4a04-5a5a-57aa199762d0", "user": { "firstName": "NCCI Test", "lastName": "Logo User", "email": "qweqw@lolote.com", "skills": ["Oracle", "React", "SQL Server", "Unix", "C#"] }, "idea": { "title": "WEK", "description": "WEEK" }, "team": { "name": "WOK", "logo": "", "members": [] } }, { "id": "b2389985-c451-45c9-5d54-9cd47ea0754e", "user": { "firstName": "john", "lastName": "doe", "email": "jdoe@ncci.com", "skills": null }, "idea": { "title": "lll", "description": "Another idea that will be better" }, "team": { "name": "sample", "logo": "", "members": ["one", "two", "three"] } }, { "id": "b3c2a16b-b3f9-40c5-5d32-ecc21598f0c4", "user": { "firstName": "maynard", "lastName": "key", "email": "tool@test.com", "skills": [] }, "idea": { "title": "", "description": "" }, "team": { "name": "", "logo": "", "members": [] } }, { "id": "b4ae2cfd-86aa-4714-69b4-004356bdea6f", "user": { "firstName": "bill", "lastName": "gates", "email": "bgates@test.com", "skills": [] }, "idea": { "title": "", "description": "" }, "team": { "name": "microsoft", "logo": "", "members": [] } }, { "id": "bf21b8c1-88c1-4a74-6b1c-4d6b396b1a78", "user": { "firstName": "Macadamia", "lastName": "Tina", "email": "ifletcher@example.com", "skills": ["c#", "go", "NodeJS"] }, "idea": { "title": "Idea 31", "description": "Another idea that will be better" }, "team": { "name": "Horizon", "logo": "http://example.com/logo.jpg", "members": ["John", "Yohay", "Jeff"] } }, { "id": "c08a300f-7ef6-4abd-54b0-49ed2ec9ce9d", "user": { "firstName": "asdsad", "lastName": "asdsad", "email": "asdsad@erer.cc", "skills": ["Oracle", "nodeJs", "SQL Server"] }, "idea": { "title": "asdasddsa", "description": "asdsda" }, "team": { "name": "asdsad", "logo": "", "members": ["asdsad"] } }, { "id": "cd83f192-c901-4a78-5d32-c164f2b1c944", "user": { "firstName": "Doug", "lastName": "Williams", "email": "dwilliams@test.com", "skills": ["React"] }, "idea": { "title": "football", "description": "play football" }, "team": { "name": "red", "logo": "", "members": [] } }, { "id": "d07c3ce3-8d01-43b6-7b8c-565eabdd9075", "user": { "firstName": "Lebron", "lastName": "James", "email": "ljames@test.com", "skills": ["Java", "Oracle", "SQL Server"] }, "idea": { "title": "basketball", "description": "play basketball" }, "team": { "name": "lakers", "logo": "", "members": ["johnson", "jabar"] } }, { "id": "d55f34ff-d2ab-4830-5996-2e6507525446", "user": { "firstName": "Christopher", "lastName": "Hernandez", "email": "chris_hernandez@ncci.com", "skills": ["React", "Angular", "nodeJs", "SQL Server", "C#"] }, "idea": { "title": "HVI Targeting", "description": "Link Analysis" }, "team": { "name": "1stRangerBattalion", "logo": "", "members": [] } }, { "id": "d6b0dd24-06c3-43e7-7e40-fbf24080c0be", "user": { "firstName": "Tom", "lastName": "Jones", "email": "ifletcher@example.com", "skills": ["c#", "go", "NodeJS"] }, "idea": { "title": "Idea 3", "description": "Another idea that will be better" }, "team": { "name": "Horizon", "logo": "http://example.com/logo.jpg", "members": ["John", "Yohay", "Jeff"] } }, { "id": "d83e29ec-8cc7-4e6e-78ec-a359b21dd602", "user": { "firstName": "Ben", "lastName": "Roth", "email": "broth@test.com", "skills": ["React", "Unix", "Angular"] }, "idea": { "title": "towel", "description": "black and gold" }, "team": { "name": "Steelers", "logo": "", "members": ["harris", "troy", "taylor"] } }, { "id": "d88a33bd-5e37-4f48-7034-c2675b3767f4", "user": { "firstName": "Peter", "lastName": "Loeffler", "email": "Loeffler@test.com", "skills": ["Java", "Oracle"] }, "idea": { "title": "", "description": "" }, "team": { "name": "chevelle", "logo": "", "members": [] } }, { "id": "ff34dde5-1a9a-4191-6c6e-3285b17a869d", "user": { "firstName": "ken", "lastName": "james", "email": "kjames@test.com", "skills": ["Java", "Ng", "Oracle", "sample skill"] }, "idea": { "title": "my idea", "description": "test idea" }, "team": { "name": "red", "logo": "", "members": ["person 1", "person 2", "person 3"] } }],
            expandUsers: false,
            expandTeams: false,
            expandIdeas: false,
            expandSkills: false
        };
    }

    componentDidMount() {
        fetch("http://172.31.2.55/api/registrations", {          
            method: "GET",
            headers: {
              "Accept": "text/plain"
            }
          })
            .then(res => res.json())
            .then(response => {
                this.setState({ registrationData: response });
                console.log(response);
            }).catch(error => {
                console.error("Error: " + error);
            });
    }

    handleUserExpandClick = () => {
        this.setState(state => ({ expandUsers: !state.expandUsers }));
    }

    handleTeamExpandClick = () => {
        this.setState(state => ({ expandTeams: !state.expandTeams }));
    }

    handleIdeaExpandClick = () => {
        this.setState(state => ({ expandIdeas: !state.expandIdeas }));
    }

    handleSkillExpandClick = () => {
        this.setState(state => ({ expandSkills: !state.expandSkills }));
    }

    getSkillData() {
        let skillExtract = this.state.registrationData.map(r => r.user.skills).map(s => (typeof s === "string") ? s.toUpperCase() : '');
        let skillGrp = _.countBy(skillExtract);
        let skillArray = Object.keys(skillGrp).map((key) => { return ({ 'name': key, 'count': skillGrp[key] }) })

        return skillArray;
    }

    render() {
        return (
            <div>
                <Typography variant="h3" color="primary">Enrollment Information</Typography>
                <Link to="/Home" style={{ paddingRight: '10px', textDecoration: 'none' }}>Home</Link> | <Link to="/Register" style={{ paddingLeft: '10px', textDecoration: 'none' }} >Register</Link><br /><br />
                <Grid container spacing={24}>
                    <Grid item lg={3}>
                        <Card style={{ maxWidth: '450px', background: '#222222' }}>
                            <CardContent style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                <img src={DeveloperImg} alt="Developer" />i
                                <Badge badgeContent={this.state.registrationData.length} color="secondary">
                                    <Typography gutterBottom variant="h5" color="primary"> Registered Users</Typography>
                                </Badge>
                                <IconButton onClick={this.handleUserExpandClick}>
                                    <ExpandMoreIcon />
                                </IconButton>
                                <Collapse in={this.state.expandUsers}>
                                    <List dense={true}>
                                        {this.state.registrationData.map((r, i) =>
                                            <div key={i} >
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar style={{ color: 'primary' }}>
                                                            {r.user.firstName.substring(0, 1).toUpperCase()}
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={r.user.firstName + ' ' + r.user.lastName} secondary={r.user.email ? r.user.email : null} />
                                                </ListItem>
                                                <Divider />
                                            </div>
                                        )}
                                    </List>
                                </Collapse>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={3}>
                        <Card style={{ maxWidth: '450px', background: '#222222' }}>
                            <CardContent style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                <img src={TeamImg} alt="Team" />
                                <Badge badgeContent={_.filter(this.state.registrationData, f => f.team.name !== "").length} color="secondary">
                                    <Typography gutterBottom variant="h5" color="primary">Teams</Typography>
                                </Badge>
                                <IconButton onClick={this.handleTeamExpandClick}>
                                    <ExpandMoreIcon />
                                </IconButton>
                                <Collapse in={this.state.expandTeams}>
                                    {_.filter(this.state.registrationData, f => f.team.name !== "").map(r =>
                                        <div>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <GroupIcon color={'primary'} />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={r.team.name} secondary={`Captain: ${r.user.firstName} ${r.user.lastName}`} />
                                            </ListItem>
                                            <List dense={true}>
                                                {r.team.members.map(w => <ListItemText primary={w} style={{ display: 'flex', justifyContent: 'flex-end' }} />)}
                                            </List>
                                            <Divider />
                                        </div>
                                    )}
                                </Collapse>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={3}>
                        <Card style={{ maxWidth: '450px', background: '#222222' }}>
                            <CardContent style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                <img src={IdeaImg} alt="Idea" />
                                <Badge badgeContent={_.filter(this.state.registrationData, f => f.idea.title !== "").length} color="secondary">
                                    <Typography gutterBottom variant="h5" color="primary"> Ideas</Typography>
                                </Badge>
                                <IconButton onClick={this.handleIdeaExpandClick}>
                                    <ExpandMoreIcon />
                                </IconButton>
                                <Collapse in={this.state.expandIdeas}>
                                    <List dense={true}>
                                        {_.filter(this.state.registrationData, f => f.idea.title !== "").map(r =>
                                            <div>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <AccountIcon color={'secondary'} />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={r.idea.title} secondary={r.idea.description ? r.idea.description : null} />
                                                </ListItem>
                                                <Divider />
                                            </div>
                                        )}
                                    </List>
                                </Collapse>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={3}>
                        <Card style={{ maxWidth: '450px', background: '#222222' }}>
                            <CardContent style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                <img src={SkillsImg} alt="Skills" />
                                <Badge badgeContent={this.getSkillData().length} color="secondary">
                                    <Typography gutterBottom variant="h5" color="primary"> Skills</Typography>
                                </Badge>
                                <IconButton onClick={this.handleSkillExpandClick}>
                                    <ExpandMoreIcon />
                                </IconButton>
                                <Collapse in={this.state.expandSkills}>
                                    <List dense={true}>
                                        {_.orderBy(this.getSkillData(), 'count', 'desc').map(s =>
                                            <div>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <SchoolIcon color={'primary'} />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={`${s.count} Employees have ${s.name}`} />
                                                </ListItem>
                                                <Divider />
                                            </div>
                                        )}
                                    </List>
                                </Collapse>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Baseline;
