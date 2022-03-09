let initialReducer = {
    friends: [
        {id: 1},
        {id: 2},
        {id: 3},
    ]
};
let sideBarReducer = (state = initialReducer, action) => {
    return {...state};
}
export default sideBarReducer;