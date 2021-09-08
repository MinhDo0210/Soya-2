/* eslint-disable prettier/prettier */
const initialState = {
    products: [],
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CART':
            return {
                products: [...state.products, action.data],
            };
        default:
            return state;
    }
}
