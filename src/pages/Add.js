import React from 'react'
import AddHolder from '../components/AddForm';

function Add({ articleData, onUpdate }) {
  return (
    <>
      <AddHolder articleData={articleData} onUpdate={onUpdate}/>
    </>
  );
}

export default Add