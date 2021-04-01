import React from 'react';
// import {BrowserRouter, Route, Link} from 'react-router-dom'; 
import {BrowserRouter as Switch, Route} from 'react-router-dom'; 
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

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
  
    <Switch>
     <Header/>
        <Route exact path='/' component={HomePage}/>
        {/* <Route path='/hats' component={HatsPage}/> */}
        <Route path='/shop' component={ShopPage}/>
 
    </Switch>
     
  
       
      
      
      
    </div>
  );
}

export default App;
