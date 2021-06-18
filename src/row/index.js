import React from "react";
import { useLocation } from "react-router";
import { Header } from "../app/style";
import { Data, Title, Div, DivContainer, Img } from "./style";
const Row = () => {
  const location = useLocation();

  return (
    <>
      <Header>{location.state.name}</Header>
      <Div>
        <Title>Description:</Title>
        <Data>{location.state.description}</Data>
      </Div>
      <Div>
        <Title>Number of Stars:</Title>
        <Data>{location.state.stargazers_count}</Data>
      </Div>
      <Div>
        <Title>Number of Issues:</Title>
        <Data>{location.state.open_issues_count}</Data>
      </Div>
      <DivContainer>
        <Data>{location.state.html_url}</Data>
        <Data>
          <Img src={location.state.owner.avatar_url} />
        </Data>
      </DivContainer>
    </>
  );
};

export default Row;
