import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  

  const getUser = () => {
    fetch(url).
    then((res) => {
      if(res.status >= 200 && res.status <= 299) return res.json();
      else{
        setIsLoading(false);
        setIsError(true);
      }
    })
    .then(user => {
      const {login} = user;
      setUser(login);
      setIsLoading(false);
    })
    .catch((error) => console.log(error));
      
  }

  useEffect(()=>{
    getUser();
  },[])




  if(isLoading) return <div><h1>it's loading...</h1></div>
  
  
  if(isError) return <div><h2>error...</h2></div>


  return (
    <div>
      <h1>
        {user}
      </h1>
    </div>
  )
};

export default MultipleReturns;
