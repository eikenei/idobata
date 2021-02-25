import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

import  MessageInputFeild from './MessageInput'
import MessageList from './MessageList'

const useStyles = makeStyles({
    root :{
        display: 'grid',
        height: '100vh',
        gridTemplateRows: '1fr auto',
    }

});


const Main = ({name}) =>{
    const classes = useStyles();
    return (
         <div className={classes.root}>
          <MessageList />
          <MessageInputFeild name={name} />
         </div>
    )

};

export default Main;


