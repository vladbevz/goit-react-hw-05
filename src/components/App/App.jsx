import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
const Navigation = lazy(() => import('../Navigation/Navigation'))
const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'))
import './App.css'


export default function App() {
  

  return (
    <>
    <Navigation/>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>

    
    </>
   
  )
}


