# Mausam

# Mausam

Mausam is a weather app that allows you to easily retrieve weather information for various locations. With Mausam, you can quickly check the current weather conditions, temperature, humidity, and more. Stay informed about the weather forecast and plan your activities accordingly. Whether you're traveling or simply want to know the weather in your area, Mausam has got you covered.
![Screenshot of Weather App](/public/app_logo.svg)
## Table of Contents
- [Getting Started](#getting-started)
- [Setting Up Environment Variable](#setting-up-environment-variable)
- [Gallery](#gallery)

## Getting Started

To get started with the Weather App, follow these steps:

1. Clone the repository:

- `git clone https://github.com/inderjitshahi/Mausam.git`



2. Install dependencies:
- `cd weather-app`
- `npm install`



3. Start the development server:
- `npm start`



4. Open your web browser and visit `http://localhost:3000` to see the app in action.

## Setting Up Environment Variable

In order to access weather data, the app requires an API key. Follow these steps to set up the `REACT_APP_API_KEY` environment variable:

1. Obtain an API key from a weather data provider. (e.g., OpenWeatherMap, AccuWeather)

2. Create a `.env` file in the root directory of your project.

3. Inside the `.env` file, add the following line:


Replace `<your_api_key>` with the API key you obtained.

4. Save the `.env` file.

5. Restart the development server for the changes to take effect.

6. The app will now be able to access the API key via `process.env.REACT_APP_API_KEY`.

**Note:** Ensure that you keep your API key confidential and do not share it publicly. You can add `.env` to your `.gitignore` file to prevent accidental commits.

## Gallery

![Screenshot of Weather App](/public/app_images/Screenshot1.png)
![Screenshot of Weather App](/public/app_images/Screenshot2.png)



