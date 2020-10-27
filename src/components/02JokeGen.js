import React, { useState } from 'react'

function JokeGenerator() {
    const [Joke, setJoke] = useState('');

    const clickHandler = () => {
        fetch('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } })
            .then(response => response.json()).then(response => {
                setJoke(response.joke);
            });
    }
    return (
        <div className="joke-container">
            <div className="joke-box">
                <h3>Don't laugh challenge</h3>
                <div className="joke">
                    <p>{Joke}</p>
                </div>
                <button onClick={clickHandler}>Get Another Joke</button>
            </div>
        </div>
    )
}

export default JokeGenerator
