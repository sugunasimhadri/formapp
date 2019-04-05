import React from 'react';

const User=(props)=>{

return(
<div>
<li>
<span>{props.fname}, {props.lname}, {props.contact}, {props.email} </span>
</li>
</div>
)
}

export default User;
