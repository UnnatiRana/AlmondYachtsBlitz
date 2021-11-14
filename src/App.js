import Header from "./components/header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from "./components/footer/Footer";
import LoginForm from "./components/loginForm/LoginForm";
import { Page404 } from "./components/page404/Page404";
import ContactUs from "./components/contactUs/ContactUs";
import AboutUs from "./components/aboutUs/AboutUs";
import OrderCompleted from "./components/orderCompleted/OrderCompleted";
// import Home from "./components/Home/Home";
// import Home from "./components/Home/Home";
import GridDefault from "./components/gridDefault/GridDefault";
import ProductDetail from "./components/productDetail/ProductDetail";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import SubCat from './components/subCat/subCat'
import { useState } from "react";
import Dashboard from "./components/dashbord/Dashbord";
import Home from "./components/Home/Home/Home";


function App() {
  const dates = new Date()

  const [checker, setchecker] = useState(true)
  const [state, setstate] = useState(false)
  const [currentUser, setcurrentUser] = useState(false)
  const [catagory, setcatagory] = useState("")
  const [catagoryPage, setcatagoryPage] = useState({})
  const [chart, setchart] = useState(0)
  let usersListHard = [{
    admin: false,
    name: 'User 2',
    email: 'test@gmail.com',
    pass: '123',
    history: [
      {
        date: dates.getDate() + "/" + dates.getMonth() + "/" + dates.getFullYear(),
        catMain: 'Sea Ray',
        catSub: 'Sea Ray-cat2',
        netBill: 123123,
        paid: 'Paid'
      },
      {
        date: dates.getDate() + "/" + dates.getMonth() + "/" + dates.getFullYear(),
        catMain: 'Sea Ray',
        catSub: 'Sea Ray-cat1',
        netBill: 123123,
        paid: 'Pending'
      },
      {
        date: dates.getDate() + "/" + dates.getMonth() + "/" + dates.getFullYear(),
        catMain: 'Sea Ray',
        catSub: 'Cruse-cat4',
        netBill: 123123,
        paid: 'Paid'
      },
    ]
  }, {
    admin: false,
    name: 'User 1',
    email: 'devolper@gmail.com',
    pass: '123',
    history: [
      {
        date: dates.getDate() + "/" + dates.getMonth() + "/" + dates.getFullYear(),
        catMain: 'CruseShip',
        catSub: 'CruseShip-cat2',
        netBill: 123123,
        paid: 'Paid'
      },
      {
        date: dates.getDate() + "/" + dates.getMonth() + "/" + dates.getFullYear(),
        catMain: 'CruseShip',
        catSub: 'CruseShip-cat1',
        netBill: 123123,
        paid: 'Pending'
      },
      {
        date: dates.getDate() + "/" + dates.getMonth() + "/" + dates.getFullYear(),
        catMain: 'CruseShip',
        catSub: 'Cruse-cat4',
        netBill: 123123,
        paid: 'Paid'
      },
    ]
  }, {
    admin: true,
    name: 'Unnati Rana',
    email: 'unnati_k_rana@yahoo.in',
    pass: '12345',
    history: []
  },
  ]
  let usersList = JSON.parse(localStorage.getItem("almond")) ? JSON.parse(localStorage.getItem("almond")) : usersListHard;
  // new registration user
  const newUser = ({ name, email, pass }) => {
    usersList.push({
      admin: false,
      name: name,
      email: email,
      pass: pass,
      history: []
    })
    // localStorage.removeItem('almond');

    localStorage.setItem('almond', JSON.stringify([...usersList, {
      admin: false,
      name: name,
      email: email,
      pass: pass,
      history: []
    }]));

  }

  // new Order Dealer
  const newOrderPlaceHandler = (order) => {
    // currentUser[0].history.push(order)
    usersList.filter((users, indx) => {
      if (currentUser[0].email == users.email) {
        usersList[indx].history.push(order)
        // localStorage.removeItem('almond');
        localStorage.setItem('almond', JSON.stringify([...usersList]));
      }
    })
  }
  const loginDecider = (id, pass) => {
    const flag = usersList.filter((users) => {
      return (users.email === id && users.pass === pass) ? users : null
    })
    if (flag.length > 0) {
      setcurrentUser(flag)
      toast.success(`Welcome ${flag[0].name}!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      });

    } else {
      toast.error('Invalid User ! Try Again', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      });
    }
  }


  if (checker) {
    localStorage.setItem('almond', JSON.stringify(usersListHard))
    setchecker(false)
  }
  return (
    <div>
      <BrowserRouter>
        <Header chartNumber={chart} currentUser={currentUser} setcurrentUser={setcurrentUser} />
        <Route exact path='/dashbord'>
          <Dashboard currentUser={currentUser} allusers={usersList} setcurrentUser={setcurrentUser} />
        </Route>
        <Route exact path='/'> <Home /> </Route>
        <Route exact path='/gridDefault'> <GridDefault setcatagory={setcatagory} /> </Route>
        <Route exact path='/subCat'> <SubCat catagory={catagory} setcatagoryPage={setcatagoryPage} /> </Route>
        <Route exact path='/productDetail'> <ProductDetail currentUser={currentUser} newOrderPlaceHandler={newOrderPlaceHandler} catagoryPage={catagoryPage} chart={chart} setchart={setchart} /> </Route>
        <Route exact path='/orderCompleted'> <OrderCompleted /> </Route>
        <Route exact path='/about'> <AboutUs /> </Route>
        <Route exact path='/contact'>  <ContactUs /> </Route>
        <Route exact path='/login'> <LoginForm loginDecider={loginDecider} currentUser={currentUser} /> </Route>
        <Route exact path='/signUp'>  <SignUp state={state} setstate={setstate} newUser={newUser} /> </Route>
        {/* <Route path='/404' component={Page404} />
        <Redirect from='*' to='/404' /> */}
        <Footer />
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
