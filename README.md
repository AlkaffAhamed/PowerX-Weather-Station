# PowerX Weather Station 

Final Project for the subject Fundamentals in Frontend Development in PowerX Program

## Briefing

### Project Title / Description:

Implement a React SPA

### Project Objective(s): 

Create a React single-page application (SPA) that has at least a listing page and a details page showing data from API.

Browse public API at [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis) and choose one that seems interesting to you. To minimize complexity, avoid choosing those that require OAuth. If you’re comfortable you can choose those with apiKey (which usually requires you to register an account with them). If you are not sure which one to choose, here are some personal favourites: [https://api.artic.edu/docs/](https://api.artic.edu/docs/) (if you are feeling artsy),[https://breakingbadapi.com/documentation](https://breakingbadapi.com/documentation) (for Breaking Bad fans).

The application should allow users to bookmark items (like a favourite button) and show the bookmarked items in the home page. The bookmark data can be saved in localStorage.

While creating the application, you should develop the style guide for your application using React Styleguidist.

You’re free to use any styling technology (plain CSS, TailwindCSS, Bootstrap) etc, but your application must be styled.

You’re **NOT** allowed to use third-party component libraries (like Material UI or React Bootstrap) but you’re free to refer to them for inspiration.

## My Implementation 

### Introduction 

- Implemented using ReactJS
- API Used: [https://www.metaweather.com/api/](https://www.metaweather.com/api/)

Following concepts have been applied: 

1. Tailwind CSS Styling 
2. Custom Theme 
3. Hooks and States 
4. Components 

### Implementation 

1. Implemented a list page that lists out cities 
2. Implemented a details page where the selected city will show today's weather + 5 days forecast 

### To Run Locally 

#### Requirements 

- **React** must be installed  
- **Tailwind** must be installed with Craco ([https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)) 

#### Setup 

1. Run `npm install` to install the node modules 

#### Running Exercise Files 

1. Run `npm start` to deploy the application locally 
2. Open any browser and type in the address 

### Netlify Deployment Link

[https://powerx-weather-station.netlify.app/](https://powerx-weather-station.netlify.app/)

