
/*
This file stores sample dining hall menu data.
We will use this data to display meals for different
dining halls, days, and meal periods.
*/

// Define the structure of an individual dish
export interface Dish {
    id: number;
    name: string;
    vegetarian: boolean;
}

// Define the structure of a dining hall menu entry
export interface Menu {
    hall: string;
    day: string;
    meal: string;
    dishes: Dish[];
}

// Store sample menu information in an array
export const menus: Menu[] = [
    {
        hall: "marciano",
        day: "Monday",
        meal: "Breakfast",
        dishes: [
            { id: 1, name: "Scrambled Eggs", vegetarian: true },
            { id: 2, name: "French Toast", vegetarian: true },
            { id: 3, name: "Turkey Sausage", vegetarian: false }
        ]
    },
    {
        hall: "marciano",
        day: "Monday",
        meal: "Lunch",
        dishes: [
            { id: 4, name: "Grilled Chicken", vegetarian: false },
            { id: 5, name: "Pasta Primavera", vegetarian: true },
            { id: 6, name: "Garden Salad", vegetarian: true }
        ]
    },
    {
        hall: "marciano",
        day: "Monday",
        meal: "Dinner",
        dishes: [
            { id: 7, name: "Baked Salmon", vegetarian: false },
            { id: 8, name: "Roasted Vegetables", vegetarian: true },
            { id: 9, name: "Rice Pilaf", vegetarian: true }
        ]
    },
    {
        hall: "warren",
        day: "Monday",
        meal: "Lunch",
        dishes: [
            { id: 10, name: "Chicken Parmesan", vegetarian: false },
            { id: 11, name: "Vegetable Stir Fry", vegetarian: true }
        ]
    },
    {
        hall: "west",
        day: "Monday",
        meal: "Lunch",
        dishes: [
            { id: 12, name: "Beef Tacos", vegetarian: false },
            { id: 13, name: "Black Bean Burrito", vegetarian: true }
        ]
    },
    {
        hall: "fenway",
        day: "Monday",
        meal: "Lunch",
        dishes: [
            { id: 14, name: "Chicken Alfredo", vegetarian: false },
            { id: 15, name: "Vegetable Lasagna", vegetarian: true }
        ]
    }
];
