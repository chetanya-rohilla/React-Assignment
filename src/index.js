import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Upper from "./Uppercase/upper"
// import FormComponent from "./form/form"
import StudentComponent from "./list/student"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentComponent />
  </React.StrictMode>
);
