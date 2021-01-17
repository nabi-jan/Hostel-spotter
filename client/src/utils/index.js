import jwtDecode from "jwt-decode";
export const currentUser = () => {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
};
