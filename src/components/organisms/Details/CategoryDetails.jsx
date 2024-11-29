import React, { useEffect, useState } from "react";
import { Container, Typography, Spinner, Button } from "../../atoms";
import { useSelector } from "react-redux";

const CategoryDetails = ({ slug, ...props }) => {
  const jwt = useSelector((state) => state.auth.jwt);

  console.log("HERE IS SLUG:", slug);

  // Hooks must be called unconditionally
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRecruitment = async (e) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_REST_API}/recruit/random`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!slug || slug === "default-slug") return; // Do nothing if slug is default or invalid

    setLoading(true);
    setError(null);

    // Fetch data based on slug
    const fetchData = async () => {
      try {
        let response;
        switch (slug) {
          case "human-resources-slug":
            response = await fetch(
              `${process.env.REACT_APP_REST_API}/recruit/random`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${jwt}`,
                  "Content-Type": "application/json",
                },
              }
            );
            break;
          case "reasearch-and-devlopment-slug":
            response = await fetch("/api/research-and-development"); // Replace with your actual endpoint
            break;
          case "external-operations-slug":
            response = await fetch("/api/external-operations"); // Replace with your actual endpoint
            break;

          default:
            throw new Error("Invalid slug");
        }

        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  // Early return after hooks
  if (slug === "default-slug") {
    return null;
  }

  // Render logic based on slug
  const renderContent = () => {
    if (loading) return <Spinner />; // Replace with your loading indicator

    console.log("slug log :", slug);
    switch (slug) {
      case "human-resources-slug":
        console.log("HR log :", slug);

        return (
          <>
            <Typography.Title
              style={{
                fontSize: "2rem",
                fontFamily: "redensek",
              }}
            >
              Human Resources Details {data}
            </Typography.Title>
            <Button.Base onPress={handleRecruitment}>
              Ask for a recruit
            </Button.Base>
          </>
        );
      case "research-and-development-slug":
        console.log("R&D log :", slug);

        return (
          <Typography.Title
            style={{
              fontSize: "2rem",
              fontFamily: "redensek",
            }}
          >
            Research & Development Details
          </Typography.Title>
        );
      case "external-ops-slug":
        return (
          <Typography.Title
            style={{
              fontSize: "2rem",
              fontFamily: "redensek",
            }}
          >
            External Operations Details
          </Typography.Title>
        );
      default:
        return <Typography.Paragraph>No data available</Typography.Paragraph>;
    }
  };

  return <Container.Card {...props}>{renderContent()}</Container.Card>;
};

export default CategoryDetails;
