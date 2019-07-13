import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from '../actions/types';

const initialState = {
  contacts: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_CONTACTS:
      return{
        ...state,
        contacts: action.payload.sort( (a,b) => a.id < b.id)
      };

    case DELETE_CONTACT:
      return{
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload).sort( (a,b) => a.id < b.id)
      };

    case ADD_CONTACT:
        return{
          ...state,
          contacts: [...state.contacts, action.payload].sort( (a,b) => a.id < b.id)
        }

    default:
      return state;
  }
}