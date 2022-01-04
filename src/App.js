import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/Pages/Shared/Header/Header'
import Home from '../src/Pages/Home/Home'
import About from '../src/Pages/About/About'
import Register from '../src/Pages/Register/Register'
import Login from '../src/Pages/Login/Login'
import NotFound from '../src/Pages/NotFound/NotFound'


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='home' element={<Home></Home>} />
          <Route path='about' element={<About></About>} />
          <Route path='register' element={<Register></Register>} />
          <Route path='login' element={<Login></Login>} />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
