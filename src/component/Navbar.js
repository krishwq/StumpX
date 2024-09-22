import {React,useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import logo from './logo.png';

const Navbar = () => {
  const toggle=()=>{
    if(
     document.getElementById('mobile-menu').style.display==='none'){
      document.getElementById('mobile-menu').style.display='block';
     }
     else{
      document.getElementById('mobile-menu').style.display='none';
     }
  }
  let location = useLocation();
  useEffect(() => {
  }, [location]);
  return (
    <nav className="bg-transparent" >
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button type="button" onClick={toggle} className="relative inlinke-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white text-lg focus:outlinke-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
         
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" >
            <path stroke-linkecap="round" stroke-linkejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center text-white" style={{fontSize:'25px',fontWeight:'700'}}>
          <img src={logo} alt="logo" height={"50px"} width={"50px"} className='mx-3 rounded-lg'/>
          <span>Stump</span><span style={{color:"#45e116",fontSize:'35px'}}>X</span>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
          <Link to="/" className={`rounded-md px-3 py-2 text-white font-medium  hover:bg-gray-700 hover:text-white text-lg ${location.pathname==='/'?`black`:""}`}>Home</Link>
            <Link to="/about" className={`rounded-md px-3 py-2 text-white font-medium  hover:bg-gray-700 hover:text-white text-lg ${location.pathname==="/about"?"black":'#5e5d62'}`}>About</Link>
            <Link to="/matches" className={`rounded-md px-3 py-2 text-white font-medium  hover:bg-gray-700 hover:text-white text-lg ${location.pathname==='/matches'?`black`:'#5e5d62'}`}>Matches</Link>
            <Link to="/contact" className={`rounded-md px-3 py-2 text-white font-medium  hover:bg-gray-700 hover:text-white text-lg ${location.pathname==='/contact'?`black`:'#5e5d62'}`}>Contact us</Link>
          </div>
        </div>
      </div>
      
    </div>
  </div>

  <div style={{display:'none'}} id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <Link to="/" className={`rounded-md px-3 py-2 text-white font-medium  hover:bg-gray-700 hover:text-white text-lg ${location.pathname==='/'?`black`:'#5e5d62'}`}>Home</Link>
      <Link to="/about" className={`rounded-md px-3 py-2 text-white font-medium  hover:bg-gray-700 hover:text-white text-lg ${location.pathname==='/about'?`black`:'#5e5d62'}`}>About</Link>
      <Link to="/matches" className={`rounded-md px-3 py-2 text-white font-medium  hover:bg-gray-700 hover:text-white text-lg ${location.pathname==='/matches'?`black`:'#5e5d62'}`}>Matches</Link>
      <Link to="/contact" className={`rounded-md px-3 py-2 text-white font-medium  hover:bg-gray-700 hover:text-white text-lg ${location.pathname==='/contact'?`black`:'#5e5d62'}`}>Contact us</Link>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
