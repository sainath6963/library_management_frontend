import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import logo from "../assets/black-logo.png";
import logo_with_title from "../assets/logo-with-title.png";

const ResetPassword = () => {


  const dispatch = useDispatch();
    const { loading, error, message, user, isAuthenticated } = useSelector(
      (state) => state.auth
    );
  return <></>;
};

export default ResetPassword;
