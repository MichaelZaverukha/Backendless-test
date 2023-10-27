import React, { useState, useEffect, Suspense } from 'react';
import List from '../src/pages/List';
import Edit from './pages/Edit';
import Add from './pages/Add';
import EditHolder from './pages/EditHolder';
import { articleData as initialData } from './data/ArticleData'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import tabsData from './data/tabs.json';

function App() {
  const [updatedData, setUpdatedData] = useState(null);
  const [articleData, setArticleData] = useState(initialData); 

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('articleData'));
    if (storedData) {
      setUpdatedData(storedData);
      setArticleData(storedData);
    }
  }, []);

  const handleUpdateData = (data) => {
    setUpdatedData(data);
    setArticleData(data);
    localStorage.setItem('articleData', JSON.stringify(data));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/${tabsData[0].id}`} />}
        />
        <Route
          index
          path={`/${tabsData[0].id}`}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <List articleData={articleData} updatedData={updatedData} onUpdateData={handleUpdateData} />
            </Suspense>
          }
        />
        <Route
          path={`/${tabsData[2].id}`}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Add articleData={articleData} onUpdate={handleUpdateData} />
            </Suspense>
          }
        />
        <Route
          path={`/${tabsData[1].id}`}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <EditHolder />
            </Suspense>
          }
        />
        <Route
          path={`/${tabsData[3].id}`}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Edit articleData={articleData} onUpdate={handleUpdateData} />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;