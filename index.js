import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Styled from './StyledComponents/style';
// import Crud from './CRUD/crud';
// import Hooks from './Hooks';
// import Reducer from './UseReducer';
// import CrudSecond from './CRUD_Reducer';
// import Context from './Context';
import Root from './Context/Root';
import Students from './Context/Context/Students';
import Context from './Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Crud /> */}
    {/* <Styled /> */}
    {/* <Hooks /> */}
    {/* <Reducer /> */}
   {/* <CrudSecond />  */}
   {/* <Context /> */}
   <Context>
    <Root />
   </Context>
  </React.StrictMode>
);

