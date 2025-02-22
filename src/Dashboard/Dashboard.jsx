import React, { useState } from "react";
import { HashRouter as Router, Route, Routes, Outlet, Link, useNavigate } from "react-router-dom";
import "./Dashboard.css"
import image from '../assets/bits-logo.png';


const Layout = ({onLoggingOut}) => {
  const navigate = useNavigate();

  return (
    <div className="app-layout">

      <header className="navbar">
        <div className="nav-logo">
          <img
            src={image}
            alt="BITS Pilani Logo"
            className="logo"
          />
        </div>
        <div className="SWD">
          <p>STUDENT WELFARE DIVISION</p>
        </div>
      </header>

      
      <div className="sidebar-line"></div>

      
      <aside className="sidebar">
        <button
          className="sidebar-btn"
          onClick={() => (window.location.href = "https://swd.bits-pilani.ac.in/index.aspx")}
        >
          SWD Home
        </button>
        <button className="sidebar-btn" onClick={() => navigate("/")}>
          Main
        </button>

        <Link to='/myprofile'>
        <button className="sidebar-btn">My Profile</button>
        </Link>
        
        <Link to="/dues">
        <button className="sidebar-btn">Dues</button>
        </Link>
        
        <Link to="/certificates">
          <button className="sidebar-btn">Certificates</button>
        </Link>

        <Link to='/scholarship'>
        <button className="sidebar-btn">Scholarships</button>
        </Link>
        
        <Link to="/travel-concession">
          <button className="sidebar-btn">Travel Concession</button>
        </Link>

        <Link to="/clubs">
          <button className="sidebar-btn">Clubs</button>
        </Link>

        <Link to="/raf">
          <button className="sidebar-btn">RAF</button>
        </Link>

        <Link to="/passport-mess">
          <button className="sidebar-btn">Passport and Mess</button>
        </Link>

        <Link to="/upload-photo">
          <button className="sidebar-btn">Uploading Photo for ID Card</button>
        </Link>

        <Link to="/duplicate-id-card">
          <button className="sidebar-btn">Duplicate ID Card</button>
        </Link>

        <button
          className="sidebar-btn"
          onClick={onLoggingOut}>
          Log Out
        </button>
        <button
          className="sidebar-btn"
          onClick={() => (window.location.href = "https://swd.bits-pilani.ac.in/Student/Orientation_2024_25.aspx")}
        >
          Orientation Program
        </button>

      </aside>

      
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default function Dashboard ({ user, onLoggingOut }) {

  return (
    <Router>
      <Routes>
        {}
        <Route path="/" element={<Layout onLoggingOut={onLoggingOut} />}>
          {}
          <Route
            index
            element={
              <div>
                <div className="welcome-section">
                  <p id="welcome-message">Welcome {user.name}</p>
                </div>
                <div className="contact-details">
                  <h2>CONTACT DETAILS</h2>
                  <p>
                    For fee-related query:{" "}
                    <a href="mailto:fees.swd@pilani.bits-pilani.ac.in">
                      fees.swd@pilani.bits-pilani.ac.in
                    </a>
                  </p>
                  <p>
                    For Scholarship-related query:{" "}
                    <a href="mailto:scholarship.swd@pilani.bits-pilani.ac.in">
                      scholarship.swd@pilani.bits-pilani.ac.in
                    </a>
                  </p>
                  <p>
                    For any other query:{" "}
                    <a href="mailto:swd@pilani.bits-pilani.ac.in">
                      swd@pilani.bits-pilani.ac.in
                    </a>
                  </p>
                </div>
              </div>
            }
          />

{}
          <Route
            path="scholarship"
            element={
              <div className="scholarship">
                <h2>MCN / SAF</h2>
                <p>Please make sure that the personal details displayed are correct and up-to-date, else your application will be discarded.<br></br>

                To update the personal details, please modify your profile in MyProfile Section.<br></br>

                Please select the appropriate Income Certificate type for your Mother and Father.</p>

                <ul>
                  <li class="list-item"> Father Name : {user.fatherName} </li>
                  <li class="list-item">
                    <span>Father's Profession</span>
                    <select class="item-select">
                      <option value="option1">Agriculture</option>
                      <option value="option2">Service</option>
                      <option value="option3">Business</option>
                      <option value="option4">Retired</option>
                      <option value="option5">Other</option>
                      <option value="option6">Expired</option>
                    </select>
                  </li>
                  <li class="list-item">
                    <span>Father's Income</span>
                    <input type="text" class="search-bar" />
                  </li>
                  <li class="list-item"> Mother Name : {user.motherName} </li>
                  <li class="list-item">
                    <span>Mother's Profession</span>
                    <select class="item-select">
                      <option value="option1">Agriculture</option>
                      <option value="option2">Service</option>
                      <option value="option3">Business</option>
                      <option value="option4">Retired</option>
                      <option value="option5">Other</option>
                      <option value="option6">Expired</option>
                    </select>
                  </li>
                  <li class="list-item">
                    <span>Mother's Income</span>
                    <input type="text" class="search-bar" />
                  </li>
                </ul>

                <p> External email </p>

                <ul>
                <li class="list-item">
                    <span>Father's Income Certificate Type</span>
                    <select class="item-select">
                      <option value="option1">Income Tax Return</option>
                      <option value="option2">Salary slip</option>
                      <option value="option3">Salary Certificate</option>
                      <option value="option4">Pensioner</option>
                      <option value="option5">Thesildar Cert.</option>
                      <option value="option6">MRO</option>
                      <option value="option7">Any other</option>
                      <option value="option8">Not Applicable</option>
                    </select>
                  </li>
                  <li class="list-item">
                    <span>Mother's Income Certificate Type</span>
                    <select class="item-select">
                      <option value="option1">Income Tax Return</option>
                      <option value="option1">Income Tax Return</option>
                      <option value="option2">Salary slip</option>
                      <option value="option3">Salary Certificate</option>
                      <option value="option4">Pensioner</option>
                      <option value="option5">Thesildar Cert.</option>
                      <option value="option6">MRO</option>
                      <option value="option7">Any other</option>
                      <option value="option8">Not Applicable</option>
                    </select>
                  </li>
                </ul>
                <div className="photo-upload">
                <h2>Upload Both Parent Inc. Cert. Type ( PDF only )</h2>
                <div className="upload-section">
                  <input type="file" accept=".jpg" />
                  <button>Upload</button>
                </div>
                <p style={{ marginTop: "10px" }}>
                  <strong>Note:</strong> PDF size should not exceed 4MB.
                </p>
              </div>
                
              </div>
            }
          />
          {}
          <Route
            path="dues"
            element={
              <div className="dues">
                <p>The following Deposits were made during the current semester:</p>
                <table>
                  <thead>
                    <tr>
                      <th>RECEIPT NO</th>
                      <th>AMOUNT</th>
                      <th>MODE</th>
                      <th>DEPOSIT</th>
                      <th>BANK NAME</th>
                      <th>DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>11871</td>
                      <td>259500</td>
                      <td>Mess Transfer</td>
                      <td></td>
                      <td></td>
                      <td>21 Sept 2024</td>
                    </tr>
                    <tr>
                      <td>0</td>
                      <td>103425</td>
                      <td>AO</td>
                      <td>24195596</td>
                      <td></td>
                      <td>21 Sept 2024</td>
                    </tr>
                  
                  </tbody>
                </table>
              </div>
            }
          />

          {}
          <Route
            path="myprofile"
            element={
              <div>
                <h2>Personal Details</h2>
              <ul>
                <p>
                  <span>Name : {user.name}</span>
                </p>
                <p>
                  <span>Gender : {user.gender}</span>
                </p>
                <p>
                  <span>Hostel : {user.hostel}</span>
                </p>
                <p>
                  <span>Room : {user.roomNumber}</span> 
                </p>
                <p>
                  <span>Date of Birth: {user.dob}</span>
                </p>
                <p>
                  <span>Nationality: {user.nationality}</span>
                </p>
                <p>
                  <span>Category: {user.category}</span>
                </p>
                <p>
                  <span>AADHAR No: {user.aadharNo}</span>
                </p>
                <p>
                  <span>Fee paying Guardian: {user.guardian}</span>
                </p>
                <p>
                  <span>Name of the Father: {user.fatherName}</span>
                </p>
                <p>
                  <span>Name of the Mother: {user.motherName}</span>
                </p>
                <p>
                  <span>Personal Phone No: {user.phoneNumber}</span> 
                </p>
                <p>
                  <span>Alternate Email ID: {user.altEmail}</span>
                </p>
                <p>
                  <span>Education Loan: {user.educationLoan}</span>
                </p>
                <p>
                  <span>Blood Group: {user.bloodGroup}</span>
                </p>
                <p>
                  <span>Allergies: {user.allergies}</span>
                </p>
                <p>
                  <span>Chronic Disease: {user.chronicDisease}</span>
                </p>
              </ul>
              </div>
            }
          />

          {}
          <Route
            path="certificates"
            element={
              <div className="certificates">
                <h2>Apply for Certificate</h2>
                <div className="certificate-selection">
                  <label htmlFor="certificate-type">Select Certificate Type:</label>
                  <select id="certificate-type" className="dropdown">
                    <option value="Bonafide">Bonafide</option>
                    <option value="CGPA Conversion">CGPA Conversion</option>
                    <option value="Conduct & Character">Conduct & Character</option>
                    <option value="Exp. Statement (FD)">Exp. Statement (FD)</option>
                    <option value="Exp. Statement (DD)">Exp. Statement (DD)</option>
                    <option value="Exp. Statement (HD)">Exp. Statement (HD)</option>
                    <option value="Vacation">Vacation</option>
                    <option value="Course Duration">Course Duration</option>
                    <option value="Institute Recognition">Institute Recognition</option>
                  </select>
                  <button className="apply-btn">Apply</button>
                </div>
                <p style={{ marginTop: "10px" }}>
                  Want some other certificate? <strong>Contact SWD Office</strong>
                </p>
              </div>
            }
          />

          {}
          <Route
            path="travel-concession"
            element={
              <div className="travel-concession">
                <h2>Travel Concession</h2>
                <p>
                  Please make sure that you apply with the correct information. You will not be
                  able to change the information, once applied.
                </p>
                <div className="station-selection">
                  <label htmlFor="bits-station">Nearest BITS Station:</label>
                  <select id="bits-station" className="dropdown">
                    <option value="ANAND VIHAR TERMINAL">ANAND VIHAR TERMINAL</option>
                    <option value="DELHI">DELHI</option>
                    <option value="DELHI CANTT.">DELHI CANTT.</option>
                    <option value="DELHI SARAI ROHILLA">DELHI SARAI ROHILLA</option>
                  </select>
                </div>
                <div className="station-selection">
                  <label htmlFor="home-station">Nearest Home Station:</label>
                  <select id="home-station" className="dropdown">
                    <option value="ABU ROAD">ABU ROAD</option>
                    <option value="ACHINERA">ACHINERA</option>
                    <option value="ADILABAD">ADILABAD</option>
                    <option value="ADONI">ADONI</option>
                  </select>
                </div>
                <div className="concession-options">
                  <p>Select the concessions you want to avail:</p>
                  <input type="checkbox" id="home-to-bits" name="concession" value="Home To BITS" />
                  <label htmlFor="home-to-bits">Home To BITS</label>
                  <br />
                  <input type="checkbox" id="bits-to-home" name="concession" value="BITS To Home" />
                  <label htmlFor="bits-to-home">BITS To Home</label>
                </div>
                <button className="apply-btn">Apply</button>
              </div>
            }
          />

          <Route
            path="raf"
            element={
              <div className="raf-page">
                <h2>RAF</h2>
                <div className="raf-section">
                  <label htmlFor="movie-type">Select Movie Type:</label>
                  <div className="raf-container">
                    <select id="movie-type" className="dropdown">
                      <option value="english">ENGLISH</option>
                      <option value="hindi">HINDI</option>
                    </select>
                    <button className="apply-btn">Apply</button>
                  </div>
                </div>
              </div>
            }
          />


          {}
          <Route
            path="clubs"
            element={
              <div className="health-club">
                <h2>Health Club</h2>
                <p>
                  Please read the Terms & Conditions properly before applying to the Health Club. If
                  you apply for the Health Club then it will be assumed that you agree to the Terms
                  and Conditions.{" "}
                  <a
                    href="https://swd.bits-pilani.ac.in/Student/Files/HealthClubTerms&Conditions.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="terms-link"
                  >
                    Clicking Here.
                  </a>
                </p>
                <p>
                  <strong>
                    Note: Beginners and First Year students are advised to apply for the morning
                    batches only.
                  </strong>
                </p>
                <p style={{ color: "red", fontWeight: "bold" }}>
                  Batch M/W/F M8823 (8.15 - 9.00 AM) & T/Th/S T9523 (8.15 - 9.00 AM) for specially
                  girls students.
                </p>
                <div className="batch-selection">
                  <label htmlFor="batch">Batch:</label>
                  <select id="batch" className="dropdown">
                    <option value="M/W/F ME8423">M/W/F ME8423 (4.30 – 6.00 pm)</option>
                    <option value="M/W/F ME8723">M/W/F ME8723 (6.00 – 7.30 pm)</option>
                  </select>
                </div>

                <div className="sports-category">
                  <label htmlFor="sports-category">Sports Category:</label>
                  <select id="sports-category" className="dropdown">
                    <option value="recreative">Recreative</option>
                    <option value="competitive">Competitive</option>
                  </select>
                </div>

                <div className="activities">
                  <label>Activities:</label>
                  <div className="checkbox-container">
                    <input type="checkbox" id="gym" name="activities" value="Gym" />
                    <label htmlFor="gym">Gym</label>
                    <input type="checkbox" id="yoga" name="activities" value="Yoga" />
                    <label htmlFor="yoga">Yoga</label>
                    <input type="checkbox" id="aerobics" name="activities" value="Aerobics" />
                    <label htmlFor="aerobics">Aerobics</label>
                    <input type="checkbox" id="powerlifting" name="activities" value="Power Lifting" />
                    <label htmlFor="powerlifting">Power Lifting</label>
                    <input type="checkbox" id="weightlifting" name="activities" value="Weight Lifting" />
                    <label htmlFor="weightlifting">Weight Lifting</label>
                    <input type="checkbox" id="bodybuilding" name="activities" value="Body Building" />
                    <label htmlFor="bodybuilding">Body Building</label>
                  </div>
                </div>

                <button className="apply-btn">Apply</button>
                <p style={{ color: "green", marginTop: "10px" }}>
                  You can apply for Health Club now.
                </p>
              </div>
            }
          />

          {}
          <Route
            path="passport-mess"
            element={
              <div className="passport-mess-page">
                <h2>Passport and Mess</h2>
                <div className="passport-section">
                  <h3>Passport</h3>
                  <p>
                    Status: <span style={{ color: "red" }}>NOT AVAILABLE</span>
                  </p>
                </div>
              </div>
            }
          />

          {}
          <Route
            path="upload-photo"
            element={
              <div className="photo-upload">
                <h2>Upload Photo for ID Card</h2>
                <div className="upload-section">
                  <input type="file" accept=".jpg" />
                  <button>Upload</button>
                </div>
                <p style={{ marginTop: "10px" }}>
                  <strong>Note:</strong> Upload a .JPG file and ensure the size is 2.5cm x 2.5cm.
                </p>
              </div>
            }
          />

          {}
          <Route
            path="duplicate-id-card"
            element={
              <div className="duplicate-id-card">
                <h2>Apply for Duplicate ID Card</h2>
                <p>Mention the Cause for Applying for Duplicate ID-Card:</p>
                <div className="radio-options">
                  <input type="radio" id="hostel-change" name="cause" value="Hostel Change" />
                  <label htmlFor="hostel-change">Hostel Change</label>
                  <br />
                  <input type="radio" id="lost" name="cause" value="Lost" />
                  <label htmlFor="lost">Lost</label>
                </div>
                <button className="apply-btn">Apply</button>
                <p style={{ color: "green", marginTop: "10px" }}>
                  You can apply for duplicate ID card.
                </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};
