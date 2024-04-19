import React, {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";

function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

function Avatar(props) {
    return <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />;
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date.toLocaleDateString()}
            </div>
        </div>
    );
}

function App() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    const user = {
        name: 'Petr',
        avatarUrl: 'https://example.com/avatar.png'
    };

    return (
        <div>
            <Welcome name="Peter" />
            <Welcome name="Joseph" />
            <Welcome name="Josefine" />
            <Comment author={user} text="This is a sample comment!" date={new Date()} />
            <h2>Current time is {currentTime.toLocaleTimeString()}.</h2>
            <h3>Today is {currentTime.toLocaleDateString()}.</h3>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
