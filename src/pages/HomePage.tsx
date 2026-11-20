

import styled from "styled-components";
import DiningHallCard from "@/components/DiningHallCard";

// This page introduces BU Dining Connect and allows students
// to select a dining hall to view its weekly menu.

// Style the main homepage container
const Container = styled.main`
    min-height: 100vh;
    background-color: #f5f5f5;
    padding: 60px 30px;
    text-align: center;
    color: #222222;
`;

// Style the main heading
const Heading = styled.h1`
    color: #2563eb;
    font-size: 48px;
    margin-bottom: 20px;
`;

// Style the slogan below the heading
const Description = styled.p`
    font-size: 20px;
    margin-bottom: 50px;
`;

// Arrange the dining hall cards in a responsive grid
// Arrange the four dining hall cards in a responsive grid
const HallGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    max-width: 1400px;
    margin: 0 auto;

    // Display two cards per row on medium screens
    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    // Display one card per row on smaller screens
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

// Display the homepage and three dining hall cards
export default function Home() {
    return (
        <Container>
            <Heading>BU Dining Connect</Heading>

            <Description>
                Eat Better. Vote Smarter. Waste Less.
            </Description>


            <HallGrid>
                {/* Marciano Commons dining hall */}
                <DiningHallCard
                    name="Marciano Commons"
                    description="Explore the weekly menu at Marciano Commons."
                    hallId="marciano"
                    image="/images/marciano.jpg"
                />

                {/* Warren Towers dining hall */}
                <DiningHallCard
                    name="Warren Towers"
                    description="Discover what is being served at Warren Towers."
                    hallId="warren"
                    image="/images/warren.jpeg"
                />

                {/* West Campus dining hall */}
                <DiningHallCard
                    name="West Campus"
                    description="Check out the latest meals at West Campus."
                    hallId="west"
                    image="/images/west.jpeg"
                />

                {/* Display the Fenway Dining Hall card */}
                <DiningHallCard
                    name="Fenway Dining Hall"
                    description="Explore the weekly menu at Fenway Dining Hall."
                    hallId="fenway"
                    image="/images/fenway.jpeg"
                />
            </HallGrid>

        </Container>
    );
}
