import React, { useState, Component, useEffect } from "react";
import ReactDOM from 'react-dom/client';

const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if(visible) {
        return (
            <div>
                <button onClick={() => setValue((v) => v + 1)}>
                    +
                </button>
                <button onClick={() => setVisible(false)}>
                    hide
                </button>
                <PlanetInfo id={value}/>
            </div>
        );
    } else {
        return <button onClick={() => setVisible(true)}>show</button>
    };
}

const usePlanetInfo = (id) => {
    const [ name, setName ] = useState(null);

    useEffect(() => {
        let cancelled = false;
        fetch(`https://swapi.dev/api/planets/${id}`)
        .then(res => res.json())
        .then(data => !cancelled && setName(data.name));
        return () => cancelled = true;
    }, [id])

    return name;
}

const PlanetInfo = ( {id} ) => {
    const name = usePlanetInfo(id);

    return (
        <div>{id} - {name}</div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
);