

import styled from "styled-components";

// Author: [Your Name]
// This page will allow student organizations to submit dining requests.

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

// Display the club requests page
export default function RequestsPage() {
    return (
        <Container>
            <Heading>Club & Organization Requests</Heading>
            <p>Submit dining requests for your upcoming events.</p>
        </Container>
    );
}
