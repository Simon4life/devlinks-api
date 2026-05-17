const links_reducer = (state, action) => {

  if(action.type === "ADD_LINK") {
    return {...state, formLinksArr: [...state.formLinksArr, { _id: state.formLinksArr.length + 1, link: "", platform: "Github"}]}
  }
  
  if(action.type ===  "REMOVE_FORM_LINK_ROW") {
    const newFormLinksArr = state.formLinksArr.filter(item => item._id !== action.payload);
    return {...state, formLinksArr: newFormLinksArr,}
  }

  if(action.type === "GET_LINKS") {
    if(action.payload.length < 1) {
      return {...state}
    }else {

      return {...state, formLinksArr: action.payload};
    }
  }

  if(action.type === "HANDLE_FORM_CHANGE") {
    const newFormLinksArr = state.formLinksArr.map((item) => {
      if (item._id === action.payload._id) {
        const { _id, ...rest } = action.payload;
        if (rest.platform) {
          const platform = rest.platform;
          item = { ...item, platform };
        } else {
          const link = rest.link;
          item = { ...item, link };
        }
      }
      return item;
    });
    return {...state, formLinksArr: newFormLinksArr}
  }
  if(action.type === "CREATE_LINK") {
    return {...state, formLinksArr: action.payload}
  }
}

export default links_reducer;

