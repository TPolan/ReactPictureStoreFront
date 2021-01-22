import React, {useState} from 'react';
import {Grid} from "@material-ui/core";
import './UploadForm.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ProgressBar from "../ProgressBar/ProgressBar";

const UploadForm = props => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const allowedTypes = ['image/jpeg', 'image/png']

    const handleChange = (event) => {
        let selected = event.target.files[0];
        if (selected && allowedTypes.includes(selected.type)) {
            setFile(selected)
        } else {
            setFile(null);
            setError('File type has to be jpeg/png')
        }
    };

    console.log(file)
    console.log('file upload form')

    return (
        <Grid container justify={"center"}>
            <Grid item>
                <form className={'form-root'}>
                    <label>
                        <input type='file' onChange={handleChange}/>
                        <AddCircleIcon fontSize={'large'}/>
                    </label>
                    <div className="output">
                        {error && <div className="error">{error}</div>}
                        {file && <div>{file.name}</div>}
                        {file && <ProgressBar file={file}/>}
                    </div>
                </form>
            </Grid>
        </Grid>
    )
}

export default UploadForm;