import constants from "./app.constants";
import * as appActions from "./app.action";

const initalstate = {
  data:[]
};

export default function reducer(state=initalstate, action){
  switch (action.type) {
    
    case 'DATADISPATCH':
    return (Object.assign({}, state, {data: action.data}))
   
    default:
      return state
  }
}

export {initalstate};