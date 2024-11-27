export const getJwt = () => {
  return localStorage.getItem("jwt");
};

export const removeJwt = () => {
  return localStorage.removeItem("jwt");
};

export const setJwt = (value) => {
  return localStorage.setItem("jwt", value);
};
