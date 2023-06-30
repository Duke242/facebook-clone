import LoginPage from './Components/LoginPage';
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from './Components/Dashboard';
import { BrowserRouter } from "react-router-dom";
import CreatePost from './Components/CreatePost';



const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element= {<LoginPage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="createPost" element={<CreatePost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>  
  );
}

export default App;
