import React from "react";
import { useSelector } from "react-redux";
import { decodeJwt } from "../../helpers/jwt-helper";
import { Typography } from "../atoms";

const CodenameDisplay = (props) => {
  const jwt = useSelector((state) => state.auth.jwt);
  let codename = "Unregistered Comrade";

  if (jwt) {
    const decoded = decodeJwt(jwt);
    codename = decoded?.codename || "Unknown Comrade";
  }

  return (
    <Typography.Title {...props}>{codename}'s Motherbase</Typography.Title>
  );
};

export default CodenameDisplay;
