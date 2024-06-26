import { Type } from "./actionType";

export const initialState = {
	basket: [],
	user:null
};

export const reducer = (state, action) => {
	switch (action.type) {
		case Type.ADD_TO_BASKET:
			// Check if the item exists
			const existingItem = state.basket.find(
				(item) => item.id === action.item.id
			);
			if (!existingItem) {
				// If item doesn't exist, add it to the basket with amount 1
				return {
					...state,
					basket: [...state.basket, { ...action.item, amount: 1 }],
				};
			} else {
				// If item exists, update the amount
				const updatedBasket = state.basket.map((item) =>
					item.id === action.item.id
						? { ...item, amount: item.amount + 1 }
						: item
				);
				// Return updated basket
				return {
					...state,
					basket: updatedBasket,
				};
			}

		case Type.REMOVE_FROM_BASKET:
			const index = state.basket.findIndex((item) => item.id === action.id);
			let newBasket = [...state.basket];

			if (index >= 0) {
				if (newBasket[index].amount > 1) {
					newBasket[index] = {
						...newBasket[index],
						amount: newBasket[index].amount - 1,
					};
				} else {
					newBasket.splice(index, 1);
				}
			}
			return {
				...state,
				basket: newBasket,
			};
		case Type.SET_USER:
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
};
