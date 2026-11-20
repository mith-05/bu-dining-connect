

import { useState } from "react";
import styled from "styled-components";

// Author:
// This component allows students to rate a dish
// from 1 to 5 stars.

// Define the information received from the parent component
interface DishRatingProps {
    dishId: number;
}

// Arrange the rating stars horizontally
const StarContainer = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 15px;
`;

// Style each clickable star
const StarButton = styled.button<{ $selected: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 30px;
    color: ${(props) =>
    props.$selected ? "#e7a400" : "#cccccc"};

    &:hover {
        transform: scale(1.1);
    }
`;

// Style the message below the stars
const RatingText = styled.p`
    font-size: 14px;
    margin-top: 10px;
    color: #555555;
`;

// Display five interactive stars for an individual dish
export default function DishRating({ dishId }: DishRatingProps) {

    // Store the rating selected by the student
    // Zero means the student has not rated the dish yet
    const storageKey = `bu-dining-connect:rating:${dishId}`;
    const [rating, setRating] = useState(() => {
        try {
            const saved = Number(localStorage.getItem(storageKey));
            return Number.isInteger(saved) && saved >= 1 && saved <= 5 ? saved : 0;
        } catch {
            return 0;
        }
    });

    // Update the rating when a student clicks a star
    function handleRating(stars: number) {
        setRating(stars);

        try {
            localStorage.setItem(storageKey, String(stars));
        } catch {
            // Ratings still work for this visit when browser storage is unavailable.
        }
    }

    return (
        <div>
            {/* Create five clickable stars using map() */}
            <StarContainer>
                {[1, 2, 3, 4, 5].map((star) => (
                    <StarButton
                        key={star}
                        type="button"
                        $selected={star <= rating}
                        onClick={() => handleRating(star)}
                        aria-label={`Rate ${star} stars`}
                        aria-pressed={star === rating}
                    >
                        ★
                    </StarButton>
                ))}
            </StarContainer>

            {/* Display the student's selected rating */}
            <RatingText>
                {rating === 0
                    ? "Rate this dish"
                    : `Your rating: ${rating}/5`}
            </RatingText>
        </div>
    );
}
