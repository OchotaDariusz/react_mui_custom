const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_TEXT':
      return {
        ...state,
        [action.field]: action.payload
      };
    default:
      return { ...state };
  }
};

export default formReducer;
