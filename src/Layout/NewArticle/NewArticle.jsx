
import * as React from 'react';
import {Box, Paper, Typography,Grid, Button} from "@material-ui/core";
import useStyles from '../styles'
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import {useState} from "react";



const NewArticle = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onChangeArticleContent = (e) => {
        setContent(e)
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();

        const article = {
            title: title,
            content: content,
            createDate: new Date(),
            imageSrc : 'https://i.pinimg.com/564x/82/52/ea/8252ea04b73f30f392da448124dca858.jpg',
            isPublish : false,
            createUserID : 'Sangit'


        };
        console.log(article)
        // firebase.database().ref("/posts").push(post);
        setTitle("");
        setContent("");
    };


    const classes = useStyles()
    return (
        <Box>
            <main className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={12} sm={11} md={11}>
                        <Paper className={classes.paper}>
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
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <ReactQuill
                                        value={content}
                                        modules={NewArticle.modules}
                                        formats={NewArticle.formats}
                                        placeholder="content"
                                        onChange={e =>onChangeArticleContent(e)}
                                    />
                                </div>
                                <Button variant='contained' className="btn-danger" onClick={e =>onHandleSubmit(e)}>
                                    Post
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>

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