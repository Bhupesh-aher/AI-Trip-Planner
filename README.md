<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->


# IntelliTrip ✈️

**IntelliTrip** is an intelligent, AI-powered travel planning app that helps users create personalized trip itineraries. By leveraging the GPT API, this app generates tailored travel plans based on user preferences such as destination, budget, number of days, and travel group size. The platform makes trip planning more efficient and fun, providing users with curated hotel recommendations, places to visit, and day-by-day itineraries — all in just a few clicks.



## 🚀 Live Demo

🌍 **Visit the AI Trip Planner App -**  https://ai-trip-planner-indol-sigma.vercel.app/





## Features

- **AI-Powered Travel Plans**:
    - Enter your **destination**, **budget**, **number of days**, and **group size** to receive a fully customized trip plan.
    - Based on this input, the app leverages the **GPT API** to generate a detailed plan, including hotel suggestions, places to visit, and a daily itinerary.
- **Google Authentication**:
    - Secure user login via **Google Authentication**, allowing users to sign in easily and access their saved trip plans.
- **Firebase Data Storage**:
    - User-generated travel plans are stored in **Firebase** so users can view their previous plans, modify them, or save new ones.
- **Personalized Recommendations**:
    - The app uses the GPT API to suggest destinations, activities, and itineraries that align with the user’s input.
    - Detailed daily itineraries including times to visit specific locations, activities, and even restaurant suggestions.
- **Responsive & User-Friendly Interface**:
    - Designed using **Tailwind CSS**, the app features a responsive and modern interface that adapts to different screen sizes.



## Technologies

- **Frontend**:
    - **React.js**: For building a dynamic, responsive UI with a seamless user experience.
    - **Tailwind CSS**: A utility-first CSS framework used to design fast and responsive interfaces.
    - **Redux**: For managing global state, including user data and trip plans.
- **Backend**:
    - **GPT API (OpenAI)**: Powers the AI-generated travel plans by processing user input and generating customized itineraries.
    - **Firebase**: Used for **user authentication** (via Google Auth) and storing trip plans securely.
- **Authentication**:
    - **Google Auth**: To provide secure and simple sign-in functionality for users.



## How It Works

1. **User Input**:
    - Users begin by entering their **destination**, **budget**, **number of days**, and **group size** into the app.
2. **Plan Generation**:
    - The app sends the user’s input (along with additional context) to the **GPT API** for processing.
    - The GPT model returns a detailed travel plan, including hotel suggestions, a list of recommended places to visit, and a day-by-day itinerary.
3. **User Authentication**:
    - Users can log in using **Google Authentication**, allowing them to save their trip plans and access them later.
    - Firebase handles authentication and stores user-related data, including all previous and saved travel plans.
4. **Displaying the Plan**:
    - Once the GPT API returns the travel plan, it is displayed on the UI in an interactive format.
    - The UI breaks down the plan into **days** and **activities**, with suggested times for visiting each location.
5. **Saving & Accessing Plans**:
    - All generated travel plans are stored in **Firebase**, so users can retrieve, modify, or revisit their plans at any time.



## Performance Optimizations

- **Efficient State Management with Redux**:
    - The app leverages **Redux** for managing the global state, including user authentication and the list of generated trip plans. This ensures a smooth experience, with real-time updates for users when viewing or editing plans.
- **Real-time Firebase Integration**:
    - With **Firebase** as the backend, the app benefits from real-time data storage, meaning users can see updates instantly without refreshing the page.
- **AI Processing Optimization**:
    - The app optimizes the use of the **GPT API** by appending contextually relevant information to user queries, making sure the generated plans are tailored to the user’s input while minimizing unnecessary API calls.
- **Responsive UI**:
    - Using **Tailwind CSS**, the app is fully responsive, ensuring an optimal experience for users across devices, from mobile to desktop.



## Screenshots

Here are some screenshots showcasing the app:

*The home page where users enter their trip preferences (destination, budget, etc.).*

*A sample generated travel plan, with day-by-day suggestions for places to visit.*

*A detailed day-by-day itinerary showing time-specific recommendations.*