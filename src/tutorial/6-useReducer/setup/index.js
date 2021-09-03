import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function


import {reducer} from './reducer'

const Index = () => {
  
 

  const defaultState = {
    people: [],
    isModalOpen:false,
    modalContent: 'hello world'

  }

  const [name,setName] = useState('');
  const [state,dispatch] = useReducer(reducer,defaultState);
    

  const closeModal = () => {
    dispatch({type:'CLOSE_MODEL'});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      const newItem = {id: new Date().getTime().toString(),name}
      dispatch({type:'ADD_ITEM', payload:newItem});
      setName('');
    }else{
      dispatch({type:'NO_VALUE'});
      
  }
}
  
  return <>
  
  {state.isModalOpen && <Modal closeModal = {closeModal} modelContent={state.modalContent}/>}
  <form onSubmit={handleSubmit} className='form'>
    <div>

      <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
    </div>

    <button type="submit">Add</button>

  </form>
  
  {
    state.people.map((person) => {
      return(
        <div className='item' key={person.id}>
          <h3>{person.name}</h3>
          <button className='btn' onClick={() => dispatch({type:'REMOVE_ITEM', payload:person.id})}>remove</button>
        </div>
      )
    })
  }

  </>;
};

export default Index;
