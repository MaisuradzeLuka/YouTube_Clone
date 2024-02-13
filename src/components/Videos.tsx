import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";
import { IVideo } from "../types";

const Videos = ({
  videos,
  direction,
}: {
  videos: IVideo[];
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
}) => {
  if (!videos?.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetails={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
