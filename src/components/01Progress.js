import React, { useState } from 'react'

function Progress() {
    const [Active, setActive] = useState('progress-done');
    const [PercentValue, setPercentValue] = useState();
    const [Percent, setPercent] = useState('');

    const progressHandler = () => {
        if (PercentValue > 100) {
            alert('100%이상은 안됨');
        }
        else {
            let percent = PercentValue + '%';
            setActive('progress-done-active');
            setPercent(percent);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            progressHandler();
        }
    };

    const percentHandler = (e) => {
        setPercentValue(e.target.value);
    }

    return (
        <div className="progress--container">
            <div className="progress--container__progress">
                <div className={Active} style={{ width: `${Percent}` }}>{Percent}</div>
            </div>
            <input type="number" maxLength="3" onChange={percentHandler} onKeyPress={handleKeyPress} placeholder="percent number" />
            <button onClick={progressHandler}>Ok</button>
        </div>
    )
}

export default Progress
