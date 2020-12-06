"use strict";
module.exports = (data)=>{
    return new Promise((resolve)=>{

        // First we validate the user module parameters 

        const checkUserData = require("./checkUserData.js")(data);
        
        if(checkUserData === "the parameter is not an object"){
            return resolve(
                {
                    Message: "Please provide an object as parameter"
                }
            )
        }

        if(checkUserData === "The object must have only three keys"){
            return resolve(
                {
                    Message: "The object you have sent must have only 3 keys"
                }
            )
        }

        if(checkUserData === "The object must only have latitude, longitude, mailAdress as keys"){
            return resolve(
                {
                    Message: checkUserData
                }
            )
        }

        if(checkUserData === "The keys object can't be empty, null or undefined"){
            return resolve(
                {
                    Message: checkUserData
                }
            )
        }

        if(checkUserData === "Wrong latitude or longitude"){
            return resolve(
                {
                    Message:"You must provide a valid latitude or longitude, EX: 3.8535168000000004, 10.5146752"
                }
            )
        }

        if(checkUserData === "Wrong email address"){
            return resolve(
                {
                    Message: "Enter a valid email address"
                }
            )
        }

        // Everything is good :)

        if(checkUserData === "All checks are good"){

            const{latitude, longitude, mailAddress} = data;

            const request = require('request');

            let headers = {
               'Content-Type': 'application/json'};

           const options = {
                 uri: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&email=${mailAddress}`,
                 method: 'GET',
                 headers: headers,
           };
           request(options, (error, response, body)=>{
               
                if(error !== null){
                    return resolve(
                        {
                            Message:"An error occured when retrieving the data", Data:error
                        }
                    )
                }

                body = JSON.parse(body);

                return resolve(
                    {
                        Message:"Operation ended with success",
                        Data: body
                    }
                )
                
            });

        }

    });
}