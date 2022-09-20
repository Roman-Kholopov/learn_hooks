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
                {/* <PlanetInfo id={value}/> */}
                {/* <Notification/> */}
                <HookCounter value={value}/>
                <ClassCounter value={value}/>
            </div>
        );
    } else {
        return <button onClick={() => setVisible(true)}>show</button>
    };
}

const HookCounter = ({value}) => {

    useEffect(() => {
        console.log(' useEffect() ');
        return () => console.log('clear');
    }, [value]);

    return <p> {value} </p>;
}

class ClassCounter extends Component {

    componentDidMount() {
        console.log('class: mount');
    }

    componentDidUpdate() {
        console.log('class: update');
    }

    componentWillUnmount() {
        console.log('class: unmount');
    }

    render() {
        return <p> {this.props.value} </p>
    }
}

// const Notification = () => {
//     const [visible, setVisible] = useState(true)

//     useEffect(() => {
//         const timer = setTimeout(
//             () => setVisible(false), 2500);
//         return () => clearTimeout(timer);
//     }, [])

//     // if(visible) {
//     //     return <div><p>Hello</p></div>;
//     // }

//     return (
//         <div>
//             { visible && <p>Hello</p>}
//         </div>
//     )
// };

// class ClassCounter extends Component {

//     componentDidMount() {
//         console.log('class: mount');
//     }

//     componentDidUpdate() {
//         console.log('class: update');
//     }

//     componentWillUnmount() {
//         console.log('class: unmount');
//     }

//     render() {
//         return <p> {this.props.value} </p>
//     }
// }

// const PlanetInfo = ( {id} ) => {

//     const [name, setName] = useState(null)

//     useEffect(() => {
//         let cancelled = false;
//         fetch(`https://swapi.dev/api/planets/${id}`)
//         .then(res => res.json())
//         .then(data => !cancelled && setName(data.name));
//         return () => cancelled = true;
//     }, [id])

//     return (
//         <div>{id} - {name}</div>
//     )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
);