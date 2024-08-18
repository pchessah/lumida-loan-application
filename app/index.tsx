// Import the registerRootComponent function from Expo. This function ensures that the App component is registered as the root component of the app.
import { registerRootComponent } from 'expo';

// Import the main App component which contains the core application logic and UI structure.
import App from './App';

// Register the App component as the root component of the application.
// This tells Expo to load this component when the app starts. It also handles some platform-specific initialization.
registerRootComponent(App);
