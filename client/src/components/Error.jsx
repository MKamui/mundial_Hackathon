import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Error = ({ error }) => {
  let modalStyles = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  let statusCode = error.status.toString();
  let statusNumber = statusCode.slice(0, 1);

  if (statusNumber === "2") {
    toast.success(error.description, modalStyles);
  } else if (statusNumber === "4") {
    toast.error(error.description, modalStyles);
  }

  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};

export default Error;
