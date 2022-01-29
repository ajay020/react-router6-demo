import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
// import {  About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { Featured } from './components/Featured';
import { NewProduct } from './components/NewProduct';
import Users from './components/Users';
import UserDetails from './components/UsersDetails';
import Admin from './components/Admin';

/**
 * Lazy loading
 * component must be default exported
 * import component dynamically
 */
import React from 'react';
import Profile from './components/Profile';
import { AuthProvider } from './components/auth';
import { Login } from './components/Login';
import RequireAuth from './components/RequireAuth';
const LazyAbout = React.lazy(()=> import('./components/About'));


function App() {
  return (
      <AuthProvider>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={
                 <React.Suspense fallback="loading...">
                      <LazyAbout/>
                 </React.Suspense>
                }/>
            <Route path="order-summary" element={<OrderSummary />} />
            <Route path="products" element={<Products/>} >
                
                {/* this route can be reached with parent path that is "/products" */}
                <Route index  element={<Featured />} />

                <Route path="featured" element={<Featured />}/>
                <Route path="new" element={<NewProduct />}/>
            </Route>
             {/* Dynamic routes  */}
             <Route path="users" element={<Users/>} >
                <Route path="admin" element={<Admin/>} />
                <Route path=":userId" element={<UserDetails/>} />
             </Route>

             <Route path="profile" element={ <RequireAuth> <Profile/> </RequireAuth>}/>
             <Route path="login" element={<Login/>}/>

            <Route path="*" element={<NoMatch/>} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
