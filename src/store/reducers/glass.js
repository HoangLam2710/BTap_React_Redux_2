import { actionTypes } from "../actions/type";

const inititalState = {
    glassList: [
        {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./assets/img/v1.png",
            desc: "Light pink square lenses define these sunglasses, amother of pearl effect tip. ",
        },
        {
            id: 2,
            price: 50,
            name: "GUCCI G8759H",
            url: "./assets/img/v2.png",
            desc: "Light pink square lenses define these sunglasses, amother of pearl effect tip. ",
        },
        {
            id: 3,
            price: 30,
            name: "DIOR D6700HQ",
            url: "./assets/img/v3.png",
            desc: "Light pink square lenses define these sunglasses, amother of pearl effect tip. ",
        },
        {
            id: 4,
            price: 30,
            name: "DIOR D6005U",
            url: "./assets/img/v4.png",
            desc: "Light pink square lenses define these sunglasses, amother of pearl effect tip. ",
        },
        {
            id: 5,
            price: 30,
            name: "PRADA P8750",
            url: "./assets/img/v5.png",
            desc: "Light pink square lenses define these sunglasses, amother of pearl effect tip. ",
        },
        {
            id: 6,
            price: 30,
            name: "PRADA P9700",
            url: "./assets/img/v6.png",
            desc: "Light pink square lenses define these sunglasses, amother of pearl effect tip. ",
        },
        {
            id: 7,
            price: 30,
            name: "FENDI F8750",
            url: "./assets/img/v7.png",
            desc: "Light pink square lenses define these sunglasses, amother of pearl effect tip. ",
        },
        {
            id: 8,
            price: 30,
            name: "FENDI F8500",
            url: "./assets/img/v8.png",
            desc: "Light pink square lenses define these sunglasses, amother of pearl effect tip. ",
        },
        {
            id: 9,
            price: 30,
            name: "FENDI F4300",
            url: "./assets/img/v9.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
    ],
    selectGlass: null,
};

const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_GLASS:
            state.selectGlass = action.payload;
            return { ...state };
        default:
            return state;
    }
};

export default reducer;
