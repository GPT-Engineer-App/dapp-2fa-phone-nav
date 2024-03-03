import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Games from "./pages/Games.jsx";
import NftAuction from "./pages/NftAuction.jsx";
import GpsLocator from "./pages/GpsLocator.jsx";
import SocialChat from "./pages/SocialChat.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/play-games" element={<Games />} />
        <Route path="/nft-auction" element={<NftAuction />} />
        <Route path="/gps-locator" element={<GpsLocator />} />
        <Route path="/social" element={<SocialChat />} />
      </Routes>
    </Router>
  );
}

export default App;
