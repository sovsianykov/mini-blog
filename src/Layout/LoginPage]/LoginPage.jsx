
import * as React from 'react';
import { connect } from "react-redux";
import {Box, Paper, Typography,Grid} from "@material-ui/core";
import useStyles from '../styles'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../Config/firbase'

import auth from "firebase/auth";
const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: '/',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
}

const classes = useStyles()
class LoginPage extends React.Component{

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Box>
                <main className={classes.root}>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={11} md={11}>
                            <Paper className={classes.paper}>
                                <Typography variant="h4" className={classes.title}>
                                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </main>
            </Box>
        );


    }
};
const enhance = connect(
    // Map redux state to component props
    ({ firebase: { auth, profile } }) => ({
        auth,
        profile
    })
)

export default enhance(LoginPage);