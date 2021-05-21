import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './message.scss'

const Message = ({ username, message }) => {

    const isUser = username === message.username;

    return (
        <Card className={`msg_card ${isUser ? 'msg_user_card' : 'msg_guest_card'}`}>
            <CardContent>
                <Typography className='user_name' component="p" color="textSecondary">{!isUser && `${message.username || 'Unknown User'}`} </Typography>
                <Typography className='user_msg' variant="h6" component="p"> {message.message} </Typography>
            </CardContent>
        </Card>


    )
}

export default Message
