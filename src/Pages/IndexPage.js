import React from "react";
import Home from "../components/Home";
import Content from "../components/Content";
import styled from "styled-components";
const IndexPage = () => {
  const rpas = {
    title: "RPAS",
    subTitle:
      "lOREM iPSUM dOLOR SIT AMET CONSEQUAT ADIPISCING ELIT SED DO EIUSMOD",
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };

  return (
    <IndexPageContainer>
      <Home />
      <Content
        title={rpas.title}
        subTitle={rpas.subTitle}
        images={rpas.images}
      />
      <Content
        title={rpas.title}
        subTitle={rpas.subTitle}
        images={rpas.images}
      />
      <Content
        title={rpas.title}
        subTitle={rpas.subTitle}
        images={rpas.images}
      />
    </IndexPageContainer>
  );
};

const IndexPageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export default IndexPage;
