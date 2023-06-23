import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./route/Signup";
import Login from "./route/Login";
import Home from "./route/Home";
import Search from "./route/Search";
import MyPage from "./route/MyPage";
import Detail from "./route/Detail";
import Profile from "./route/Profile";

function App() {
  return (
    <div className="flex h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/detail/:id/*" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
