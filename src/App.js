import logo from './logo.svg';
import './App.css';

import Home from './component/Home/Home';
import { BrowserRouter as Router , Switch  , Route} from 'react-router-dom';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AboutUs from './component/AboutUs/AboutUs';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Dashboard from './component/Dashboard/Dashboard';
import AddProduct from './component/AddProduct/AddProduct';
import Products from './component/Products/Products';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import MyProduct from './component/MyProduct/MyProduct';
import Payment from './component/Payment/Payment';
import Review from './component/Review/Review';




function App() {
  return (
    <div className="App">
      <AuthProvider>
            <Router>
            
              <Switch>
                <Route exact path='/'>
                  <Home/>
                </Route>
                <Route  path='/home'>
                  <Home></Home>
                </Route>
                <PrivateRoute path='/dashboard'>

                   <Dashboard/>

                </PrivateRoute>
                <PrivateRoute path='/addproducts'>

                   <AddProduct/>

                </PrivateRoute>
                <Route path='/products'>

                   <Products/>

                </Route>
                <Route path='/login'>
                  <Login/>
                </Route>
                <Route path='/register'>
                  <Register/>
                </Route>
                <PrivateRoute path='/review'>
                  <Review/>
                </PrivateRoute>
                <PrivateRoute path='/Payment'>
                  <Payment/>
                </PrivateRoute>
                
                <Route path='/aboutus'>
                  <AboutUs/>
                </Route>
                <PrivateRoute path='/MyProduct'>
                  <MyProduct/>
                </PrivateRoute >
                <PrivateRoute path='/PlaceOrder'>
                      <PlaceOrder/>
                </PrivateRoute >
                

              </Switch>
            
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
