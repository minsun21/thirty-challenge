import React, { useState } from 'react'

function Progress() {
    const [Active, setActive] = useState('progress-done');
    const [PercentValue, setPercentValue] = useState();
    const [Percent, setPercent] = useState('');
    const progressHandler = () => {
        setActive('progress-done-active');
        setPercent(PercentValue);
    };

    const percentHandler = (e) => {
        setPercentValue(e.target.value + '%');
    }
    return (
        <div className="progress--container">
            <div className="progress--container__progress">
                <div className={Active} style={{ width: `${Percent}` }}>{Percent}</div>
            </div>
            <input type="number" maxLength="3" onChange={percentHandler} placeholder="percent number" />
            <button onClick={progressHandler}>Ok</button>
        </div>
    )
}

export default Progress
