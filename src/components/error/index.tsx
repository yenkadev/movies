import React from "react";
import { FaBug } from "react-icons/fa";
import "./error.scss";

interface ErrorProps {
  error: string;
}
const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="error text-center">
      <FaBug />
      <p>{error}</p>
    </div>
  );
};

export default Error;
