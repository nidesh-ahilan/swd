import { useState, useEffect } from 'react';
import LoginPage from './Login/LoginPage';
import Dashboard from './Dashboard/Dashboard';


  const allUsers = [
    {
      id: '101',
      name: "Amit Sharma",
      password: "101",
      gender: "Male",
      roomNumber: "A101",
      hostel: "SR Bhavan",
      dob: "1998-05-15",
      nationality: "Indian",
      category: "General",
      aadharNo: "895326474446",
      guardian: "Father",
      fatherName: "Ramesh Sharma",
      motherName: "Sunita Sharma",
      phoneNumber: "9876543210",
      altEmail: "amit.sharma@email.com",
      educationLoan: "No",
      bloodGroup: "O+",
      allergies: "None",
      chronicDisease: "No"
    },
    {
      id: '102',
      name: "Priya Verma",
      password: "102",
      gender: "Female",
      roomNumber: "B202",
      hostel: "Krishna Bhavan",
      dob: "1997-08-22",
      nationality: "Indian",
      category: "OBC",
      aadharNo: "876543210987",
      guardian: "Mother",
      fatherName: "Shiv Kumar Verma",
      motherName: "Rekha Verma",
      phoneNumber: "8765432109",
      altEmail: "priya.verma@email.com",
      educationLoan: "Yes",
      bloodGroup: "A-",
      allergies: "Dust",
      chronicDisease: "Yes"
    },
    {
      id: '103',
      name: "Rahul Mehta",
      password: "103",
      gender: "Male",
      roomNumber: "C303",
      hostel: "SR Bhavan",
      dob: "1996-11-30",
      nationality: "Indian",
      category: "General",
      aadharNo: "765432109876",
      guardian: "Father",
      fatherName: "Vijay Mehta",
      motherName: "Suman Mehta",
      phoneNumber: "7654321098",
      altEmail: "rahul.mehta@email.com",
      educationLoan: "No",
      bloodGroup: "B+",
      allergies: "Pollen",
      chronicDisease: "No"
    },
    {
      id: '104',
      name: "Sneha Kapoor",
      password: "104",
      gender: "Female",
      roomNumber: "D404",
      hostel: "Krishna Bhavan",
      dob: "1995-02-12",
      nationality: "Indian",
      category: "OBC",
      aadharNo: "654321098765",
      guardian: "Mother",
      fatherName: "Sunil Kapoor",
      motherName: "Anjali Kapoor",
      phoneNumber: "6543210987",
      altEmail: "sneha.kapoor@email.com",
      educationLoan: "Yes",
      bloodGroup: "AB+",
      allergies: "None",
      chronicDisease: "Yes"
    }
  ];
  
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const onLoggingIn = (id, password) => {
    const user = allUsers.find(user => user.id === id && user.password === password);
    if (user) {
      setIsLoggedIn(true);
      setUserData(user);
      localStorage.setItem('userData', JSON.stringify(user));
    } else {
      alert('Invalid credentials');
    }
  };

  const onLoggingOut = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem('userData');
  };

  return isLoggedIn ? ( <Dashboard user={userData} onLoggingOut={onLoggingOut} />) : ( <LoginPage onLoggingIn={onLoggingIn} /> );
}

export default App;
