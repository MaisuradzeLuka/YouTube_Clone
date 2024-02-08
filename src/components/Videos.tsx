import { Stack, Box } from "@mui/material";
import { ChannelProfile, VideoCard } from "./";
import { IVideo } from "../types";

const Videos = ({ videos }: { videos: IVideo[] }) => {
  console.log(videos);

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelProfile channelDetails={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
