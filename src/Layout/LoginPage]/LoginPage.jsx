
import * as React from 'react';
import {Box, Paper, Typography,Grid} from "@material-ui/core";
import useStyles from '../styles'




const Contacts = () => {
    const classes = useStyles()
    return (
        <Box>
            <main className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={11} md={11}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" className={classes.title}>
                                Login Page
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

            </main>
        </Box>
    );
};
export default Contacts;