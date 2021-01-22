import React from 'react';
import {Typography} from "@material-ui/core";
import './Headline.css';

const Headline = props => {

    return (
        <div className={'headlineRoot'}>
            <Typography variant={"h1"}>
                Picture Store Front
            </Typography>
            <Typography variant={"h3"}>
                here you can browse and upload your photos
            </Typography>
        </div>
    )
}

export default Headline;