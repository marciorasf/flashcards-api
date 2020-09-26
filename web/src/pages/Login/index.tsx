import React, { useState, FormEvent, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";

import { PageContent, MainContainer } from "../../assets/styles/global";
import CustomInput from "../../components/CustomInput";
import Divider from "../../components/Divider";
import { Notify } from "../../hooks/Notify";
import AuthService from "../../services/AuthService";
import { Title, Link, LinksContainer } from "./styles";

const blankFormData = {
  email: "",
  password: "",
};

const ERRORS = {
  ERROR: "Something bad happened!",
  WRONG_PASSWORD: "Wrong password!",
  USER_NOT_FOUND: "User not found!",
};

export default function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState(blankFormData);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await AuthService.login(formData);
      history.push("/");
    } catch (error) {
      const errorCode =
        (error?.response?.data?.message as
          | "USER_NOT_FOUND"
          | "WRONG_PASSWORD") || "ERROR";
      const errorMessage = ERRORS[errorCode];
      Notify.error(errorMessage);
    }
  }

  return (
    <PageContent>
      <MainContainer>
        <Title>
          <p>Log in</p>
          <p>Flashcards</p>
        </Title>

        <Divider height="5.0rem" />

        <form onSubmit={handleSubmit} autoComplete="on">
          <CustomInput
            name="email"
            label="Email"
            type="email"
            required
            onChange={handleInputChange}
          />

          <Divider height="2rem" />

          <CustomInput
            name="password"
            label="Password"
            type="password"
            required
            onChange={handleInputChange}
          />

          <Divider height="1rem" />

          <LinksContainer>
            <Link to="/register">Create an account</Link>
          </LinksContainer>

          <Divider height="3.0rem" />

          <Button
            color="secondary"
            size="large"
            variant="contained"
            fullWidth
            type="submit"
          >
            Log in
          </Button>
        </form>
      </MainContainer>
    </PageContent>
  );
}
