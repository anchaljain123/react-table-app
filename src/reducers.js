export const rowReducer = (state = {}, action) => {
	switch (action.type) {
		case 'STORE_ROWS': {
			return { ...action.rows };
		}
		default:
			return state;
	}
	return state;
};
