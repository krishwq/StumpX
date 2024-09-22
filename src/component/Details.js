import React from 'react';

function Details(props) {
  return (
    <div className="card details" style={{width:'100vw',minHeight:'100vh',position:'absolute',top:'0'}}>
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body flex-col justify-center items-center">
    <center>
    <p style={{fontSize:'50px',fontWeight:'1000',display:'block'}}>{props.team1} VS {props.team2}</p><br />
    <p style={{fontSize:'20px',fontWeight:'500'}}>Venue : {props.venue}</p>
    <p style={{fontSize:'20px',fontWeight:'500'}}>Date : {props.date}</p><br />
    <p style={{fontSize:'30px',fontWeight:'700'}}>Team Details</p>
    <table>
  <tr>
    <th>{props.team1}</th>
    <th>{props.team2}</th>
  </tr>
  {props.data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name1}</td>
                            <td>{val.name2}</td>
                        </tr>
                    )
                })}
</table>
<a href="/booking" className="btn btn-dark my-3" target='_blank'  >Book Now</a>
    </center>
    </div>
  </div>
  );
}

export default Details;
