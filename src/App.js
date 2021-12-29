import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import UserProfilePage from './pages/UserProfile';


function App() {

  return (
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/user-profile" element={<UserProfilePage />}></Route>
      </Routes>
  );
}

export default App;
