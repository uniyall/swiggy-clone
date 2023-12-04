import React from 'react';
import ReactDOM from 'react-dom/client';

root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => (
    <div className="text-yellow-950">Hello</div>
);

root.render(<App/>);