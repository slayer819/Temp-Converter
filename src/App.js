import React, { useState } from 'react';

function App() {
    const [temperature, setTemperature] = useState('');
    const [convertedTemp, setConvertedTemp] = useState('');
    const [isCelsius, setIsCelsius] = useState(true);

    const convertTo = (scale) => {
        if (isNaN(temperature)) {
            alert('Please enter a numeric value.');
            return;
        }

        let temp = parseFloat(temperature);
        if (scale === 'F') {
            setConvertedTemp((temp * 9) / 5 + 32);
        } else {
            setConvertedTemp(((temp - 32) * 5) / 9);
        }
    };

    const toggleConversion = () => {
        convertTo(isCelsius ? 'F' : 'C');
        setIsCelsius(!isCelsius);
    };

    return (
        <div>
            <h1>Temperature Converter</h1>
            <input
                type="text"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                placeholder="Enter temperature"
            />
            <button onClick={toggleConversion}>
                Convert to {isCelsius ? 'Fahrenheit' : 'Celsius'}
            </button>
            <p>Converted Temperature: {convertedTemp}</p>
        </div>
    );
}

export default App;
