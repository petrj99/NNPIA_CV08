import React, {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

function Form() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}

function App() {
    const [lasersActive, setLasersActive] = useState(false);

    function handleButtonClick() {
        setLasersActive(true);
        console.log('Lasers activated!');
    }

    return (
        <div>
            <Welcome name="Peter"/>
            <Welcome name="Joseph"/>
            <Welcome name="Josefine"/>
            <button onClick={handleButtonClick}>
                Activate Lasers
            </button>
            {lasersActive && <p>Lasers have been activated!</p>}
            <Form />
            <Clock />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
