// src/App.jsx

import HomeBanner from './components/Banner';
import Footer from './components/Footer';
import Items from './components/Items';
import Navbar from './components/Navbar';


const App = () => {







  return (
    <div>
     <div  className=' text-gray-600 lg:mx-20 mx-3'>
    <Navbar/>
     <HomeBanner/>
     <Items/>
      
     </div>
    <Footer/>
    </div>
  );
};



export default App;
