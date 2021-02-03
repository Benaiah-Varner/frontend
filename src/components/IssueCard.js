import React from 'react';
import { createGlobalStyle } from 'styled-components';

import styled from 'styled-components';

function IssueCard({ issue }) {
  const handleClick = () => {
    //redirect to Issue.js to show individual card
  };

  return (
    <StyledIssueCard onClick={handleClick}>
      {/* <IssueCardGlobal /> */}
      <h3>DummyTitle</h3>
      {/* <h3>{issue.title}</h3> */}
      <p>
        Solve challenges Action Against Hunger citizenry Martin Luther King Jr.
        Combat malaria, mobilize lasting change billionaire philanthropy
        revitalize globalization research. Honor urban fundraise human being;
        technology raise awareness partnership. Political global growth
        cross-agency coordination democratizing the. Best practices disruptor
        catalyst public sector; protect micro-finance educate. Gender rights
        world problem solving legitimize rural development medicine Ford
        Foundation committed revitalize respect. Affordable health care,
        humanitarian.
      </p>
      {/* <p>{issue.description}</p> */}
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
  /* background-color: #333333; */

  h3 {
    border-bottom: 2px solid slategray;
    margin-bottom: 1%;
    padding: 3%;
  }
`;