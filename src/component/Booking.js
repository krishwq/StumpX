import React, { useEffect, useRef, useState } from "react";

function Booking() {
  useEffect(() => {
    document.title="StumpX-Book your ticket"
  }, []);
  const [visiter, setvisiter] = useState(1);
  const [price, setprice] = useState(1999);
  const handlechange = (e) => {
    setprice(e.target.value);
  };
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(document.getElementById('name').value!=="" && document.getElementById('email').value!=="" && document.getElementById('mobile').value!=="" && document.getElementById('match').value!==""){
      refopen1.current.click()}
  }
  let refopen1=useRef();
  let refclose1=useRef();
  let refclose2=useRef();
  let refopen2=useRef();
  return (
    <>
<button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal1" ref={refopen1}>
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
        Are you sure to Pay &nbsp;&nbsp;
          <i
            className="fa-solid fa-indian-rupee-sign"
            style={{ color: "black" }}
          ></i>
          &nbsp;{price * visiter} ?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refclose1}>Close</button>
        <button type="button" className="btn btn-dark" onClick={()=>{
          refclose1.current.click();
          setTimeout(() => {
            refopen2.current.click();
          }, 1500);
        }}>Confirm</button>
      </div>
    </div>
  </div>
</div>



<button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal2" ref={refopen2}>
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
        Thank you for book your ticket. You will get your booking receapt in your mail. Please check your inbox.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal" ref={refclose2}>Close</button>
        <button type="button" className="btn btn-dark" onClick={()=>{
          refclose2.current.click();
          document.getElementById('name').value="";
          document.getElementById('email').value=""; 
          document.getElementById('mobile').value="" ;
          document.getElementById('match').value="";
        }}>Ok</button>
      </div>
    </div>
  </div>
</div>


    <div className="relative flex flex-col rounded-xl bg-white bookingbox my-3">
      <h4 className="text-3xl font-medium text-slate-800 mt-3">Book Your Ticket</h4>
      <form className="mt-3 mb-2 " style={{ width: "90%" }} onSubmit={handlesubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <div className="w-full  min-w-[200px]">
            <label className="block mb-2 text-lg font-normal text-slate-600">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full  min-w-[200px]">
            <label className="block mb-2 text-lg font-normal text-slate-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="w-full  min-w-[200px]">
            <label className="block mb-2 text-lg font-normal text-slate-600">
              Mobile
            </label>
            <input
              type="number"
              id="mobile"
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Your Mobile Number"
              required
            />
          </div>
          <div className="w-full  min-w-[200px]">
            <label className="block mb-2 text-lg font-normal text-slate-600">
              Match
            </label>
            <div className="relative">
              <select
              id="match"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                required
              >
                <option value="">Select Match</option>
                <option value="wvi">West Indies VS India</option>
                <option value="ivp">India VS Pakistan</option>
                <option value="nvs">New Zealand VS South Africa</option>
                <option value="ivn">India VS New Nealand</option>
                <option value="wvn">West Indies VS New Nealand</option>
                <option value="sva">South Africa VS Australia</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
              >
                <path
                  strokellineca="round"
                  strokeLinejoin="round"
                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
          </div>
          <div className="w-full  min-w-[200px]">
            <label className="block mb-2 text-lg font-normal text-slate-600">
              Plan
            </label>
            <div className="relative">
              <select
                id="plan_price"
                onChange={handlechange}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
              >
                <option value="1999">Standard (Rs.-1999)</option>
                <option value="999">Basic (Rs.-999)</option>
                <option value="4999">Delux (Rs.-4999)</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
              >
                <path
                  strokellineca="round"
                  strokeLinejoin="round"
                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
          </div>
          <div className="w-full  min-w-[200px] flex justify-between">
            <label className="block mb-2 text-lg font-normal text-slate-600">
              Visiters
            </label>
            <div>
              <div className="flex items-center gap-1" style={{boxShadow: "0px 0px 5px 1px black",borderRadius:'7px'}}>
                <button
                  type="button"
                  className="size-10 leading-10 text-gray-800 border-gray-600 transition hover:opacity-75 hover:bg-gray-300 " style={{borderRadius:'7px 0 0 7px'}}
                  disabled={visiter <= 1 ? true : false}
                  onClick={() => {
                    setvisiter(visiter - 1);
                  }}
                >
                  &minus;
                </button>

                <button
                  type="button"
                  disabled={true}
                  className="h-10 w-16 rounded border-gray-600 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                >
                  {visiter}
                </button>

                <button
                  type="button"
                  className="size-10 leading-10 text-gray-600 border-gray-600 transition hover:opacity-75 hover:bg-gray-300 "  style={{borderRadius:'0px 7px 7px 0'}}
                  onClick={() => {
                    setvisiter(visiter + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="submit"
        >
          Pay &nbsp;&nbsp;
          <i
            className="fa-solid fa-indian-rupee-sign"
            style={{ color: "#fff" }}
          ></i>
          &nbsp;{price * visiter}
        </button>
      </form>
    </div>
    <div style={{width:'95vw',backgroundColor:'#00000047',borderRadius:'10px',padding:'5px',position:'relative',left:'50%',transform:'translate(-50%)',margin:'5px'}}>
    <center>
    <p className="text-4xl font-bold text-white">Plan Details</p>
    </center>
    <div className=" flex items-center justify-center box_parent" style={{width:'100%',padding:'20px'}}>
      <div className="box">
        <center className="text-2xl font-semibold">Delux Plan</center>
        <p className="text-base font-medium mt-2">Price : Rs. 4999 /-</p>
        <div className="mt-3">
          <ul>
            <li>Best View</li>
            <li>Free popcorn avalilable</li>
            <li>Better Seat Quality</li>
          </ul>
        </div>
      </div>
      <div className="box">
      <center className="text-2xl font-semibold">Standard Plan</center>
        <p className="text-base font-medium mt-2">Price : Rs. 1999 /-</p>
        <div className="mt-3">
          <ul>
            <li>Better View</li>
            <li>Good Seat quality</li>
            <li>No Food facility</li>
          </ul>
        </div>
      </div>
      <div className="box">
      <center className="text-2xl font-semibold">Base Plan</center>
        <p className="text-base font-medium mt-2">Price : Rs. 999 /-</p>
        <div className="mt-3">
          <ul>
            <li>Good View</li>
            <li>No Seat Available</li>
            <li>No food facility</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Booking;
