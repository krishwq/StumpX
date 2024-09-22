import React from "react";
import logo from "./logo.png";
import map from "./map.png";

function About() {
  return (
    <>
      <center>
        <span style={{ fontSize: "35px", fontWeight: "700", color: "white" }}>
          Welcome To
        </span>{" "}
        &nbsp;
        <span style={{ fontSize: "35px", fontWeight: "700", color: "white" }}>
          Stump
        </span>
        <span style={{ color: "#45e116", fontSize: "40px", fontWeight: "700" }}>
          X
        </span>
      </center>
      <div className="about my-3">
        <center className="text-2xl font-semibold mt-3">ABOUT US</center>
        <div className="aboutbox">
          Welcome to <strong>StumpX</strong>, the ultimate platform for cricket
          enthusiasts! We are passionate about connecting players, teams, and
          facilities through a seamless online booking experience. Whether
          you're a casual player or part of a competitive league, our goal is to
          make it easier for you to book your favorite cricket grounds, practice
          nets, and tournaments, all in just a few clicks. Founded by a group of
          cricket lovers, <strong>StumpX</strong> understands the challenges of
          organizing matches, finding available venues, and coordinating
          schedules. That's why we've designed a user-friendly platform that
          brings all these essentials together in one place. From discovering
          nearby cricket pitches to booking slots that fit your schedule, we've
          got you covered. Our platform caters to everyone - from weekend
          warriors to professional teams. With real-time availability updates,
          secure payment options, and instant confirmations, you can focus on
          the game while we handle the rest. We partner with top-rated cricket
          venues across the region, ensuring you have access to well-maintained
          grounds and premium facilities. At <strong>StumpX</strong>, we believe
          in fostering the spirit of cricket, building a community where players
          of all levels can connect and enjoy the game they love. Whether you're
          organizing a local tournament or booking practice sessions, we are
          here to simplify the process.
        </div>
        <center className="text-2xl font-semibold mt-3">Why Choose Us?</center>
        <div className="feature grid gap-6 grid-cols-2 md:grid md:grid-cols-3 lg:flex lg:content-evenly lg:items-center lg:gap-0 my-3 ">
          <div className="feature_box py-4">
            <center>
              <h2 className="text-xl font-semibold">
                Easy online booking system
              </h2>
              <br />
              <p className="text-base font-normal">
                Our online booking system very simple and easy to use.
              </p>
            </center>
          </div>
          <div className="feature_box py-4">
            <center>
              <h2 className="text-xl font-semibold">
                Real-time venue availability
              </h2>
              <br />
              <p className="text-base font-normal">
                In our page you will get update of all match with real time and
                venue.
              </p>
            </center>
          </div>
          <div className="feature_box py-4">
            <center>
              <h2 className="text-xl font-semibold">
                Secure payments and instant confirmations
              </h2>
              <br />
              <p className="text-base font-normal">
                Our payments system is very secure and your will get
                confirmation mail very fast.
              </p>
            </center>
          </div>
          <div className="feature_box py-4">
            <center>
              <h2 className="text-xl font-semibold">
                Access to premium facilities
              </h2>
              <br />
              <p className="text-base font-normal">
                We have some facilities like full refund for five days
                cancellation.
              </p>
            </center>
          </div>
          <div className="feature_box py-4">
            <center>
              <h2 className="text-xl font-semibold">
                Friendly customer support
              </h2>
              <br />
              <p className="text-base font-normal">
                Our comapany is trusted by customer.We have completed 1M+
                booking.
              </p>
            </center>
          </div>
        </div>
        <div className="flex justify-between mt-10 companybox">
          <div
            style={{ width: "30%", borderRadius: "10px" }}
            className="flex justify-center items-center"
          >
            <img src={logo} alt="logo" />
          </div>
          <div className="map">
            <img src={map} alt="map" />
            <div className="address text-white text-xl font-semibold ">
              <p>Sector V,Kolkata</p>
              <p>West Bengal,Pin-700001</p>
            </div>
          </div>
        </div>
        <div style={{height:"50px",width:"100%"}}></div>
      </div>
      <div className="w-full bg-black py-3 text-white">
        <center className="text-2xl font-medium mt-3">Find Us on</center>
        <div className="flex items-center justify-evenly text-4xl font-extrabold my-5 footer">
          <a href="mailto:23ee01025@iitbbs.ac.in" target="blank">
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a href="https://www.instagram.com/accounts/login/" target="blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/" target="blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://x.com/?lang=en " target="blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
