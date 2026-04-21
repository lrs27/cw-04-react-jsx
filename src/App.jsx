import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld.jsx';
import Counter from './Counter.jsx';
import FilteredList from './FilteredList.jsx';

const produce = [
    { name: "Apple", type: "Fruit" },
    { name: "Banana", type: "Fruit" },
    { name: "Carrot", type: "Vegetable" },
    { name: "Broccoli", type: "Vegetable" },
    { name: "Orange", type: "Fruit" },
    { name: "Spinach", type: "Vegetable" }
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <HelloWorld />
                <Counter />
                <FilteredList items={produce} />
            </div>
        );
    }
}

export default App;
