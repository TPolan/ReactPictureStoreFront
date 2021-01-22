import React from 'react';
import useStorage from "../../hooks/useStorage";
import LinearProgress from '@material-ui/core/LinearProgress';

const ProgressBar = file => {
    const {progress, error} = useStorage(file);
    console.log('file upload form')
    console.log(file)
    return (
        <>
            <LinearProgress variant="determinate" value={progress}/>
            {error && <div className="error">{error}</div>}
        </>
    )
}

export default ProgressBar;