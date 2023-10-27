import React from 'react'
import { Link } from 'react-router-dom'
function ArticleList({ articleData, updatedData }) {
   const dataToDisplay = updatedData || articleData; 
  return (
    <main className='main'>
      <div className='main__wrapper'>
         <ul className='main__list'>
            {dataToDisplay.map(el => (
               <li key={el.id} className='main__item'>
                  <h3 className='main__item-title'>{el.title}</h3>
                  <p className='main__item-decription'>{el.description}</p>
                  <p className='main__item-author'>{el.author}</p>
                  <p className='main__item-date'>{el.date}</p>
                  <Link 
                     to={`/insightEdit/${el.id}`} 
                     className='main__item-button'
                  >
                     Edit Article
                  </Link>
               </li>
            ))}
         </ul>
      </div>
    </main>
  )
}

export default ArticleList