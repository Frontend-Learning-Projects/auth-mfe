import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";

const Root = ({ name }) => {
  return (
    // Importance : Keep UI sync with browser URLs
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

export default Root;
