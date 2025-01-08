import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import UpComingPage from "./pages/UpComingPage";
import WatchListPage from "./pages/WatchListPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import useAnimeData from "./hooks/useAnimeData";

function App() {
  const { popularAnime, loading, searchAnime, upComingAnime, onGoing, recommendationsAnime, topCharacters } = useAnimeData();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem("isLoggedIn", status ? "true" : "false");
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? (
            <HomePage 
              onLogOut={handleLogOut} 
              popularAnime={popularAnime} 
              loading={loading}
              searchAnime={searchAnime} 
              upComingAnime={upComingAnime}
              onGoing={onGoing}
              recommendationsAnime={recommendationsAnime} 
              topCharacters={topCharacters}
            />
          ) : (
            <Navigate to="/login" />
          )}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={isLoggedIn ? (
            <HomePage 
              onLogOut={handleLogOut} 
              popularAnime={popularAnime} 
              loading={loading}
              searchAnime={searchAnime} 
              upComingAnime={upComingAnime}
              onGoing={onGoing}
              recommendationsAnime={recommendationsAnime} 
              topCharacters={topCharacters}
            />
          ) : (
            <Navigate to="/login" />
          )}
        />
        <Route path="/popular" element={isLoggedIn ? <PopularPage popularAnime={popularAnime}/> : <Navigate to="/login" />} />
        <Route path="/upcoming" element={isLoggedIn ? <UpComingPage /> : <Navigate to="/login" />} />
        <Route path="/watchlist" element={isLoggedIn ? <WatchListPage /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
