
import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

const initialState = {
  ingredients:   [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Cheese', 30)
  ]
}

export function shoppingListReducer(state = initialState, action:ShoppingListActions.ShoppingListActions)
{
  switch(action.type)
  {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        //spread operator
        ...state, ingredients:[...state.ingredients, action.payload]
      }
    default:
      return state;
  }
}