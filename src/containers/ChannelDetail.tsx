import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Videos, ChannelCard } from "../components";
import { fetchData } from "../utils/fetchDataFromApi";
import { IVideo } from "../types";

interface IChannelDetails extends IVideo {
  statistics: {
    subscriberCount: string;
  };
}

const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = useState<IChannelDetails | null>(
    null
  );
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`/channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );

    fetchData(`/search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,173,168,1) 0%, rgba(5,98,223,1) 49%, rgba(127,0,199,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard
          channelDetails={channelDetails}
          marginTop="-110px"
          subscribers={parseInt(
            channelDetails?.statistics?.subscriberCount ?? "0"
          ).toLocaleString("en-US")}
        />
      </Box>
      <Box display="flex" p="2">
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
