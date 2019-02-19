export * from './actions'

const initialState={
  feed:[1,11,1],
  error:null
}


const session=(state=initialState,action)=>{
 switch (action.type) {
  case 'LOAD-DATA':return {...state,feed:action.payload}
  break;
  case 'ERROR':return {...state,error:action.payload,feed:[2,2,2,2]}
  break;
  default: return state;
  }
}

export default session
