import React, {useEffect} from 'react';
import useStorage from "../../hooks/useStorage";
import LinearProgress from '@material-ui/core/LinearProgress';

const ProgressBar = ({file, setFile}) => {
    const {progress, error , url} = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <>
            <LinearProgress variant="determinate" value={progress}/>
            {error && <div className="error">{error}</div>}
        </>
    )
}

export default ProgressBar;