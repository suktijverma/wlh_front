// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import firebaseDB from "./firebase";
// import "./Contact.scss";

// const Contact = () => {


//         const [state, setState] = useState({
//             name: "",
//             email: "",
//             subject: "",
//             message: "",
//         });
        
//         const { name, email, subject, message } = state;
//         const handleSubmit = (e) => {
//             e.preventDefault();
//             if (!name || !email || !subject || !message) {
//             toast.error("Please provide value in each input field");
//             } else {
//             firebaseDB.child("contacts").push(state);
//             setState({ name: "", email: "", subject: "", message: "" });
//             toast.success("Form Submitted Successfully");
//             }
//         };
        
//         const handleInputChange = (e) => {
//             let { name, value } = e.target;
//             setState({ ...state, [name]: value });
//         };



//     return (
//             <section className="contact-section">
//         <div className="container">
//             <ToastContainer position="top-center" />
//             <div className="row justify-content-center">
//             <div className="col-md-10">
//                 <div className="wrapper">
//                 <div className="row no-gutters">
//                     <div className="col-md-6">
//                     <div className="contact-wrap w-100 p-lg-5 p-4">
//                         <h3 className="mb-4">Send us a message</h3>
//                         <form
//                         id="contactForm"
//                         className="contactForm"
//                         onSubmit={handleSubmit}
//                         >
//                         <div className="row">
//                             <div className="col-md-12">
//                             <div className="form-group">
//                                 <input
//                                 type="text"
//                                 className="form-control"
//                                 name="name"
//                                 placeholder="Name"
//                                 onChange={handleInputChange}
//                                 value={name}
//                                 />
//                             </div>
//                             </div>
//                             <div className="col-md-12">
//                             <div className="form-group">
//                                 <input
//                                 type="email"
//                                 className="form-control"
//                                 name="email"
//                                 placeholder="Email"
//                                 onChange={handleInputChange}
//                                 value={email}
//                                 />
//                             </div>
//                             </div>
//                             <div className="col-md-12">
//                             <div className="form-group">
//                                 <input
//                                 type="text"
//                                 className="form-control"
//                                 name="subject"
//                                 placeholder="Subject"
//                                 onChange={handleInputChange}
//                                 value={subject}
//                                 />
//                             </div>
//                             </div>
//                             <div className="col-md-12">
//                             <div className="form-group">
//                                 <textarea
//                                 type="text"
//                                 className="form-control"
//                                 name="message"
//                                 placeholder="Message"
//                                 cols="30"
//                                 rows="6"
//                                 onChange={handleInputChange}
//                                 value={message}
//                                 ></textarea>
//                             </div>
//                             </div>
//                             <div className="col-md-12">
//                             <div className="form-group">
//                                 <input
//                                 type="submit"
//                                 value="Send Message"
//                                 className="btn btn-primary"
//                                 />
//                             </div>
//                             </div>
//                         </div>
//                         </form>
//                     </div>
//                     </div>
//                     <div className="col-md-6 d-flex align-items-stretch">
//                     <div className="info-wrap w-100 p-lg-5 p-4 img">
//                         <h3>Contact us</h3>
//                         <p className="mb-4">
//                         We're open for any suggestion or just to have a chat
//                         </p>
//                         <div className="dbox w-100 d-flex align-items-start">
//                         <div className="icon d-flex align-items-center justify-content-center">
//                             <span className="fa fa-map-marker"></span>
//                         </div>
//                         <div className="text pl-3">
//                             <p>
//                             <span>Address:</span> 198 West 21th Street, Suite 721
//                             New York NY 10016
//                             </p>
//                         </div>
//                         </div>
//                         <div className="dbox w-100 d-flex align-items-center">
//                         <div className="icon d-flex align-items-center justify-content-center">
//                             <span className="fa fa-phone"></span>
//                         </div>
//                         <div className="text pl-3">
//                             <p>
//                             <span>Phone:</span>
//                             <a href="tel://123456789">+1235 2355 98</a>
//                             </p>
//                         </div>
//                         </div>
//                         <div className="dbox w-100 d-flex align-items-center">
//                         <div className="icon d-flex align-items-center justify-content-center">
//                             <span className="fa fa-paper-plane"></span>
//                         </div>
//                         <div className="text pl-3">
//                             <p>
//                             <span>Email:</span>
//                             <a href="mailto:info@yoursite.com">
//                                 info@yoursite.com
//                             </a>
//                             </p>
//                         </div>
//                         </div>
//                         <div className="dbox w-100 d-flex align-items-center">
//                         <div className="icon d-flex align-items-center justify-content-center">
//                             <span className="fa fa-globe"></span>
//                         </div>
//                         <div className="text pl-3">
//                             <p>
//                             <span>Website:</span>
//                             <a href="#">yoursite.com</a>
//                             </p>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </section>
//     )
// };

// export default Contact;

import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='container'>
            <div className='form-container'>
                <div className='message-section'>
                <h2 className='message-heading'>Sends Us A Message</h2>
                    <div className='form'>                    
                        <form className='form-section'>
                            <input type="text" placeholder='enter your name' />
                            <input type="email" placeholder='Enter Your Email'/>
                            <input type="text" placeholder='Enter Query Subject' />
                            <textarea rows="10" columns = "20" placeholder ="enter your query here"></textarea>
                            {/* <button type="Submit">Submit</button> */}
                            <div className='submit-button'>
                                <button type="Submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='contact-info'>
                    <h1>Contact Us</h1>
                    <div className='info'>
                        <table>
                            <tr >
                                <th rowSpan="2">Address</th>
                                <td>IET Lucknow</td>
                            </tr>
                            <tr>
                                <td>UP , India</td>
                            </tr>
                            <tr >
                                <th >Email</th>
                                <td>query@wohelife.com</td>
                            </tr>
                            <tr>
                                <th >PhoneNo</th>
                                <td>00000 00000</td>
                            </tr>
                            <tr>
                                <th>Website</th>
                                <td>www. wohelife.com</td>
                            </tr>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Contact;