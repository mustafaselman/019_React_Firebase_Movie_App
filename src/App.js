
import AppRouter from "./router/AppRouter";
import './App.css';
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
