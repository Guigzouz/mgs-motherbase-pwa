import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import { BottomTabMenu } from "./components/molecules";
import ThemeSwitch from "./components/molecules/ThemeSwitch"; // Import ThemeSwitch
import Profile from "./pages/profile";
import { useNightTheme } from "./providers/NightThemeProvider";

export default function App() {
  const { nightTheme, toggleTheme } = useNightTheme(); // Get the theme toggle function

  return (
    <Router>
      <div>
        {/* Global container that includes the ThemeSwitch and BottomTabMenu */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            position: "absolute",
            top: "15px",
            right: "15px",
          }}
        >
          {/* Place ThemeSwitch in the header */}
          <ThemeSwitch
            onClick={toggleTheme}
            iconName={nightTheme ? "FaRegSun" : "FaRegMoon"} // Set icon based on theme
            iconSize={20}
          />

          {/* You can also add a logo or other elements here */}
        </header>

        {/* Define your Routes */}
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <nav>
          <BottomTabMenu
            configs={[
              {
                displayName: "Home",
                slug: "",
                iconName: "FaHome",
              },
              {
                displayName: "Profile",
                slug: "profile",
                iconName: "FaRegUserCircle",
              },
            ]}
          />
        </nav>
      </div>
    </Router>
  );
}
