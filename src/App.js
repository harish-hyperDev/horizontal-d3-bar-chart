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
// console.log(datum[0].name)
function App() {
    const [data, setData] = useState([]);

    // Code Ended

    useEffect(() => {
        alert('use effect called')
        changeData();
    }, []);

    const changeData = () => {
        setData(datum[i++]);
        console.log(data);
        if (i === datum.length) i = 0;
    }

    console.log("data useState: ",data)
    return (
        <div className="App">
            <h2>Graphs with React</h2>
            <button onClick={changeData}>Change Data</button>
            <BarChart width={600} height={400} data={data} />
        </div>
    );
}

export default App;
