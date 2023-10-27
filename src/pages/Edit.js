import React from 'react'
import EditForm from '../components/EditForm';

function Edit({ articleData, onUpdate }) {
  return (
    <>
      <EditForm articleData={articleData} onUpdate={onUpdate}/>
    </>
  );
}
  
  export default Edit;