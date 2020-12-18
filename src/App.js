import './App.css';
import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Message from './components/Message/Message'
import './app.scss';
import firebase from 'firebase';
import db from './firebase';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';


const App = () => {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState('');
    const [isLoading, setLoading] = useState(false);


    const sendMessage = (event) => {
        event.preventDefault();
        // var uniqid = require('uniqid');
        db.collection('messages').add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('');
    }

    // runs once when the app component Loads
    useEffect(() => {
        db.collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
            })

    }, [])

    useEffect(() => {
        setUsername(prompt('Enter your Name:'));
    }, [])


    return (

        <div className="App">
            <img src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100" />

            <h3 className='welcome_title' >Welcome {username}</h3>


            <div className='msg_cards_box' >
                {
                    messages && messages.map(({ id, message }) => (
                        <Message key={id} username={username} message={message} />
                    ))
                }
            </div>

            <form autoComplete="off">
                <TextField label="Message here" value={input} onChange={event => setInput(event.target.value)} />
                {/* <Button disabled={!input} type='submit' variant="contained" color="primary" onClick={sendMessage}> Send Message </Button> */}
                <IconButton aria-label="send_icon" disabled={!input} type='submit' variant="contained" color="primary" onClick={sendMessage}>
                    <SendIcon />
                </IconButton>
            </form>



        </div>
    );
}

export default App;
