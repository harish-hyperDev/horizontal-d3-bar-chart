import React, { useEffect, useState } from 'react';
import './App.css';
import BarChart from './charts/BarChart';

var datum =  [
    {
        "name":"Angular JS",
        "value": 5,
    },
    {
        "name":"Typescript",
        "value": 4,
    },
    {
        "name":"Javascript",
        "value": 3,
    },
    {
        "name":"Node JS",
        "value": 2,
    },
    {
        "name":"CSS",
        "value": 1,
    }
];

var i = 0;
// console.log(datum[0].name)
function App() {
    const [Data, setData] = useState([]);

    // Code Ended

    useEffect(() => {
        alert('use effect called')
        changeData();
    }, []);

    const changeData = () => {
        // console.log("datum: ", datum[i])
        
        //append data in setData method with datum[i++]
        // setData(datum[i++]);

        // setData( [...Data, [datum[i++]] ]);
        setData(...Data, [datum[i++]]);
        // console.log("Data: ", Data)
        
        if (i === datum.length) i = 0;
    }

    // console.log(Data)
    return (
        <div className="App">
            <h2>Graphs with React</h2>
            <h1>Hello world</h1>
            <button onClick={changeData}>Change Data</button>
            <div id="graphic">
                <BarChart width={600} height={400} data={datum} />
            </div>
        </div>
    );
    
}

export default App;
