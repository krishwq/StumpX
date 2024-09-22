import  { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function ShowNavbar({children}) {
let location= useLocation();
const [shownavbar, setshownavbar] = useState(false);
useEffect(() => {
  if(location.pathname==='/booking'){
    setshownavbar(false);
  }
  else{
    setshownavbar(true);
  }
}, [location]);
  return (
    <div>
    {shownavbar && children}
    </div>
  );
}

export default ShowNavbar;
