import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from "react-router-dom";
import img1 from './../../assests/archtopbg.JPG';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100% ',
        textDecoration: "none"

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
export const timeStampToString = (ts) => {
     const  date = new Date(ts *1000)
    return date.getFullYear() + '/'+  (date.getMonth() + 1) + '/' + date.getDay()
}
export default function ArticleCard({data}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root} component={Link} to ={{
            pathname : 'article/' +data.id,
            state : data
        }} >
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        SO
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={data.title}
                subheader={timeStampToString(data.createDate.seconds)}
            />
            <CardMedia
                className={classes.media}
                image={img1}
                title={data.title}
            />
            <CardContent>
                <Typography variant="h5" color="textSecondary" component="h5" align='center'>
                    {data.categoryLabel}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
