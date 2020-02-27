# Digital Crafts Coding Assessment

When I spoke to Harmony over the phone, she mentioned that one of the most important things about this assessment was making sure it was teachable.

I wanted to hit all the requirements and the bonus listed out in the code assessment document, but also leave room for further improvements. 

I figured if this is supposed to be teachable, it should be left open for a student to extend and build upon. All they would have to do is add their own api key to weather.js and then they could start adding on to the existing logic. Here are some of the future improvements I had in mind for a student to build:

  - searching for the city the user types in and creating a dropdown for them to select matching names from the list of cities openweather provides here: http://bulk.openweathermap.org/sample/. According to the api, that also allows you to search by the city id which will provide more accurate results. 
  - adding the ability store the results for multiple cities rather than replacing the exisiting weather data. 
  - ability to switch from celcius to fahrenheit.

I wrote simple functions that did one thing that someone could read and understand from the top to bottom of the js.

When it came to using the fetch api, I used promises instead of async await because it mirrors the examples in the MDN web docs for using fetch. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

The app can be easily be deployed easily long as you set the api key value in weather.js.

It can be seen deployed here: https://priceless-chandrasekhar-301ede.netlify.com/

I also tried to make sure the app was completely accessible. When run through lighthouse, the app scores a 100 for accessibility . 

(insert image of score here)
