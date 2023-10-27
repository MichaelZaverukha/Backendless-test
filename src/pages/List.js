import React from 'react'
import Heading from '../components/Heading'
import ArticleList from '../components/ArticleList'
function List({articleData, updatedData}) {
  return (
    <>
      <Heading />
      <ArticleList articleData={articleData} updatedData={updatedData}/>
    </>
  )
}

export default List