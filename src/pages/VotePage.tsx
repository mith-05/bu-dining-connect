

import styled from "styled-components";

// Author: [Your Name]
// This page will allow students to vote for upcoming menu items.

// Style the main content area
const Container = styled.main`
    padding: 60px;
    text-align: center;
    min-height: 100vh;
    background-color: #f5f5f5;
`;

// Style the page heading
const Heading = styled.h1`
    color: #cc0000;
    font-size: 36px;
`;

// Display the weekly voting page
export default function VotePage() {
    return (
        <Container>
            <Heading>Weekly Menu Voting</Heading>
            <p>Vote for the dishes you want to see next week!</p>
        </Container>
    );
}
