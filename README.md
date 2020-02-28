# Vanilla JavaScript Weather App

When I spoke to Harmony over the phone, she mentioned that one of the most important things about this assessment was making sure it was teachable. With that in mind. I wanted to hit all the requirements and the bonus listed out in the code assessment document, but also leave room for further improvements. When I was in a boot camp, I always learned best when I actually built things myself or watched them being imroved rather than looking at a complete solution.

## Future Versions

I figured if this is supposed to be teachable, it should be left open for a student to extend and build upon. All they would have to do is add their own api key to weather.js and then they could start adding on to the existing logic. Here are some of the future improvements I had in mind for a student to build:

- searching for the city the user types in and creating a dropdown for them to select matching names from the list of cities openweather provides here: http://bulk.openweathermap.org/sample/. According to the api, that also allows you to search by the city id which will provide more accurate results.
- requesting and appending additional data from a seperate request (such as the weekly forecast, houlry forecast, etc.).
- adding the ability store the results for multiple cities rather than replacing the exisiting weather data.
- ability to switch from celcius to fahrenheit in the UI.

## General Overview

I wrote simple functions that did one thing that someone could read and understand from the top to bottom of the js.

When it came to using the fetch api, I used promises instead of async await because it mirrors the examples in the MDN web docs for using fetch. It would be easy for a student to reference and figure out how the fetch request is working.

I made sure the app was completely accessible. When run through lighthouse, the app scores a 100 for accessibility. This was something that was really never taught or talked about while I was in a boot camp.

It can be seen deployed here: https://priceless-chandrasekhar-301ede.netlify.com/
