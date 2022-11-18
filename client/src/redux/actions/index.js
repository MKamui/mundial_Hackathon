import axios from "axios";
export const GET_TEAMS = "GET_TEAMS";
export const GET_DETAIL = "GET_DETAIL";

export function getTeams() {
  return async function (dispatch) {
    var info = await axios.get("http://localhost:3030/teams");
    console.log(info);
    return dispatch({
      type: GET_TEAMS,
      payload: info.data,
    });
  };
}

export function getDetail(id){
    return async function(dispatch){
        try{
            var json=await axios("http://localhost:3030/teams/"+id)
            return dispatch({
                type:GET_DETAIL,
                payload:json.data
            })
        }catch(err){
            console.log(err)
        }
    }
  };

