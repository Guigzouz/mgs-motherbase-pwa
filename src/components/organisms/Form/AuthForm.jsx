// Organism: AuthForm.jsx
import React, { useState, useEffect } from "react";
import { Form } from "../../molecules";
import { Button, Container, Typography } from "../../atoms";
import { useDispatch, useSelector } from "react-redux";
import { clearJwt, setJwt } from "../../../store/authSlice";

const AuthForm = ({ ...props }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const jwt = useSelector((state) => state.auth.jwt);
  const dispatch = useDispatch();

  // Handle input changes
  const handleInputChange = (e, name) => {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Send request to specified endpoint
  const handleRequest = async (url) => {
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(setJwt(data.jwt));
        setError(null);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "An error occurred");
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  // Handle Sign Up and Log In
  const handleSignUp = (e) => {
    e.preventDefault();
    handleRequest(`${process.env.REACT_APP_REST_API}/auth/sign-up`);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    handleRequest(`${process.env.REACT_APP_REST_API}/auth/log-in`);
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(clearJwt());
  };

  return (
    <Container.Menu
      style={{
        gap: 15,
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        width: "500px",
        marginTop: "15px",
        backgroundColor: "#fff9c4", // light yellow
      }}
    >
      {jwt ? (
        <Button.Base
          onPress={handleSignOut}
          style={{
            padding: "0.8rem 2rem",
            backgroundColor: "#fdd835", // medium yellow
            color: "black",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#fbc02d")} // darker yellow
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#fdd835")}
        >
          <Typography.Title
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              fontFamily: "redensek",
            }}
          >
            Sign Out
          </Typography.Title>
        </Button.Base>
      ) : (
        <>
          <Form
            configs={[
              {
                required: true,
                placeholder: "e-mail",
                type: "email",
                value: formData.email,
                name: "email",
                onChange: handleInputChange,
              },
              {
                required: true,
                placeholder: "password",
                type: "password",
                value: formData.password,
                name: "password",
                onChange: handleInputChange,
              },
            ]}
          />

          <Container.Menu style={{ display: "flex", flexDirection: "row" }}>
            <Button.Base
              onPress={handleSignUp}
              style={{
                padding: "0.8rem 2rem",
                backgroundColor: "#fdd835", // medium yellow
                color: "black",
                borderRadius: "6px",
                fontSize: "1rem",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#fbc02d")} // darker yellow
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#fdd835")}
            >
              <Typography.Title
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  fontFamily: "redensek",
                }}
              >
                Sign Up
              </Typography.Title>
            </Button.Base>
            <Button.Base
              onPress={handleLogIn}
              style={{
                padding: "0.8rem 2rem",
                backgroundColor: "#eeeeee",
                color: "black",
                borderRadius: "6px",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
            >
              <Typography.Title
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  fontFamily: "redensek",
                }}
              >
                Log In
              </Typography.Title>
            </Button.Base>
          </Container.Menu>

          {error && (
            <Typography.Title
              style={{
                fontFamily: "redensek",
                color: "red",
                marginTop: "0.5rem",
                fontSize: 18,
              }}
            >
              {error}
            </Typography.Title>
          )}
        </>
      )}
    </Container.Menu>
  );
};

export default AuthForm;
