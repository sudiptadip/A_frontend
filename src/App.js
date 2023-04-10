import { Route, Routes } from "react-router-dom";
import Signin from "./components/auth/signin/Signin";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/signup/Signup";
import Posts from "./components/posts/Posts";
import Profile from "./components/profile/Profile";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/" element={<Posts/>}/>
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  );
}

export default App;
