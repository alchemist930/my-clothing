import React from 'react';
// import {BrowserRouter, Route, Link} from 'react-router-dom'; 
import {BrowserRouter, Route} from 'react-router-dom'; 
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
// const HatsPage = (props) =>{
//   console.log(props);
//   return (<div>hats page
//       <div>
//          <Link to='/'>homePage</Link>
//       </div>
//   </div>
// );}

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   
        <Route exact path='/' component={HomePage}/>
        {/* <Route path='/hats' component={HatsPage}/> */}
        <Route path='/shop' component={ShopPage}/>
 
    </BrowserRouter>
     
  
       
      
      
      
    </div>
  );
}

export default App;
