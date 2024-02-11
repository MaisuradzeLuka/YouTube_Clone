import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../";
import { useParams } from "react-router-dom";

import { fetchData } from "../../utils/fetchDataFromApi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchData(`/search?part=snippet&q=${searchTerm}&maxResults=50`).then(
      (data) => setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search Results for:{" "}
        <span style={{ color: "#fc1503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
