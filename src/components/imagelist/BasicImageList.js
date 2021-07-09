import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';


/**
 * The example data is structured as follows:
 */
import image1 from '../../images/image1.jpeg';
import image2 from '../../images/image2.jpeg';
import image3 from '../../images/images3.jpeg';
import image4 from '../../images/images4.jpeg';
import image5 from '../../images/images5.jpeg';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: '100%',
        height: 550,
    },
}));





export default function BasicImageList() {
    const classes = useStyles();
    const itemData = [
        {
            img: image1,
            title: 'Image',
            author: 'author',
            cols: 1,
        },
        {
            img: image2,
            title: 'Image',
            author: 'author',
            cols: 1,
        },
        {
            img: image3,
            title: 'Image',
            author: 'author',
            cols: 1,
        },
        {
            img: image4,
            title: 'Image',
            author: 'author',
            cols: 1,
        },
        {
            img: image5,
            title: 'Image',
            author: 'author',
            cols: 1,
        },
    ];
    return (
        <div className={classes.root}>
            <ImageList rowHeight={160} className={classes.imageList} cols={4}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1}>
                        <img src={item.img} alt={item.title} />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}
