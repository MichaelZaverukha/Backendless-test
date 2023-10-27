import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditForm({ articleData, onUpdate }) {
   const navigate = useNavigate();
   const { id } = useParams();
   const updatedArticle  = articleData.find(el => el.id === parseInt(id));
   const [formData, setFormData] = useState({
      title: updatedArticle.title,
      description: updatedArticle.description,
      author: updatedArticle.author,
      date: updatedArticle.date,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Данные отправлены:", formData);
    
      const updatedArticleData = articleData.map(item => {
        if (item.id === updatedArticle.id) {
          return {
            id: item.id,
            title: formData.title,
            description: formData.description,
            author: formData.author,
            date: formData.date,
          };
        }
        return item ;
      });
      localStorage.setItem('articleData', JSON.stringify(updatedArticleData));
    
      onUpdate(updatedArticleData);
      navigate('/insightList');
    };

   if (!updatedArticle) {
      return <div>Article not found</div>;
   }

    return (
      <div className='edit'>
        <h2 className='title'>Edit Article</h2>
        <form onSubmit={handleSubmit}>
          <div className='edit__title'>
            <label className='edit__label'>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className='edit__input'
            />
          </div>
          <div className='edit__description'>
            <label className='edit__label'>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className='edit__textarea'
            />
          </div>
          <div className='edit__author'>
            <label className='edit__label'>Author:</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className='edit__input'
            />
          </div>
          <div className='edit__data'>
            <label className='edit__label'>Date:</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className='edit__input'
            />
          </div>
          <Link to={'/insightList'} className='edit__button'>On Home Page</Link>
          <Link
          onClick={handleSubmit} 
          className='edit__button'>Save</Link>
        </form>
      </div>
    );
}

export default EditForm