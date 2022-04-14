import React from "react";
import styled from "styled-components";

const TeamPage = () => {
  const TEAM = [
    {
      name: "John Doe",
      position: "CEO",
      image: "https://unsplash.it/360?1",
    },
    {
      name: "John Doe",
      position: "CEO",
      image: "https://unsplash.it/360?2",
    },
    {
      name: "John Doe",
      position: "CEO",
      image: "https://unsplash.it/360?3",
    },
    {
      name: "John Doe",
      position: "CEO",
      image: "https://unsplash.it/360?4",
    },
    {
      name: "John Doe",
      position: "CEO",
      image: "https://unsplash.it/360?5",
    },
    {
      name: "John Doe",
      position: "CEO",
      image: "https://unsplash.it/360?6",
    },
    {
      name: "John Doe",
      position: "CEO",
      image: "https://unsplash.it/360?7",
    },
  ];

  return (
    <TeamPageContainer>
      <TeamPageTitle>
        <h1>Team</h1>
        <h3>lorem ipsum dolor</h3>
      </TeamPageTitle>

      <TeamContainer>
        {TEAM.map((member) => (
          <TeamMember>
            <img src={member.image} alt="" />
            <MemberDescription>
              <h4>{member.name}</h4>
              <h5>{member.position}</h5>
            </MemberDescription>
          </TeamMember>
        ))}
      </TeamContainer>
    </TeamPageContainer>
  );
};

const TeamPageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const TeamPageTitle = styled.div`
  position: relative;
  margin: 10rem 0;
  text-align: center;

  h1 {
    font-size: 4rem;
    font-weight: 600;
    justify-content: center;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: grey;
  }
`;

const TeamContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* flex-wrap: wrap; */
  gap: 1rem;
`;

const TeamMember = styled.div`
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    object-position: center;
  }

  &:hover {
    div {
      transform: translateY(0);
      background-color: rgba(0, 0, 0, 1);
    }
  }
`;

const MemberDescription = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 30%,
    rgba(255, 255, 255, 0) 100%
  );
  text-align: center;
  transform: translateY(40%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
  transition: transform 0.3s ease-out;
  h4 {
    font-size: 2rem;
    font-weight: 600;
  }

  h5 {
    font-size: 1.5rem;
    color: grey;
  }
`;

export default TeamPage;
