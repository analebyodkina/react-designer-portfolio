import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import WorkSection from './components/WorkSection/WorkSection';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<WorkSection />} />
      </Routes>  
      <Footer />

      
      
      
    </div>
  );
}

export default App;
