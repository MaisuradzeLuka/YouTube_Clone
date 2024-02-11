import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
//prettier-ignore
import { Navbar, Feed, VideoDetail, SearchFeed } from "./components";
import ChannelDetail from "./containers/ChannelDetail";

const app = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default app;
