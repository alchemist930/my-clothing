import React from 'react';
// import {BrowserRouter, Route, Link} from 'react-router-dom'; 
import { Switch, Route, Redirect} from 'react-router-dom'; 
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

// const HatsPage = (props) =>{
//   console.log(props);
//   return (<div>hats page
//       <div>
//          <Link to='/'>homePage</Link>
//       </div>
//   </div>
// );}

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser:null
  //   }
  // }
  unsubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // });
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          
        });
        console.log(this.state);
      }
      setCurrentUser(userAuth);
      console.log(userAuth);
      //this.setState({ currentUser: userAuth},()=> console.log(userAuth));
     // createUserProfileDocument(user);
      //this.setState({currentUser: user});
      
    });
  }
  componentDidUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
      return (
      <div className="App">
     
      <Header />
      <Switch>
          <Route exact path='/' component={HomePage}/>
          {/* <Route path='/hats' component={HatsPage}/> */}
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' render={()=> this.props.currentUser ? (<Redirect to= '/' />) : (<SignInAndSignOutPage/>) } /> 
        </Switch>
      </div>
    );
  }
  
}
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
