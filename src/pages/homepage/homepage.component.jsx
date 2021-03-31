import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage =(props) =>{
  console.log(props);
  return(
 
         <div className='homepage'>
           <Directory/>
          <button onClick={()=> props.history.push('/hats')}> Hats </button>
         </div>
          
   
 );}
 export default HomePage;