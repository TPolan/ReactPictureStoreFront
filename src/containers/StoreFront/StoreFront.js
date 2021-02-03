import React from 'react';
import {Grid} from "@material-ui/core";
import Headline from "../../components/Headline/Headline";
import UploadForm from "../../components/UploadForm/UploadForm";
import './StoreFront.css';
import Goods from "../Goods/Goods";

const StoreFront = () => {

    return (
        <Grid container alignContent={"center"} alignItems={"center"} justify={"center"} className={'root'}>
            <Headline item/>
            <UploadForm item/>
            <Goods/>
        </Grid>
    )
}

export default StoreFront;