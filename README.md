# OpenStreetMap-Reverse-Geocoding
A small NodeJs library to do reverse geocoding with OpenStreetMap(require NodeJs 7.0.0 and newer).

## Context
Those who have already had to do reverse geocoding (getting the address of a person or a place from its geographical coordinates), have already realized that in general it's only done with Google's reverse geocoding api (which is sometimes paid), and which returns a result that appears automatically on a Google map.
This library proposes another approach and another service; it's based on OpenStreetMap (which is free and opensource), and returns a result in text form and not on a map, which is better integrated in your UI/UX.

## Dependencies
if you have not already installed [request node module](https://www.npmjs.com/package/request) do it like this <strong>npm install request</strong> or add this line "request": "^2.88.0" on your package.json file.
Note that the Npm package Request is deprecated,but it can be used in this state for a long time to come with no problem at all.

## Install the OpenStreetMap-Reverse-Geocoding library
* Get the reverse-geocoding folder(by clone or download) and put it on your server folder(you have to put all the files inside one folder, ideally the vendors folder).


## How it's works
Somewhere inside your code you have to write something this:

```Javascript
  const data = {
    latitude:"3.8689867", // This is just an example you can use any latitude that you want, you can take it from a GPS for example
    longitude:"11.5213344", // This is just an example you can use any longitude that you want, you can take it from a GPS for example
    mailAddress:"abc@xyz.com" // Use any valid email address that you want
};

// All this keys is mandatory, if you want to get the address data,the email address is used to prevent misuse of the OpenStreetMap servers.

// The path inside require() depends on how your app folder structure is;

require('./reverse-geocoding/getTownOrCountryWithLatLong.js')(data).then((response)=>{ 
    
     if(response?.Message === "Operation ended with success"){
         
        // Right There you've all the data that you need
         const data = response?.Data;

         /*
            console.log(data) give you the result that you want

            {
                place_id: 45555048,
                licence: 'Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright',
                osm_type: 'node',
                osm_id: 3604566559,
                lat: '3.8688572',
                lon: '11.5216279',
                display_name: 'Rue case-nègre, Avenue Mvog-Fouda Ada, Centre Commercial, Yaoundé I, Communauté urbaine de Yaoundé, Mfoundi, Centre, 1561, Cameroon;Cameroun',
                address: {
                    amenity: 'Rue case-nègre',
                    road: 'Avenue Mvog-Fouda Ada',
                    suburb: 'Centre Commercial',
                    city_district: 'Yaoundé I',
                    city: 'Communauté urbaine de Yaoundé',
                    county: 'Mfoundi',
                    state: 'Centre',
                    postcode: '1561',
                    country: 'Cameroon;Cameroun',
                    country_code: 'cm'
                },
                boundingbox: [ '3.8688072', '3.8689072', '11.5215779', '11.5216779' ]
            }

         */
     
     }else{
         /* In this case something went wrong with your request, the message error can be one of the following messages

            Please provide an object as parameter,

            The object you have sent must have only 3 keys,

            The object must only have latitude, longitude, mailAdress as keys,

            The keys object can't be empty, null or undefined,

            You must provide a valid latitude or longitude, EX: 3.8535168000000004, 10.5146752,

            Enter a valid email address,

            An error occured when retrieving the data

            use console.log(response?.Message), to have the proper error message and handle it

         */
         
     }
    
}).catch((error)=>{
    // Right there you will have to handle the eventually promise error
});

```

You can use [Async/Await](https://javascript.info/async-await) if you want, it's on your discretion.

## Author
<strong>Nguetseng Stephane</strong>
<strong>Tel:</strong> +237697644414
