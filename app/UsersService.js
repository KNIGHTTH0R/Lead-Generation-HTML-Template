'use strict';

angular.module('UsersService', [])
.service('service', ['$http','$location','$window', function ($http,$location,$window){


this.SignUp = function (Email){

var Url='https://us16.api.mailchimp.com/3.0/lists/87e64cc485/members';

  
 	var jn = "{\"email_address\":\"bilal123b@hotmail.com\",\"status\":\"subscribed\"}";
 	console.log(jn);
 	var req = {
 method: 'GET',
 url: Url,
 headers: {
 	 "Authorization": "apikey 64b8f2097a6c8098e1c3fe8aa9b3b309-us16",
 	// "Access-Control-Allow-Origin": "*"
 //    "content-type": "application/json",
 //    "cache-control": "no-cache",
 //    "postman-token": "d2c2dcb5-d15e-366c-da43-baccc970dbe9"
 // 		},
 // data:"{\"email_address\": \"bilaloo@hotmail.com\",\"status\":\"subscribed\"}"
 
}}

 	var promise  = $http(req).then(function (success){

 					console.log(success.data);
      		   		return success.data;
          }, function (error){
            
					return error;
			  	 });
 	  console.log(promise);
      return promise;
  }


}]);

