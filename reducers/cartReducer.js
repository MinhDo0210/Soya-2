/* eslint-disable prettier/prettier */
const initialState = {
    products: [],
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CART':
            const isExist = state.products?.find(e => e._id === action.data?._id);
            const productList = isExist
                ? state.products?.map(e => {
                    if (e._id === action.data._id){
                        return { ...e, quantity: e.quantity + 1};
                    }
                    else {return e;}
                })
                : [...state.products, action.data];
            return {
                products: productList,
            };
        case 'QUANTITY_UP':
            return {
                products: state.products.map(e => e._id === action.data._id
                            ? { ...e, quantity: e.quantity + 1}
                            : e
                        ),
            };
        case 'QUANTITY_DOWN':
            return {
                products: state.products.map(e => e._id === action.data._id
                            ? { ...e, quantity: e.quantity !== 1 ? e.quantity - 1 : 1}
                            : e
                        ),
            };
        case 'REMOVE_ITEM':
            return {
                products: state.products?.filter(e => e?._id !== action.data?._id),
            };
        case 'REMOVE_ALL':
            return {
                ...state,
                products: state.products.map(e=>
                e.selected
                    ? {...e, selected: false, quantity: 1}
                    : e,
                ),
            };
        default:
            return state;
    }
}
