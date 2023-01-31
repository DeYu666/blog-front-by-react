import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/app/app";
import {BrowserRouter as Router} from "react-router-dom";
// import Draggable from 'react-draggable'; // The default



ReactDOM.render(
    <>
        <Router>
            <App />
        </Router>

        {/*<Draggable>*/}
        {/*    <Love/>*/}
        {/*</Draggable>*/}
    </>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
