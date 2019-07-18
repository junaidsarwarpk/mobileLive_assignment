import types from '../actions/types';

const initialState = {
	items: [
        {id: 1, text: 'Lays Salted', isActive: false, isDefault: true},
        {id: 2, text: 'Pepsi Black', isActive: true, isDefault: true},
    ],
	newItem: {}
};
export default (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_ITEMS:
			return {
				...state,
				items: state.items
			};
		case types.DELETE_ITEM:
			return {
				...state,
				items: state.items.filter(_i => _i.id !== action.data.id)
			};
        case types.ADD_ITEM:
			return {
				...state,
				items: [
                    action.data,
                    ...state.items
					
                ]
            };
            
        case types.UPDATE_ITEM:
			return {
				...state,
				items: state.items.map(_i => _i.id === action.data.id ? action.data : _i)
            };

        case types.UPDATE_ITEMS:
			return {
				...state,
				items: state.items.map(_i => ({..._i, isActive: action.flag}))
			};

		default:
			return state;
	}
};
