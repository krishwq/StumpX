import React from 'react';

const Home = () => {
  var today = new Date();
  return (


<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active" data-bs-interval="3000">
      <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/08/How-to-watch-India-vs-West-Indies-T20-series.jpg" className="d-block w-100" alt="..." style={{height:'65vh',width:'50vw',objectFit: 'cover',borderRadius:'10px'}}/>
      <div className="carousel-caption" style={{backgroundImage:'linear-gradient(to right,#980d2f7a, #3737ecb0)',padding:'10px',marginBottom:'-5px',borderRadius:"10px"}}>
        <div><p style={{fontSize:'40px',color:'white',fontWeight:'1000'}}>India Vs West Indies</p></div>
        <div style={{display:'flex',justifyContent:'space-between',color:'white',fontSize:'18px',width:'90%',fontWeight:'500'}}> <span>Venue : Rajib Gandhi Stadium</span><span>Date : Today</span></div>
      </div>
    </div>
    <div className="carousel-item " data-bs-interval="3000">
      <img src="https://focus.hidubai.com/content/images/2024/06/Winter-Camps--95-.jpg" className="d-block" alt="..." style={{height:'65vh',width:'50vw',objectFit: 'cover',borderRadius:'10px'}}/>
      <div className="carousel-caption" style={{backgroundImage:'linear-gradient(to right,#3737ecb0, #04851bbd)',padding:'10px',marginBottom:'-5px',borderRadius:"10px"}}>
        <div><p style={{fontSize:'40px',color:'white',fontWeight:'1000'}}>India Vs Pakistan</p></div>
        <div style={{display:'flex',justifyContent:'space-between',color:'white',fontSize:'18px',width:'90%',fontWeight:'500'}}> <span>Venue : Eden Garden</span><span>Date : {(today.getDate()+1) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }</span></div>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://img.jagranjosh.com/images/2023/November/1112023/new-zealand-vs-south-africa-head-to-head.webp" className="d-block w-100" alt="..." style={{height:'65vh',width:'50vw',objectFit: 'cover',borderRadius:'10px'}}/>
      <div className="carousel-caption" style={{backgroundImage:'linear-gradient(to right, rgb(98 91 91 / 83%), rgb(28 201 147 / 74%))',padding:'10px',marginBottom:'-5px',borderRadius:"10px"}}>
        <div><p style={{fontSize:'40px',color:'white',fontWeight:'1000'}}>New Zealand Vs South Africa </p></div>
        <div style={{display:'flex',justifyContent:'space-between',color:'white',fontSize:'18px',width:'90%',fontWeight:'500'}}> <span>Venue : Narendra Modi Stadium</span><span>Date : {(today.getDate()+2) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }</span></div>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://crickettimes.com/wp-content/uploads/2023/10/India-vs-New-Zealand-ICC-ODI-World-Cup-2023.webp" className="d-block w-100" alt="..." style={{height:'65vh',width:'50vw',objectFit: 'cover',borderRadius:'10px'}}/>
      <div className="carousel-caption" style={{backgroundImage:'linear-gradient(to right,#3737ecb0,  rgb(98 91 91 / 83%))',padding:'10px',marginBottom:'-5px',borderRadius:"10px"}}>
        <div><p style={{fontSize:'40px',color:'white',fontWeight:'1000'}}>India Vs New Zealand</p></div>
        <div style={{display:'flex',justifyContent:'space-between',color:'white',fontSize:'18px',width:'90%',fontWeight:'500'}}> <span>Venue : WanKhede Stadium</span><span>Date : {(today.getDate()+4) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }</span></div>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://www.jagranimages.com/images/newimg/13062024/13_06_2024-wi_vs_nz_live_0_54243589.webp" className="d-block w-100" alt="..." style={{height:'65vh',width:'50vw',objectFit: 'cover',borderRadius:'10px'}}/>
      <div className="carousel-caption" style={{backgroundImage:'linear-gradient(to right, rgb(185 175 20 / 69%), rgb(14 141 118 / 83%))',padding:'10px',marginBottom:'-5px',borderRadius:"10px"}}>
        <div><p style={{fontSize:'40px',color:'white',fontWeight:'1000'}}>West Indies Vs New Zealand</p></div>
        <div style={{display:'flex',justifyContent:'space-between',color:'white',fontSize:'18px',width:'90%',fontWeight:'500'}}> <span>Venue : M. A. Chidambaram Stadium</span><span>Date : {(today.getDate()+5) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }</span></div>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://crickettimes.com/wp-content/uploads/2023/09/SA-vs-AUS-ODI-Series-Broadcast-and-Streaming-Details.webp" className="d-block w-100" alt="..." style={{height:'65vh',width:'50vw',objectFit: 'cover',borderRadius:'10px'}}/>
      <div className="carousel-caption" style={{backgroundImage:'linear-gradient(to right, rgb(52 201 137 / 69%), rgb(120 158 65 / 83%))',padding:'10px',marginBottom:'-5px',borderRadius:"10px"}}>
        <div><p style={{fontSize:'40px',color:'white',fontWeight:'1000'}}>South Africa Vs Australia</p></div>
        <div style={{display:'flex',justifyContent:'space-between',color:'white',fontSize:'18px',width:'90%',fontWeight:'500'}}> <span>Venue : Arun Jaitley Cricket Stadium</span><span>Date : {(today.getDate()+6) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }</span></div>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/06/India-vs-South-Africa-IND-vs-SA-for-the-first-time-two-undefeated-teams-will-face-in-the-T20-World-Cup-final.jpg" className="d-block w-100" alt="..." style={{height:'65vh',width:'50vw',objectFit: 'cover',borderRadius:'10px'}}/>
      <div className="carousel-caption" style={{backgroundImage:'linear-gradient(to right, #3737ecb0, rgb(52 201 137 / 69%))',padding:'10px',marginBottom:'-5px',borderRadius:"10px"}}>
        <div><p style={{fontSize:'40px',color:'white',fontWeight:'1000'}}>India Vs South Africa</p></div>
        <div style={{display:'flex',justifyContent:'space-between',color:'white',fontSize:'18px',width:'90%',fontWeight:'500'}}> <span>Venue : M. Chinnaswamy Stadium</span><span>Date : {(today.getDate()+8) + '-' + (today.getMonth() + 1) + '-' +today.getFullYear() }</span></div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
};

export default Home;
