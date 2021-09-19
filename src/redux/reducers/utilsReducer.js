const init = {
    inputmodal:false
};

export const utilsReducer = (state = init, action) => {
  switch (action.type) {
    case "OPENMODAL":
      return {...state,inputmodal:true};
      case "CLOSEMODAL":
        return {...state,inputmodal:false};
  

    default:
      return state;
  }
};
