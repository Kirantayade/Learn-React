import React from "react";
import ReactDOM from "react-dom/client"


// create elements using javascript
const root = document.getElementById('root');
root.innerHTML = "Hello World from Javascript";


// create elements using react javascript object
const heading = React.createElement("h1",{},"Namaste From React");

// create elements using JSX
const jsxHeading = (<h1 className="head" tabIndex="5">Namste React from JSX</h1>)

console.log(jsxHeading);

// Creating Component
const Title = () => {
    return (<h1 className="head" tabIndex="5"> 
    Namste React from Title Component</h1>)
     
}

const HeadingComponent = () =>{
    console.log("App rendered");
    return (<div id="container">
        <Title/>
         <h1>Namste React Using Components</h1>
    </div>
    )
   
}

// Getting root elemet from html
const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

// Rendering Elements
reactRoot.render(<HeadingComponent/>);