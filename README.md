# Flight Radar Project
Flight Radar is a ReactJS application developed to display and track real-time flight data. This project allows users to track planes on a map and access flight details using flight data received via RapidAPI. In addition, visual elements and detailed information about flights are presented with a user-friendly interface.

## Preview
A preview of my flight radar project is in the gif below.

![flightRadar](https://github.com/user-attachments/assets/212c6349-22e9-4df0-8623-d8957e879463)


## Features
* Real-Time Flight Data: Flight data is retrieved using RapidAPI and this data is displayed on the map.
* Leaflet Map Integration: The locations and routes of the planes are visualized on an interactive map with the Leaflet library.
* Detailed Flight Data: By clicking on the plane markers on the map, detailed information about the flight (flight time, departure place, destination, aircraft type, etc.) is displayed.
* Visual Slides with SplideJS: Pictures of the plane are presented as a scrollable gallery with the SplideJS library.
* Flight Route: The route of the plane is drawn on the map with Polyline.
* List View and Pagination: Users can go to a page where the flights are listed and access detailed flight information. The data is sorted using the pagination library.
* Responsive Design: The application is designed to be compatible with different devices.
* Loader: A loading animation is shown to the user until the flight data is loaded.
* Live Data Stream: Flight data is updated every 10000ms (10 seconds) so flights and aircraft can be followed in real time.

## Technologies

* ReactJS: ReactJS was used as the basic building block of the application.
* Redux Toolkit & Thunk: Flight data management and asynchronous data retrieval operations were performed using Redux Toolkit and Thunk.
* Axios: Axios library was used for data retrieval operations from the API.
* Leaflet: Leaflet library was used to visualize flights and aircraft routes on the map.
* SplideJS: SplideJS was used to present aircraft images as a scrollable slideshow.
* React Router DOM: React Router DOM was used to provide transition between pages within the application.
* Pagination: A suitable pagination library was integrated for pagination on the page listing the flights.
* Polling: Polling methods are used to update the data stream every 10000ms.
