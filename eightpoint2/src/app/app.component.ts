import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	// property for event object
  event:Object={
  	name:"",
  	pwd:"",
  	date:"",
  	email:"",
  	address:"",
  	city:"",
  	pin:"",
    votes:""
  }
  
nameInvalid;dateInvalid;timeInvalid;pinInvalid;pwdInvalid;emailInvalid;
//function for validating the iform
  validateMe=function(form){
this.nameInvalid=false;
this.dateInvalid=false;
this.timeInvalid=false;
this.pinInvalid=false;
this.pwdInvalid=false;
this.emailInvalid=false;
 	//validate name
   this.event = form;
   if ((this.event.name.length<2)||(this.event.name.length>50)) this.nameInvalid=true;

//validate password
var passw=  /^[A-Za-z]\w{7,14}$/;  
if(!this.event.pwd.match(passw))
 	this.pwdInvalid=true;

var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            //var address = document.getElementById[email].value;
            if (reg.test(this.event.email) == false) 
            {
               this.emailInvalid=true;
            }



	//validate date
			var d = new Date(this.event.date);
			if ( Object.prototype.toString.call(d) === "[object Date]" ) {
  			// it is a date
  			if ( isNaN( d.getTime() ) ) {  // d.valueOf() could also work
  			  // date is not valid
  			  this.dateInvalid=true;
  			 
  			}
  			else {
    				// date is valid
    				this.dateInvalid=false;
  					}
			}
			else {
			  this.dateInvalid=true;
			}

	
  
	//validate pin
	if (this.event.pin.trim().length!=6) this.pinInvalid=true;

  }


}
