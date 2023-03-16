# Link to app
https://users.metropolia.fi/~irinakon/my-restaurant  
  
  
![qrcode](https://github.com/vvitchforest/MyRestaurant/blob/master/public/my-restaurant-qr.png)

# Description

This project is a React application made as a code test. The functionalities of this application are to view weather data of 4 cities and there's also a possibility to filter data per city. 

### Technologies used
APIs:  
  OpenWeatherMap API
   
 NPM packages:  
    "@emotion/react": "^11.10.6",
    "@emotion/styled": "^11.10.6",
    "@mui/material": "^5.11.13",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "moment": "^2.29.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.9.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"

## Installation and deploy to localhost:3000

1. Download code to desired location
2. Create .env file in top of file hierarchy (same level as src or public folders) with variables:
```
REACT_APP_WEATHER_API_KEY=<insert-your-google-maps-api-key-here>

```

Next, run
```
npm install
npm start
```

Congratulations, your app should now be up and running in localhost:3000

## Deploy to server

Go to file App.js and then add "basename" property to the Router component with your website base url (remember it might have to be shorter than the whole url)
Then, run code in terminal: 
```
npm run build
```
Move build contents to server  
Finally, if your server is Apache based, create a .htaccess file to your root folder structure with variables:
```
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^ index.html [L]
```

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

