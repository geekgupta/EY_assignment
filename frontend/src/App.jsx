import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Bar } from 'react-chartjs-2';
import { Route, Router, Routes , } from 'react-router';
import  SearchCity from './searchcity' ; 



function App() {
  return (
    <>
    <SearchCity/>
    </>
  );
}

export default App
