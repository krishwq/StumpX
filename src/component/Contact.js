import React from "react";

const Contact = () => {
  const handlesubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "30439244-c6a5-49ff-8b84-711b48dc67f2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
    } else {
    }
    document.getElementById("namecontact").value = "";
    document.getElementById("emailcontact").value = "";
    document.getElementById("message").value = "";
  };
  return (
    <>
    <div className="my-2 p-6 bg-white rounded contactbox">
      <h1 className="text-3xl font-bold mb-4">Contact With Us</h1>
      <p className="text-lg mb-6">
        Feel free to reach out to us with any questions and inquiries
      </p>
      <div className="contact mt-3">
        <form onSubmit={handlesubmit}>
          <div className="mb-4">
            <label
              htmlFor="namecontact"
              className="block text-lg font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="namecontact"
              name="namecontact"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="emailcontact"
              className="block text-lg font-medium mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="emailcontact"
              name="emailcontact"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="message"
              id="message"
              rows="3"
              style={{ resize: "none" }}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded text-white bg-black hover:opacity-90`}
          >
            Send Message
          </button>
          <div className="mt-2 text-sm text-gray-600">
            We'll get back to you as soon as possible!
          </div>
        </form>
      </div>
    </div>
    <footer style={{
      backgroundColor:'black',
      width:"100vw",
      color:'white',
      padding:'50px'
    }}>
      <p><i className="fa-solid fa-house-chimney" style={{color: "#ffffff"}}></i>&nbsp; XYZ Street,Kolkata,West Bengal,123456</p><br />
      <p><i className="fa-solid fa-phone" style={{color: "#ffffff"}}></i>&nbsp;+91&nbsp;9999999999/1010101010</p><br />
      <p><i className="fa-solid fa-envelope" style={{color: "#ffffff"}}></i>&nbsp;emailxyz@gmail.com</p>
    </footer>
</>
  );
};

export default Contact;
