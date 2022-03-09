import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hello, this my first post', likeCount: 15},
                {id: 2, message: 'I\'m student yet(', likeCount: 19}
            ],
            messagePost: ''
        },
        dialogPage: {
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
            messageDialog: '',
        },
        sideBar: {
            friends: [
                {id: 1},
                {id: 2},
                {id: 3},
            ]
        }

    },
    _callSubscriber() {
        console.log(123);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._callSubscriber(this._state);

    }


};



export default store;


