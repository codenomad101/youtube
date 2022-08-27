import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar, Feed, ChannelDetail, SearchFeed,VideoDetail} from "./components";
import {Box} from "@mui/material";

const App=()=> {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>
     <Navbar />
     <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/Channel/:id" element={<ChannelDetail />} />
        <Route path="/Video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
     </Routes>
    </Box>
    
    </BrowserRouter>
  )
}
export default App;