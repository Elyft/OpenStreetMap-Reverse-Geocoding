"use strict";
module.exports = (data)=>{

    // First we check if the parameter is an object

    if(typeof data !== "object" || data === null){
         return "the parameter is not an object";
    }

    // Second we check if the object have only 3 keys and if this keys is latitude, longitude and mail adress

    const objectKeys  = Object.keys(data);
    
    if(objectKeys.length !== 3){
        return "The object must have only three keys";
    }

    if(objectKeys.includes("latitude") === false || objectKeys.includes("longitude") === false || objectKeys.includes("mailAddress") === false){
        return "The object must only have latitude, longitude, mailAdress as keys";
    }

    // Now we are sure that everything is good with the parameter

    const {latitude, longitude, mailAddress} = data;

    // We check if the latitude, longitude, and mailAdress is not empty or null

    const arrayOfItems = [latitude, longitude, mailAddress];

    if( arrayOfItems.includes("") === true || arrayOfItems.includes(null) === true || arrayOfItems.includes(undefined) === true ){
        return "The keys object can't be empty, null or undefined";
    }

    arrayOfItems.length = 0;

    // We check if the latitude and longitude can be a floating number

    if( (isNaN(Number(latitude)) || Number.isInteger(Number(latitude)) === true) || (isNaN(Number(latitude)) || Number.isInteger(Number(longitude)) === true) ){
        return "Wrong latitude or longitude";
    }
    
    // We check if the email address is correct

    const regexEmail = /\S+@\S+\.\S+/;

    if(regexEmail.test(mailAddress) === false){
        return "Wrong email address";
    }   

    return "All checks are good";
};