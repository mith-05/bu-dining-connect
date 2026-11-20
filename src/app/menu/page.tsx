"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import { menus } from "@/data/menus";
import DishRating from "@/components/DishRating";

// This page displays the weekly dining menus for BU dining halls.
// Students can select a dining hall, day, and meal to view available dishes.

// Style the main page container
const Container = styled.main`
    min-height: 100vh;
    background-color: #f5f5f5;
    padding: 50px 30px;
    color: #222222;
`;

// Style the page heading
const Heading = styled.h1`
    color: #cc0000;
    text-align: center;
    font-size: 36px;
    margin-bottom: 30px;
`;

// Arrange the selection controls horizontally
const Filters = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 40px;
`;

// Group each label with its dropdown menu
const FilterGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

// Style the dropdown menus
const Dropdown = styled.select`
    padding: 12px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    font-size: 16px;
    background-color: white;
    color: #222222;
    min-width: 180px;
`;

// Arrange the dishes in a responsive grid
const MenuGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;

    // Display one card per row on smaller screens
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

// Style each individual dish card
const DishCard = styled.div`
    background-color: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// Style the name of each dish
const DishName = styled.h2`
    color: #cc0000;
    font-size: 22px;
    margin-bottom: 10px;
`;

// Style the message shown when no menu is available
const Message = styled.p`
    text-align: center;
    font-size: 18px;
`;

// This component handles the menu selections and displays matching dishes
function MenuContent() {

    // Read the query parameters from the current URL
    const searchParams = useSearchParams();

    // Get the dining hall selected on the homepage
    const hallFromURL = searchParams.get("hall");

    // Store the valid dining hall IDs
    const validHalls = ["marciano", "warren", "west", "fenway"];

    // Use the dining hall from the URL if valid,
    // otherwise default to Marciano Commons
    const initialHall =
        hallFromURL && validHalls.includes(hallFromURL)
            ? hallFromURL
            : "marciano";

    // Store the currently selected dining hall
    const [hall, setHall] = useState(initialHall);

    // Store the currently selected day
    const [day, setDay] = useState("Monday");

    // Store the currently selected meal
    const [meal, setMeal] = useState("Lunch");

    // Find the menu matching the student's selections
    const selectedMenu = menus.find(
        (menu) =>
            menu.hall === hall &&
            menu.day === day &&
            menu.meal === meal
    );

    return (
        <Container>
            <Heading>Weekly Dining Menus</Heading>

            {/* Allow students to select a dining hall, day, and meal */}
            <Filters>

                {/* Dining hall selection */}
                <FilterGroup>
                    <label htmlFor="hall">Dining Hall</label>
                    <Dropdown
                        id="hall"
                        value={hall}
                        onChange={(e) => setHall(e.target.value)}
                    >
                        <option value="marciano">Marciano Commons</option>
                        <option value="warren">Warren Towers</option>
                        <option value="west">West Campus</option>
                        <option value="fenway">Fenway Dining Hall</option>
                    </Dropdown>
                </FilterGroup>

                {/* Day selection */}
                <FilterGroup>
                    <label htmlFor="day">Day</label>
                    <Dropdown
                        id="day"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    >
                        {[
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                            "Sunday"
                        ].map((currentDay) => (
                            <option key={currentDay} value={currentDay}>
                                {currentDay}
                            </option>
                        ))}
                    </Dropdown>
                </FilterGroup>

                {/* Meal selection */}
                <FilterGroup>
                    <label htmlFor="meal">Meal</label>
                    <Dropdown
                        id="meal"
                        value={meal}
                        onChange={(e) => setMeal(e.target.value)}
                    >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                    </Dropdown>
                </FilterGroup>

            </Filters>

            {/* Display the dishes if a matching menu exists */}
            {selectedMenu ? (
                <MenuGrid>
                    {selectedMenu.dishes.map((dish) => (
                        <DishCard key={dish.id}>

                            {/* Display the dish name */}
                            <DishName>{dish.name}</DishName>

                            {/* Display whether the dish is vegetarian */}
                            <p>
                                {dish.vegetarian
                                    ? "Vegetarian"
                                    : "Non-Vegetarian"}
                            </p>

                            {/* Allow the student to rate this individual dish */}
                            <DishRating dishId={dish.id} />

                        </DishCard>
                    ))}
                </MenuGrid>
            ) : (
                // Display a message if no matching menu exists
                <Message>
                    No menu available for this selection.
                </Message>
            )}
        </Container>
    );
}

// Export the menu page with a Suspense boundary.
// Suspense allows Next.js to handle the URL search parameters
// while the menu component is loading.
export default function MenuPage() {
    return (
        <Suspense fallback={<p>Loading dining menu...</p>}>
            <MenuContent />
        </Suspense>
    );
}
