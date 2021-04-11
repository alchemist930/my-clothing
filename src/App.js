import React from 'react';
// import {BrowserRouter, Route, Link} from 'react-router-dom'; 
import {BrowserRouter as Switch, Route} from 'react-router-dom'; 
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import {auth} from './firebase/firebase.utils';


// const HatsPage = (props) =>{
//   console.log(props);
//   return (<div>hats page
//       <div>
//          <Link to='/'>homePage</Link>
//       </div>
//   </div>
// );}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
     // console.log(user);
    });
  }
  componentDidUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
      return (
      <div className="App">
     
      <Switch>
      <Header currentUser ={this.state.currentUser}/>
          <Route exact path='/' component={HomePage}/>
          {/* <Route path='/hats' component={HatsPage}/> */}
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignOutPage} /> 
      </Switch>
      
    
        
        
        
        
      </div>
    );
  }
  
}

export default App;
