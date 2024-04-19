import React, {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        // Inicializace stavu s aktuálním časem
        this.state = { date: new Date() };
    }

    componentDidMount() {
        // Nastavení intervalu pro aktualizaci času
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        // Čištění intervalu, když komponenta opouští DOM
        clearInterval(this.timerID);
    }

    tick() {
        // Aktualizace stavu na nové datum a čas
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

function App() {
    return (
        <div>
            <Welcome name="Peter"/>
            <Welcome name="Joseph"/>
            <Welcome name="Josefine"/>
            <Clock />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
