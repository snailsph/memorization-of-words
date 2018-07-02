import {SHOW_MODAL} from '../actions/ActionTypes';

const showModal = (state = false,action) => {
    switch (action.type) {
        case SHOW_MODAL: 
            return action.visible;
        default: 
            return state;
    }
}

export default showModal;