import React, { useEffect, useState } from 'react';
import './App.css';
import BarChart from './charts/BarChart';

var datum = [{
    "name": "Apples",
    "value": 20,
},
{
    "name": "Bananas",
    "value": 12,
},
{
    "name": "Grapes",
    "value": 19,
},
{
    "name": "Lemons",
    "value": 5,
},
{
    "name": "Limes",
    "value": 16,
},
{
    "name": "Oranges",
    "value": 26,
},
{
    "name": "Pears",
    "value": 30,
}];
var i = 0;

function App() {
    const [data, setData] = useState([]);

    // Code Ended

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datum[i++]);
        if (i === datum.length) i = 0;
    }


    return (
        <div className="App">
            <h2>Graphs with React</h2>
            {/* <button onClick={changeData}>Change Data</button> */}
            <BarChart width={600} height={400} data={data} />
        </div>
    );
}

export default App;
