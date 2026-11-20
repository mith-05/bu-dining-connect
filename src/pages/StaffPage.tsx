

import styled from "styled-components";

// Author: [Your Name]
// This page will display student feedback and requests for dining staff.

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

// Display the staff dashboard
export default function StaffPage() {
    return (
        <Container>
            <Heading>Dining Staff Dashboard</Heading>
            <p>Review meal ratings, voting results, and organization requests.</p>
        </Container>
    );
}
