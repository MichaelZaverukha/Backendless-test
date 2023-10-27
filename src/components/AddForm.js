import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AddForm({ articleData, onUpdate }) {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
     title: '',
     description: '',
     author: '',
     date: '',
   })
 
   const handleChange = (e) => {
     const {name, value} = e.target;
     setFormData({
       ...formData,
       [name]: value,
     })
   }
 
   const handleSubmit = (e) => {
     e.preventDefault();
     if (!formData.title || !formData.description || !formData.author || !formData.date) {
       alert('Please fill out all fields');
       return;
     }
     const newArticle = {
       id: articleData.length + 1,
       title: formData.title,
       description: formData.description,
       author: formData.author,
       data: formData.date,
     }
     const updatedArticleData = [...articleData, newArticle];
     onUpdate(updatedArticleData);
 
     localStorage.setItem('articleData', JSON.stringify(updatedArticleData));
 
     setFormData({
       title: '',
       description: '',
       author: '',
       date: '',
     });
     navigate('/');
   };
 
   return (
    <div className='add'>
      <h2 className='title'>Add Article</h2>
      <form onSubmit={handleSubmit}>
         <div className='add__title'>
           <label className='add__label'>Title:</label>
           <input
             type="text"
             name="title"
             value={formData.title}
             onChange={handleChange}
             className='add__input'
           />
         </div>
         <div className='add__description'>
           <label className='add__label'>Description:</label>
           <textarea
             name="description"
             value={formData.description}
             onChange={handleChange}
             className='add__textarea'
           />
         </div>
         <div className='add__author'>
           <label className='add__label'>Author:</label>
           <input
             type="text"
             name="author"
             value={formData.author}
             onChange={handleChange}
             className='add__input'
           />
         </div>
         <div className='add__data'>
           <label className='add__label'>Date:</label>
           <input
             type="text"
             name="date"
             value={formData.date}
             onChange={handleChange}
             className='add__input'
           />
         </div>
         <Link to={'/insightList'} className='add__button'>On Home Page</Link>
         <Link onClick={handleSubmit} className='add__button'>Save</Link>
      </form>
    </div>
   );
}

export default AddForm