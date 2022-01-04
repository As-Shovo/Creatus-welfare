import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import About from '../src/Pages/About/About';
import Register from '../src/Pages/Register/Register';
import Login from '../src/Pages/Login/Login';
import NotFound from '../src/Pages/NotFound/NotFound';
import AuthProvider from '../src/context/AuthProvider'
import Footer from '../src/Pages/Shared/Footer/Footer'


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='home' element={<Home></Home>} />
            <Route path='about' element={<About></About>} />
            <Route path='register' element={<Register></Register>} />
            <Route path='login' element={<Login></Login>} />
            <Route path='*' element={<NotFound></NotFound>} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;