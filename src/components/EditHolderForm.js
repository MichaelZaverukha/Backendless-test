import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function EditHolderForm() {
   const [articleId, setArticleId] = useState('')
  return (
   <div className='edit__holder'>
      <div className='edit__holder-wrapper'>
         <h2 className='edit__holder-title'>This page is a transitional page for editing articles, if you want to edit an article, type the article number in the box below.</h2>
         <label className='edit__holder-label'>
         Article ID:
         <input
            type="text"
            value={articleId}
            onChange={(e) => setArticleId(e.target.value)}
            className='edit__holder-input'
         />
         </label>
         <Link to={'/insightList'} className='edit__holder-button'>On Home Page</Link>
         <Link to={`/insightEdit/${articleId}`} className='edit__holder-button'>Edit Article</Link>
      </div>
   </div>
  )
}

export default EditHolderForm