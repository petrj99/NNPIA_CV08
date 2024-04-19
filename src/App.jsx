import React, {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

function App() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showWarning, setShowWarning] = useState(true);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    const toggleWarning = () => {
        setShowWarning(!showWarning);
    };

    const todos = [
        {id: 1, text: 'Wash the dishes'},
        {id: 2, text: 'Take out the trash'},
        {id: 3, text: 'Fold the laundry'}
    ];
    const todoItems = todos.map((todo) =>
        <li key={todo.id}>
            {todo.text}
        </li>
    );

    const todoItemsWithIndex = todos.map((todo, index) =>
        <li key={index}>
            {todo.text}
        </li>
    );

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn
                ? <LogoutButton onClick={handleLogoutClick} />
                : <LoginButton onClick={handleLoginClick} />
            }
            <button onClick={toggleWarning}>
                {showWarning ? 'Hide Warning' : 'Show Warning'}
            </button>
            <WarningBanner warn={showWarning} />
            <NumberList numbers={numbers} />
            <h1>Numbers List</h1>
            <ul>{listItems}</ul>
            <h1>Todo List with IDs</h1>
            <ul>{todoItems}</ul>
            <h1>Todo List with Index as Key (Not Recommended)</h1>
            <ul>{todoItemsWithIndex}</ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
