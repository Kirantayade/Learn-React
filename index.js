const root = document.getElementById('root');
root.innerHTML = "Hello World from Javascript";

const heading = React.createElement("h1",{},"Namaste From React");

const reactRoot = ReactDOM.createRoot(document.getElementById('root1'));

reactRoot.render(heading);