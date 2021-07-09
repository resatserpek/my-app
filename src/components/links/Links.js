import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
    const classes = useStyles();

    const preventDefault = (event) => event.preventDefault();
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button >
                    <ListItemIcon>
                        <FacebookIcon />
                    </ListItemIcon>
                    <Link onClick={() => window.open('https://www.facebook.com/kurtcobain', '_blank')}>
                        <ListItemText primary="/kurtcobain" />
                    </Link>
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <InstagramIcon />
                    </ListItemIcon>
                    <Link onClick={() => window.open('https://www.instagram.com/kurtcobain/', '_blank')}>
                        <ListItemText primary="/kurtcobain" />
                    </Link>
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <TwitterIcon />
                    </ListItemIcon>
                    <Link onClick={() => window.open('https://twitter.com/kurtcobain', '_blank')}>
                        <ListItemText primary="/kurtcobain" />
                    </Link>
                </ListItem>
            </List>
        </div >
    );
}
