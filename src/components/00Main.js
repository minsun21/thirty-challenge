import React from 'react'
import { Link } from "react-router-dom";

function Main() {
    return (
        <ul>
            <li>
                <Link to="/progress">01 Progress</Link>
            </li>
            <li>
                <Link to="/joke">02 Joke</Link>
            </li>
            <li>
                <Link to="/imagePassword">03 Image Password</Link>
            </li>
            <li>
                <Link to="/lineThrough">04 Line Through</Link>
            </li>
        </ul>
    )
}

export default Main;
