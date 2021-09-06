/* eslint-disable prettier/prettier */
const initialState = {
    items: [],
};

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEND_NAME':
            return {
                items: [...state.items, action.data],
            };
        case 'SEND_EMAIL':
            return {
                items: [...state.items, action.data],
            };
        case 'SEND_DATE':
            return {
                items: [...state.items, action.data],
            };
        case 'SEND_ADDRESS':
            return {
                items: [...state.items, action.data],
            };
        default:
            return state;
    }
}
