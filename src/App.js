import { Body } from "./Pages/Body";
// import { Footer } from "./Components/Footer";
// import { Nav } from "./Components/Nav";
import { Request } from "./Pages/Request";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VideoPage } from "./Pages/VideoPage";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Home } from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Body />} />
          <Route exact path="/request" element={<Request />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home/:id" element={<VideoPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
