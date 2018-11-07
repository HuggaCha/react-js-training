import React, { Component } from 'react';
import Radium from 'radium'

class Login extends Component {
	
	constructor(){
	super();
	
	this.state = {
	 messages: [],
	};

}

componentDidMount(){
	

}
 
render(){  

	var formStyle = {
		margin: "0 auto", 
		width: "250px"
	}
 
	var usrName = {
		height: "5%",
		marginBottom: "5px",
		paddingTop: "5px"
	}
	var password = {
		height: "5%",
		marginTop: "0px",
		padding: "5px",
		paddingTop: "3px"
	}
   

	return (
	 	<div>
		   <form style={formStyle}>
			  <div style={usrName}>
			  <p>Username:</p>
			  <input type="text" />
			  </div>
			  <div style={password}>
			  <p>Password:</p>
			  <input type="password" />
			  <br/>
			  </div>
			  <input type="submit" value="Submit" action=""/>
			</form>
					
     	</div>	 
 	);
}

}

export default Radium(Login); 
