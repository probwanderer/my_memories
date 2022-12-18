import React from 'react';
import useStyles from './styles';
import {Card,CardActions,CardContent,CardMedia, Button , Typography} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
const Post = ({post}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography>
                    
                </Typography>
            </div>
        </Card>
    );

}
export default Post;