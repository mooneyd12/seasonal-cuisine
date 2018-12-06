
const dishes = [
    {
        country: "Bulgaria",
        title: "Boiled rice",

        course: "main",
        dietaryrestrictions: {

            gluten: true,
            vegetarian: true,
            vegan: true,
            none: true
        },
        recipe: "let's cook",
        time: "30min",
        image: "/img"
    },
    {
        title: "Roasted Duck",
        country: "China",
        course: "main",
        dietaryrestrictions: {
            gluten: false,
            vegetarian: false,
            vegan: true,
            none: true
        },
        recipe: "let's cook",
        time: "30min",
        image: "/img"
    },
    {
        title: "Roasted pork",
        country: "China",
        course: "main",
        dietaryrestrictions: {
            gluten: true,
            vegetarian: false,
            vegan: true,
            none: true
        },
        recipe: "let's cook",
        time: "30min",
        image: "/img"
    },
    {
        title: "Vegetable rice",
        country: "China",
        course: "main",
        dietaryrestrictions: {
            gluten: false,
            vegetarian: true,
            vegan: true,
            none: true
        },
        recipe: "let's cook",
        time: "30min",
        image: "/img"
    },
    {
        title: "Sago pudding",
        country: "China",
        course: "desert",
        dietaryrestrictions: {
            gluten: false,
            vegetarian: true,
            vegan: false,
            none: true
        },
        recipe: "let's cook",
        time: "30min",
        image: "/img"
    },
    {
        title: "Cake",
        country: "Romania",
        course: "desert",
        dietaryrestrictions: {
            gluten: false,
            vegetarian: true,
            vegan: false,
            none: true
        },
        recipe: "let's cook",
        time: "30min",
        image: "/img"
    }
]
module.exports = dishes;