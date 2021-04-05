
import * as React from 'react';
import {Box, Paper, Typography, Grid} from "@material-ui/core";
import useStyles from '../styles'
import { withRouter } from 'react-router-dom'
import parse from 'html-react-parser'
import {useEffect, useState} from "react";

export const timeStampToString = (ts) => {
    const  date = new Date(ts *1000)
    return date.getFullYear() + '/'+  (date.getMonth() + 1) + '/' + date.getDay()
}

const ViewArticle = (props) => {
    const classes = useStyles()
    const [article, setArticle] = useState([])
    const[isLoaded, setIsLoaded] =useState(false)

    useEffect(()=>{

        if (  props.location.state !== undefined) {
            setArticle(props.location.state);
            setIsLoaded(true)
        }
    },[props.location.state])


     const timeStampToString = (ts) => {
        const  date = new Date(ts *1000)
        return date.getFullYear() + '/'+  (date.getMonth() + 1) + '/' + date.getDay()
    }


    console.log(article.imageSrc)
    return (
        <Box>
            <main className={classes.root}>
                <Grid container justify="center">

                       <Grid item xs={12} sm={11} md={11}>
                           <Paper className={classes.paper} >
                                <div className={classes.pic} >
                                    <img src={article.imageSrc}  alt="img"/>
                                </div>

                               <Typography variant="h4" className={classes.title}>
                                   {article.title}
                               </Typography>
                               <div className={classes.text}>
                               </div>
                               { isLoaded ?
                                   timeStampToString(article.createDate.seconds)

                                   : 'Loading' }
                           { isLoaded ?
                               parse(article.content)
                               : 'Loading' }
                               <div className={classes.text}>
                                   author : {article.createUserID}
                               </div>
                           </Paper>
                       </Grid>

                </Grid>
            </main>
        </Box>
    );
};
export default withRouter(ViewArticle);