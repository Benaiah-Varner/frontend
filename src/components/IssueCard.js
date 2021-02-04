import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

function IssueCard({ issue }) {
  const { push } = useHistory();

  return (
    <StyledIssueCard onClick={() => push(`/issues/${issue.id}`)}>
      {/* <IssueCardGlobal /> */}
      <h3>{issue.title}</h3>
      <hr />
      <p>{issue.description}</p>
    </StyledIssueCard>
  );
}

export default IssueCard;

// const IssueCardGlobal = createGlobalStyle`
//   background-color: 28A745;
// `;

const StyledIssueCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  background-color: #28a745;
  width: 92%;
  box-shadow: 
    /* top */ rgba(0, 0, 0, 0.2) 0px -6px 10px,
    /* right */ rgba(0, 0, 0, 0.2) 6px 0px 10px,
    /* bottom */ rgba(0, 0, 0, 0.2) 0px 6px 10px,
    /* left */ rgba(0, 0, 0, 0.2) -6px 0px 10px;
  border-radius: 2px;
  margin: 2% 0;

  h3 {
    margin-left: 3%;
    padding: 2%;
  }
  hr {
    width: 95%;
    margin: 0 auto;
    background-color: rgb(51, 51, 51);
    height: 5px;
    border: 0;
  }
  p {
    padding: 2%;
  }

  :hover {
    transition: 0.4s ease-in-out;
    box-shadow: 
      /* top */ rgba(0, 0, 0, 0.5) 0px -6px 20px,
      /* right */ rgba(0, 0, 0, 0.5) 6px 0px 20px,
      /* bottom */ rgba(0, 0, 0, 0.5) 0px 6px 20px,
      /* left */ rgba(0, 0, 0, 0.5) -6px 0px 20px;
  }
`;
