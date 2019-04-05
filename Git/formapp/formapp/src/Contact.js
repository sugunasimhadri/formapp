import React from 'react';

const Contact=(props)=>{

  let firstName=null;
  let lastName=null;
  let email=null;
  let contact=null;
  let submit=null;

 const onKeyUp = (passed, e) => {
    if (e.keyCode == 13) {
      console.log(passed)
      switch (passed) {
        case 'firstName':
              lastName.focus();
          break;
        case 'lastName':
              email.focus();
          break;
        case 'email':
              contact.focus();
          break;
        case 'contact':
              submit.focus();
          break;
        default:
              submit.focus();
        
      }
    }
  }


return ( <div>      
       <div>
         <span>First Name: </span>
         <input
           type="text"
           onKeyUp={onKeyUp.bind(this, 'firstName')}
            ref={(input) => { firstName = input; }} 
           onChange={props.getFirstName}/>
       </div>
       <div>
         <span>Last Name: </span>
         <input
           type="text"
             onKeyUp={onKeyUp.bind(this, 'lastName')}
            ref={(input) => { lastName = input; }} 
           onChange={props.getLastName}/>
       </div>
       <div>
         <span>email: </span>
         <input
           type="text"
             onKeyUp={onKeyUp.bind(this, 'email')}
            ref={(input) => { email = input; }} 
           onChange={props.getemail}/>
       </div>
       <div>
         <span>contact: </span>
         <input
           type="text"
            onKeyUp={onKeyUp.bind(this, 'contact')}
            ref={(input) => { contact = input; }} 
          onChange={props.getcontact}/>
       </div>
       <div>
       <input
         type="button"
         value="Submit"
         ref={(input) => { submit = input; }} 
         onClick={props.submitInput}
       />
        </div>
        </div>
           );
         }

 export default Contact;