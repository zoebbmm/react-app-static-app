import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

function App () {
    return (
        <div>
            <h1>Recommended Action</h1>
            <hr />
            Button component: <Button>Click me</Button>
        </div>
    );
};

const container_of_root_element = document.getElementById('app');
const root_of_react_function_comp = ReactDOM.createRoot(container_of_root_element);
root_of_react_function_comp.render(<App />);