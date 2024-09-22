import React from 'react';
import { Link } from 'react-router-dom';

function Match() {
  var today = new Date();
  return (
    <div className='grid grid-cols-1 gap-6 my-6 md:grid-cols-2 lg:grid-cols-3'>
      <div className="card" >
  <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/08/How-to-watch-India-vs-West-Indies-T20-series.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title" style={{fontSize:'20px',fontWeight:'500'}}>WEST INDIES VS INDIA</h5>
    <p className="card-text">Venue : Rajib Gandhi Stadium,Hydrabad</p>
    <p className="card-text">Date : Today</p>
    <div className='flex items-center justify-between mt-3'>
    <Link to="/wvi" className="btn btn-dark">Match Details</Link>
    <Link to="/booking" className="btn btn-dark disabled" target='_blank' aria-disabled="true" >Book Ticket</Link>
    </div>
  </div>
</div>
      <div className="card" >
  <img src="https://focus.hidubai.com/content/images/2024/06/Winter-Camps--95-.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:'20px',fontWeight:'500'}}>INDIA VS PAKISTAN</h5>
    <p className="card-text">Venue : Eden Garden,Kolkata</p>
    <p className="card-text">Date : {(today.getDate()+1) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }</p>
    <div className='flex items-center justify-between mt-3'>
    <Link to="/ivp" className="btn btn-dark">Match Details</Link>
    <Link to="/booking" className="btn btn-dark" target='_blank'>Book Ticket</Link>
    </div>
  </div>
</div> 
      
<div className="card" >
  <img src="https://img.jagranjosh.com/images/2023/November/1112023/new-zealand-vs-south-africa-head-to-head.webp" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title" style={{fontSize:'20px',fontWeight:'500'}}>NEW ZEALAND VS SOUTH AFRICA</h5>
    <p className="card-text">Venue : Narendra Modi Stadium,Ahmedabad</p>
    <p className="card-text">Date : {(today.getDate()+2) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }</p>
    <div className='flex items-center justify-between mt-3'>
    <Link to="/nvs" className="btn btn-dark">Match Details</Link>
    <Link to="/booking" className="btn btn-dark" target='_blank'>Book Ticket</Link>
    </div>
  </div>
</div> <div className="card" >
  <img src="https://crickettimes.com/wp-content/uploads/2023/10/India-vs-New-Zealand-ICC-ODI-World-Cup-2023.webp" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title" style={{fontSize:'20px',fontWeight:'500'}}>INDIA VS NEW ZEALAND</h5>
    <p className="card-text">Venue : WanKhede Stadium,Mumbai</p>
    <p className="card-text">Date : {(today.getDate()+4) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }</p>
    <div className='flex items-center justify-between mt-3'>
    <Link to="/ivn" className="btn btn-dark">Match Details</Link>
    <Link to="/booking" className="btn btn-dark" target='_blank'>Book Ticket</Link>
    </div>
  </div>
</div> <div className="card" >
  <img src="https://www.jagranimages.com/images/newimg/13062024/13_06_2024-wi_vs_nz_live_0_54243589.webp" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title" style={{fontSize:'20px',fontWeight:'500'}}>WEST INDIES VS NEW ZEALAND</h5>
    <p className="card-text">Venue : M. A. Chidambaram Stadium,Chennai</p>
    <p className="card-text">Date : {(today.getDate()+5) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }</p>
    <div className='flex items-center justify-between mt-3'>
    <Link to="/wvn" className="btn btn-dark">Match Details</Link>
    <Link to="/booking" className="btn btn-dark" target='_blank'>Book Ticket</Link>
    </div>
  </div>
</div> <div className="card" >
  <img src="https://crickettimes.com/wp-content/uploads/2023/09/SA-vs-AUS-ODI-Series-Broadcast-and-Streaming-Details.webp" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title" style={{fontSize:'20px',fontWeight:'500'}}>SOUTH AFRICA VS AUSTRALIA</h5>
    <p className="card-text">Venue : Arun Jaitley Cricket Stadium,Delhi</p>
    <p className="card-text">Date : {(today.getDate()+6) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }</p>
    <div className='flex items-center justify-between mt-3'>
    <Link to="/sva" className="btn btn-dark">Match Details</Link>
    <Link to="/booking" className="btn btn-dark" target='_blank'>Book Ticket</Link>
    </div>
  </div>
</div>
<div className="card" >
  <img src="https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/06/India-vs-South-Africa-IND-vs-SA-for-the-first-time-two-undefeated-teams-will-face-in-the-T20-World-Cup-final.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title" style={{fontSize:'20px',fontWeight:'500'}}>INDIA VS SOUTH AFRICA</h5>
    <p className="card-text">Venue : M. Chinnaswamy Stadium,Bengaluru</p>
    <p className="card-text">Date : {(today.getDate()+8) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }</p>
    <div className='flex items-center justify-between mt-3'>
    <Link to="/ivs" className="btn btn-dark">Match Details</Link>
    <Link to="/booking" className="btn btn-dark" target='_blank'>Book Ticket</Link>
    </div>
  </div>
</div>
    </div>
  );
}

export default Match;
