export const fetchFeed=()=>{
  return (dispatch)=>{
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
      console.warn(res.result);
    })
    .catch(err=>{
      dispatch({type:'ERROR' , payload:err})
      console.warn(err);
    })
  };
}
