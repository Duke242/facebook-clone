import LoginPage from './Components/LoginPage';
import './App.css';
import { Routes, Route } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from './Components/Dashboard';
import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from './PrivateRoutes';
import FriendsPage from './Components/FriendsPage/FriendsPage';
import GroupsPage from './Components/GroupsPage/GroupsPage';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/friends' element={<FriendsPage />} />
            <Route path='/groups' element={<GroupsPage />} />
          </Route>
          <Route exact path='/' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}


export default App;
