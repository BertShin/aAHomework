import merge from 'lodash/merge'


const initialState = {
  baseCurrency: "Please select",
  rates: {}
};

const reducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case 'SWITCH_CURRENCY':
      let newState = merge({}, state);
      newState.rates = action.rates;
      newState.baseCurrency = action.baseCurrency;
      return newState;
    default:
      return state;
  }
};



export default reducer;
