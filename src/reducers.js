const initialState = {
  row0: false,
  row1: false
};

export const rowReducer = (state = initialState, action ) =>{
    switch(action.type){
        case 'UPDATE_VALUES':{
          console.log(action)
            return{
              ...state,
              [action.keyValue]: true
            }
        }
      default: return state
    }
    return state;
}