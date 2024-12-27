import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import UpComingPage from "./pages/UpComingPage";
import WatchListPage from "./pages/WatchListPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Cek status login saat aplikasi pertama kali dimuat
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (status) => {
    if (status) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true"); // Simpan status login di localStorage
    } else {
      console.log("Login gagal");
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn"); // Hapus status login jika gagal
    }
  };

  const handleLogOut = ()=>{
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <HomePage onLogOut={handleLogOut}/> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={isLoggedIn ? <HomePage onLogOut={handleLogOut}/> : <Navigate to="/login" />} />
        <Route path="/popular" element={isLoggedIn ? <PopularPage /> : <Navigate to="/login" />} />
        <Route path="/upcoming" element={isLoggedIn ? <UpComingPage /> : <Navigate to="/login" />} />
        <Route path="/watchlist" element={isLoggedIn ? <WatchListPage /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
