import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Register from '../src/Pages/Register/Register';
import Login from '../src/Pages/Login/Login';
import NotFound from '../src/Pages/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageFunds from './Pages/ManageFunds/ManageFunds';
import ManageDonations from './Pages/ManageDonations/ManageDonations';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import AddFund from './Pages/AddFund/AddFund'

function App() {
  return (
    <div className="">
      <Router>
        {/* <Header></Header> */}
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='home' element={<Home></Home>} />
          {/* <Route path='about' element={<About></About>} /> */}
          <Route path='register' element={<Register></Register>} />
          <Route path='login' element={<Login></Login>} />
          <Route path='dashboard' element={<Dashboard></Dashboard>} />
          <Route path='dashboard/dash/manageFunds' element={<ManageFunds></ManageFunds> } />
          <Route path='dashboard/dash/manageDonations' element={<ManageDonations></ManageDonations> } />
          <Route path='dashboard/dash/makeAdmin' element={<MakeAdmin></MakeAdmin> } />
          <Route path='dashboard/dash/addFund' element={<AddFund></AddFund> } />
          <Route path='dashboard/dash/addReview' element={<MakeAdmin></MakeAdmin> } />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
