import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { NightThemeProvider } from "./providers/NightThemeProvider";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/store";
import { ScoreProvider } from "./providers/ScoreProvider";

// Function to display the offline message
const displayOfflineMessage = () => {
  const message = document.getElementById("offline-message");
  if (!navigator.onLine) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
};

// Listen for online/offline events
window.addEventListener("online", displayOfflineMessage);
window.addEventListener("offline", displayOfflineMessage);

// Add an offline message container to the DOM
const offlineMessageContainer = document.createElement("div");
offlineMessageContainer.id = "offline-message";
offlineMessageContainer.style.cssText = `
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: red;
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  display: none;
  z-index: 9999;
`;
offlineMessageContainer.textContent = "You need to be online to play.";
document.body.appendChild(offlineMessageContainer);

// Initial offline detection
displayOfflineMessage();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NightThemeProvider>
          <ScoreProvider>
            <App />
          </ScoreProvider>
        </NightThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// Register the service worker for PWA functionality
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
