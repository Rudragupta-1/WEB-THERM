# Weather Extension

Weather Extension is a Chrome extension that displays the current weather for a specified city using the OpenWeather API.

## Features

- Displays current temperature, humidity, and wind speed.
- Provides weather icons based on the current weather conditions.
- Simple and user-friendly interface.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory where you downloaded the repository.

## Usage

1. Click on the Weather Extension icon in the Chrome toolbar.
2. Enter the name of the city you want to check the weather for.
3. Click the search button to display the current weather information.

## Directory Structure

WEB-THERM/
├── manifest.json
├── popup.html
├── style.css
├── script.js
├── icon.png
├── search.png
├── clouds.png
├── clear.png
├── rain.png
├── drizzle.png
├── mist.png
├── humidity.png
├── wind.png
├── snow.png
├── thunderstorm.png
└── default.png


## Files

- **manifest.json**: The manifest file that defines the extension's properties and permissions.
- **popup.html**: The HTML file that defines the structure of the popup.
- **style.css**: The CSS file that styles the popup.
- **script.js**: The JavaScript file that handles fetching and displaying weather data.
- **icon.png**: The main icon for the extension.
- **search.png**: The icon for the search button.
- **clouds.png, clear.png, rain.png, drizzle.png, mist.png, humidity.png, wind.png, snow.png, thunderstorm.png, default.png**: Weather icons.

## API

This extension uses the [OpenWeather API](https://openweathermap.org/api) to fetch weather data. You need an API key from OpenWeather to use this extension.

## Configuration

Update the `script.js` file with your OpenWeather API key:

```javascript
const apiKey = "YOUR_API_KEY";


## Files

- **manifest.json**: The manifest file that defines the extension's properties and permissions.
- **popup.html**: The HTML file that defines the structure of the popup.
- **style.css**: The CSS file that styles the popup.
- **script.js**: The JavaScript file that handles fetching and displaying weather data.
- **icon.png**: The main icon for the extension.
- **search.png**: The icon for the search button.
- **clouds.png, clear.png, rain.png, drizzle.png, mist.png, humidity.png, wind.png, snow.png, thunderstorm.png, default.png**: Weather icons.

## API

This extension uses the [OpenWeather API](https://openweathermap.org/api) to fetch weather data. You need an API key from OpenWeather to use this extension.

## Configuration

Update the `script.js` file with your OpenWeather API key:

```javascript
const apiKey = "YOUR_API_KEY";

Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any enhancements, bug fixes, or suggestions.

Contact
For any questions or support, please contact Me at guptarudra901@gmail.com

