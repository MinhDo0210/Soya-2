/* eslint-disable prettier/prettier */
const initialState = {
    items: [],
};

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case 'DETAIL_REST':
            return {
                items: [...state.items, action.data],
            };
        default:
            return state;
    }
}
