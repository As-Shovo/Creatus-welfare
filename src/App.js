import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Register from '../src/Pages/Register/Register';
import Login from '../src/Pages/Login/Login';
import NotFound from '../src/Pages/NotFound/NotFound';
import AuthProvider from '../src/context/AuthProvider'
import AboutItem from './Pages/About/AboutItem/AboutItem';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='home' element={<Home/>} />
            <Route path='about' element={<AboutItem/>} />
            {/* <Route path = 'causes' element ={<Causes/>} /> */}
            <Route path='register' element={<Register/>} />
            <Route path='login' element={<Login/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;