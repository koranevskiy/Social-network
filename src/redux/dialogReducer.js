const ADD_MESSAGE = 'ADD-MESSAGE';
let initialReducer = {
    messages: [
        {id: 1, message: 'How are u?'},
        {id: 2, message: 'Hi, I\'m ok'},
        {id: 3, message: 'What\'s about u?'},
        {id: 4, message: 'Fine, I have started writing my social network!'}
    ],

    dialogsData: [
        {name: 'Victor', id: 1},
        {name: 'Sasha', id: 2},
        {name: 'Egor', id: 3},
        {name: 'Alexander', id: 4},
        {name: 'Roman', id: 5},
        {name: 'Pavel', id: 6},
        {name: 'Alexandra', id: 7},

    ],

};
let dialogReducer = (state = initialReducer, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, {id: state.messages.length + 1, message: action.text}]};

        default:
               return state;
    }
};
export default dialogReducer;
export const addMessageActionCreator = (text) => ({type: ADD_MESSAGE, text});
