import { GET_TEAMS, GET_DETAIL } from "../actions/index";

const initialState = {
  teams: [],
  detail: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TEAMS:
      const tea = action.payload.data.teams;
      return {
        ...state,
        teams: tea,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
}
