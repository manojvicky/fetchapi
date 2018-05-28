
import constants from "./app.constants";

export function datadispatch(data){
  return {
    type: 'DATADISPATCH',
    data
  }
}