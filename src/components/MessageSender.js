import React,{useState} from 'react'
import "./styles/MessageSender.css"
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import firebase from 'firebase';

function MessageSender() {

    const[{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        db.collection('post').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })
        
        // setInput('');
        // setImageUrl('');
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form >
                    <input  
                        value={input}
                        onChange={e=>setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={`what's on your mind, ${user.displayName}?`}
                    />
                    <input 
                        value={imageUrl}
                        onChange={e=>setImageUrl(e.target.value)}
                        placeholder={"Image URL (optional)"}
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Buttom
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__options">
                    <VideocamIcon style={{color:'red'}}/>
                    <h4>Live video</h4>
                </div>
            
                <div className="messageSender__options">
                    <PhotoLibraryIcon style={{color:'green'}}/>
                    <h4>Photo/Video</h4>
                </div>
           
                <div className="messageSender__options">
                    <InsertEmoticonIcon style={{color:'orange'}}/>
                    <h4>Feeling/Activity</h4>
                </div>         
            </div>
        </div>
    )
}

export default MessageSender
