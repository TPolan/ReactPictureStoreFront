import React from 'react';
import {Grid} from "@material-ui/core";
import useFirestore from "../../hooks/useFirestore";
import Good from "../../components/Good/Good";
import './Goods.css'


const Goods = props => {

    const {docs} = useFirestore('images');

    const mappedImages = docs.map((image) => {
        return (
            <Good
                item
                key={image.id}
                url={image.url}
            />
        )
    })

    return (
        <div  className='img-grid'>
            {docs && mappedImages}
        </div>
    )
}

export default Goods;