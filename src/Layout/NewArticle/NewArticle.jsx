
import * as React from 'react';
import {Box, Paper, Typography, Grid, Button, Card, CardContent, FormControl,FormHelperText,MenuItem,Select,InputLabel } from "@material-ui/core";
import useStyles from '../styles'
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import {useState} from "react";
import firebase from "../../Config/firebase";
import { db } from '../../Config/firebase'


const NewArticle = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [ispublished, setIspublished] = useState(false);

    const onChangeArticleContent = (e) => {
        setContent(e)
    };
    const onTrue = (e) => {
        setIspublished(e.target.value)
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();

        const article = {
            title: title,
            content: content,
            createDate: new Date(),
            imageSrc : 'https://i.pinimg.com/564x/82/52/ea/8252ea04b73f30f392da448124dca858.jpg',
            isPublish : ispublished,
            createUserID : 'Sangit'
        };
        console.log(article)
       db.collection("Article").doc("sg").set({
           title: title,
           content: content,
           createDate: new Date(),
           imageSrc : 'https://i.pinimg.com/564x/82/52/ea/8252ea04b73f30f392da448124dca858.jpg',
           isPublish : ispublished,
           createUserID : 'Sangit'

        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    };


    const classes = useStyles()
    return (
        <Box>
            <main className={classes.root}>
                <Paper className={classes.paper}>
                <Grid container justify="space-around">
                    <Grid item xs={12} sm={9} md={9}>

                            <Typography variant="h4" className={classes.title}>
                                New Article
                            </Typography>
                            <form onSubmit={onHandleSubmit}>
                                <div className={classes.title}>
                                    <input
                                        value={title}
                                        type="text"
                                        name="title"
                                        placeholder="Title"
                                        onChange={ e=>{setTitle(e.target.value)}}
                                        className= {classes.input}
                                    />
                                </div>
                                <div >
                                    <ReactQuill
                                        value={content}
                                        modules={NewArticle.modules}
                                        formats={NewArticle.formats}
                                        placeholder="content"
                                        onChange={e =>onChangeArticleContent(e)}
                                    />
                                </div>

                            </form>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} >
                        <Card className={classes.settings}>
                            <CardContent>
                               <Typography variant="h5" className={classes.title}>
                                   Article settings
                               </Typography>
                                <FormControl >
                                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">

                                    </InputLabel>
                                    <select

                                        // value={age}
                                        onChange={onTrue}

                                    >
                                        <option defaultValue={false}>False</option>
                                        <option defaultValue={true}>True</option>
                                    </select>
                                    <FormHelperText>Published status</FormHelperText>
                                </FormControl>
                                <Button variant='contained'
                                        className={classes.btn} color='secondary'
                                        onClick={e =>onHandleSubmit(e)}>
                                    Submit
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                </Paper>

            </main>
        </Box>
    );
};

NewArticle.modules = {
    toolbar: [
        [{ header: 1 }, { header: 2 }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "blockquote", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clear"],
        ["code-block"],
    ],
};
NewArticle.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    " blockquote",
    "strike",
    "link",
    "image",
    "video",
    "bullet",
    "code-block",
];

export default NewArticle;
