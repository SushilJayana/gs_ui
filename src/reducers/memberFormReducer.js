let initialData = {
    showDialog: false,
    formData: {
        id: "",
        username: "",
        firstname: "",
        lastname: "",
        user_type: "",
        password: "",
        joined_date: ""
    }
}

const memberFormReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'SHOW':
            state.showDialog = true;
            return state;
        case 'HIDE':
            state.showDialog = false;
            return state;
        default:
            return state;

    }

}
export default memberFormReducer;