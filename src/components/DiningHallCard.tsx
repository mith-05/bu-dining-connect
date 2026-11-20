

import { Link } from "react-router";
import styled from "styled-components";

// Author: [Your Name]
// Displays a clickable dining hall card with an image,
// name, and description.

// Define the props received by each card
interface DiningHallProps {
    name: string;
    description: string;
    hallId: string;
    image: string;
}

// Style the clickable dining hall card
const Card = styled(Link)`
    display: block;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none;
    color: #222222;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5px);
    }
`;

// Style the image to fill the width of the card
const HallImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

// Add spacing around the text below the image
const CardContent = styled.div`
    padding: 25px;
`;

// Style the dining hall name
const CardTitle = styled.h2`
    color: #cc0000;
    font-size: 24px;
    margin-bottom: 12px;
`;

// Style the dining hall description
const CardDescription = styled.p`
    font-size: 16px;
    line-height: 1.5;
`;

// Display the image and information using props
export default function DiningHallCard({
                                           name,
                                           description,
                                           hallId,
                                           image,
                                       }: DiningHallProps) {
    return (
        <Card to={`/menu?hall=${hallId}`}>

            {/* Display the photograph of the selected dining hall */}
            <HallImage
                src={image}
                alt={`${name} dining hall`}
                width={400}
                height={200}
            />

            {/* Display the dining hall name and description */}
            <CardContent>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardContent>

        </Card>
    );
}
