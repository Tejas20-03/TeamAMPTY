import React,{useState} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import useStyles from './styles';
import {createPost} from '../../actions/posts';

const Form = () => {
    const [postData,setPostData] = useState({
        creator:'',title:'',description:'',tags:'',selectedFile:''
    });
    const classes = useStyles();
    const dispatch=useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }
    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form className={'${classes.root} ${classes.form} '} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Career</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData,[e.target.name]:e.target.value}) } />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=> setPostData({...postData,title:e.target.value}) } />
                <TextField name="description" variant="outlined" label="Description" fullWidth value={postData.description} onChange={(e)=> setPostData({...postData,description:e.target.value}) } />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData,tags:e.target.value}) } />
                <div className={classes.fileInput}>Attach Roadmap : 

                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64})=>setPostData({...postData,selectedFile:base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;