import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


function Main() {
    return (
        <ul>
            <li>
                <Link to="/progress">01 Progress</Link>
            </li>
        </ul>
    )
}

export default Main;
