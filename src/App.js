import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/sing-in" element={<SingIn/>}/>
        <Route path="/sing-up" element={<SingUp/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/offers" element={<Offers/>}/>
      </Routes>
    </Router>
    <ToastContainer
       position="bottom-center"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={true}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="light"
     />
    </>
  );
}

export default App;
