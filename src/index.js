import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

const App = () => {
    const [ name, setName] = useState('John');
    const [ age, setAge] = useState(25);
    const [ rate, setRate] = useState(25);
    
    return (
        <div>
            {name} is {age} yeats old
            his rate is {rate} per hour
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
);