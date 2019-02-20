export const fetchFeed=()=>{
  return (dispatch)=>{
    dispatch({type:'ENABLE-LOADING'})
    fetch('https://thecreatorco-beta-backend.herokuapp.com/api/v1/feed',{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => {
      return response.json();
    })
    .then(res=>{
      dispatch({type:'LOAD-DATA' , payload:res.result})
      dispatch({type:'DISABLE-LOADING'})
    })
    .catch(err=>{
      dispatch({type:'ERROR' , payload:err})
    })
  };
}
