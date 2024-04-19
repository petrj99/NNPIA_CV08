import React, {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0)
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

    return (
        <div>
            <Welcome name="Peter" />
            <h2>Current time is {currentTime.toLocaleTimeString()}.</h2>
            <h3>Today is {currentTime.toLocaleDateString()}.</h3>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App
