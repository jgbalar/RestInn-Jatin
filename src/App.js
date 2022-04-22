import react from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './SCSS/App.scss';
import HomePage from './WebPage/HomePage.js'
import PropertyListing from './WebPage/PropertyListing';
import PropertyDescriptionPage from './WebPage/PropertyDescriptionPage';
import LogIn from './WebPage/LogIn'
import SignUp from './WebPage/SignUp'
import PropertyTypePage from './WebPage/PropertyTypePage';
import DashBoard from './components/DashBoard';
import Logout from './WebPage/Logout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LogIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="property-sorting" element={<PropertyListing />} />
      <Route path="propertydescription/:name" element={<PropertyDescriptionPage />} />
      <Route path="property-sorting/:variable" element={<PropertyListing />} />
      <Route path="dashboard" element={<DashBoard />} />
      <Route path="dashboard/:id" element={<DashBoard />} />
      <Route path='logout' element={<Logout/>} />
      <Route path="propertytypepage" element={<PropertyTypePage />} />
      <Route path="propertytypepage/:data" element={<PropertyTypePage />} />
       <Route path="property-sorting/:variable/propertydescription/:name" element={<PropertyDescriptionPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
