import { Typography, Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../../utils/fetchDataFromApi";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "..";

interface IVideoDetail {
  snippet: { title: string; channelId: string; channelTitle: string };
  statistics: { viewCount: string; likeCount: string };
}

const VideoDetail = () => {
  const [videos, setVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState<IVideoDetail>({
    snippet: { title: "", channelId: "", channelTitle: "" },
    statistics: { viewCount: "", likeCount: "" },
  });
  const { id } = useParams();

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  useEffect(() => {
    fetchData(`/videos?part=snippet,statustics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchData(`/search?part=snippet&relatedToVideoIf=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography color="#fff" fontWeight="bold" p={2} variant="h5">
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant="h6" color="#fff">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "grey", nl: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: "0.7" }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: "0.7" }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
