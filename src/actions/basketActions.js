import types from './types';

export const fetchItems = () => dispatch => {

		dispatch({
			type: types.FETCH_ITEMS
		})
};

export const AddItem = data => dispatch => {
    dispatch({
        type: types.ADD_ITEM,
        data
    })
};

export const DeleteItem = data => dispatch => {

    dispatch({
        type: types.DELETE_ITEM,
        data
    })
};

export const UpdateItem = data => dispatch => {

    dispatch({
        type: types.UPDATE_ITEM,
        data
    })
};

export const UpdateItems = flag => dispatch => {

    dispatch({
        type: types.UPDATE_ITEMS,
        flag
    })
};