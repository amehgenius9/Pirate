import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import MarketPlace from './Pages/MarketPlace/MarketPlace';
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from './components/Preloader/Pre'
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Blog from './Pages/Blog/Blog';
import Onboarding from './Pages/Onboarding/Onboarding';
import LandingPage from './Pages/LandingPage/LandingPage';
import { useSelector } from 'react-redux';
import { selectUser } from './Redux/Slices/userSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListForRent from './Pages/ListForRent/ListForRent';
import ListForSale from './Pages/ListForSale/ListForSale';

const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const user = useSelector(selectUser)

  return (
    <div>
      <ToastContainer />
      {user ? (
        <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="#" element={<Blog />} />
          <Route path="/list-for-rent" element={<ListForRent />} />
          <Route path="/list-for-sale" element={<ListForSale />} />
        </Routes>
        <Footer />
      </div>
    </Router> 
      ) : (
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/onboarding' element={<Onboarding />} />
          </Routes>
        </Router>
      )}
    </div>
    
    
  )
}

export default App
