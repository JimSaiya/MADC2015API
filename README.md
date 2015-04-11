http://openglobe.github.io/myamerica-devsummit/

This application will function as the starting point for a location based set of tools to
find nearby federal recreation sites, details about the sites and other pertinent information.

This is the server side application. It is designed to run on IBM's Bluemix or any other Cloud
Foundry based Platform as a Service (PaaS). It is built on Node.js and Bluemix's mobile first
offering. This can be leveraged to deliver positive users experience with mobile clients like
an Android appplication.

The goal is to hack together a Mashup application driven by this backend that is functional,
useful and an enjoyable to work on by then end of 04/12/15 for the developer summit linked above.
The backend currently pulls facilites from RIDB (http://usda.github.io/RIDB/#get-all-recreation-areas).
It also pulls weather information from OpenWeatherMap (http:openweathermap.org).

Feel free to contribute to the madness. Just try to follow and/or improve existing patterns in the code
to keep this project somewhat organized and fun to hack.

The live server lives here: http://madc2015api.mybluemix.net/

NOTE: RIDB requires an API key. They are free. Look at config/database.js for how it's being used.
http://usda.github.io/RIDB/#authentication
