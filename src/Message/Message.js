import React, { Component } from 'react';
import './Message.css';
import Radium from 'radium'

class Message extends Component {
	
	constructor(){
	super();
	this.state = {
	 messages: [],
	};

	}
componentDidMount(){
	//var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    //targetUrl = 'http://catfacts-api.appspot.com/api/facts?number=99'

	fetch('http://localhost:3000/tome?name=Murad')
	.then(results=>{
		console.log(results.body);
		return results.json();
	})
	.then(data=>{
		console.log(data);
		let messages = data.message;
		this.setState({messages: messages});
		console.log("state", this.state.messages);
	})
}
 

render(){  
	return (
	 	<div>
			{this.state.messages}		
     	</div>	 
 	);
}

}

export default Radium(Message); 


	
 

