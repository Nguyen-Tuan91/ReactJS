import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment= (dishId, comment, rating, author) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        comment: comment,
        author: author
    }
});

export const fetchDishes= () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    },2000);
}

export const dishesLoading= () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed= (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes= (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
