
import AppRouter from "./router/AppRouter";
import './App.css';
import Navbar from './components/Navbar';
import AuthContext from './context/AuthContext';
import Login from './pages/Login';
import Main from './pages/Main';
import MovieDetail from './pages/MovieDetail';
import Register from './pages/Register';
import UserProvider from "./context/AuthContext";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import {ToastContainer } from "react-toastify";
function App() {
  
  return (
    <div className="App">
     <ToastContainer/>
       <UserProvider>
         <AppRouter/>
      </UserProvider>
   
     
     
    </div>
  );
}

export default App;
