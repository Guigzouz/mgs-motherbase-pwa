import React, { useEffect, useState } from "react";
import { Container, Typography, Spinner, Button } from "../../atoms";
import { useSelector, useDispatch } from "react-redux";
import { incremented } from "../../../store/counterSlice";

const CategoryDetails = ({ slug, ...props }) => {
  const jwt = useSelector((state) => state.auth.jwt);
  const dispatch = useDispatch(); // Hook to dispatch Redux actions
  const [requestedResources, setRequestedResources] = useState(0); // Track requested resources count

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

  // Increment score by 10 and update requested resources count
  const handleAskForResource = () => {
    const incrementValue = 10;
    dispatch(incremented({ value: incrementValue })); // Dispatch the incremented action
    setRequestedResources((prev) => prev + incrementValue); // Update local state
  };

  useEffect(() => {
    if (!slug || slug === "default-slug") return; // Do nothing if slug is default or invalid

    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        let response;
        switch (slug) {
          case "human-resources-slug":
            response = await fetch("/api/research-and-development");
            break;
          case "reasearch-and-devlopment-slug":
            response = await fetch("/api/research-and-development");
            break;
          case "external-operations-slug":
            response = await fetch("/api/external-operations");
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

  if (slug === "default-slug") {
    return null;
  }

  const renderContent = () => {
    switch (slug) {
      case "human-resources-slug":
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
            <Button.Base onClick={handleAskForResource}>
              Ask for resource
            </Button.Base>
            <Typography.Paragraph style={{ marginTop: "1rem" }}>
              You are asking for {requestedResources} human resources (not equal
              to gmp).
            </Typography.Paragraph>
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
