import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import UniqueId from 'react-html-id';
import User from './User'
import Contact from './Contact'



class App extends Component {
constructor(){
  super()
  UniqueId.enableUniqueIds(this)

this.state={
userName:'',
lastName:'',
email:'',
contact:'',
users:[]  

}
}

getFirstName=(e)=>{

const names=e.target.value

this.setState({userName:names})

}

getLastName=(e)=>{

const names=e.target.value

this.setState({lastName:names})

}

getEmail=(e)=>{
const names=e.target.value;

this.setState({email:names})


}
getContact=(e)=>{

const names=e.target.value

this.setState({contact:names})


}
showUser=(e)=>{
console.log(e.keyCode);



const user=Object.assign([],this.state.users)

user.push({id:this.nextUniqueId(),fname:this.state.userName, lname:this.state.lastName, contact:this.state.contact, email:this.state.email})


this.setState({users:user})

}



render(){
return(
<Router>
    <div className="App">
   
    <NavLink to="/" exact activeStyle={
     {color:'green'}}>Home</NavLink>
     <br/>
    
          <NavLink to="/contact" exact activeStyle={
     {color:'green'}}>Contact Us</NavLink>
          
         

           <Route path='/' exact render={
           ()=>{
     return (<h1>Welcome to My Page</h1>)
     }

     }/>

     <Route path='/contact' exact strict render={
     ()=>{
     return (<div>
     <h1></h1>
           <Contact getFirstName={this.getFirstName} 
          getLastName={this.getLastName} 
          getContact={this.getContact} 
          getEmail={this.getEmail}
          submitInput={this.showUser}
          firstName={this.firstName}
          onKeyUp={this.onKeyUp} 

          />
          <ol>
          {
           this.state.users.map((user,index)=>{
                return(<User
                    fname={user.fname}
                    key={this.nextUniqueId()}
                    lname={user.lname}
                    contact={user.contact}
                    email={user.email}

                 />)

           })
          }
       </ol>
        
            
          </div>



     )
     }
}/>
</div>


</Router>

)}
}

export default App;



