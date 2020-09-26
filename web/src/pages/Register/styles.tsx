import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

import colors from "../../assets/styles/colors";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.header`
  text-transform: uppercase;

  > p:first-child {
    font-size: 1.5em;
    color: white;
  }

  > p:last-child {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    color: ${colors.secondary};
  }
`;

export const Content = styled.main`
  width: 75%;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Link = styled((props) => <RouterLink {...props} />)`
  color: ${colors.secondary};
`;
