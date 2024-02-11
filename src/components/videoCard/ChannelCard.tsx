import { Box, CardMedia, Typography, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../../utils/constants";

import { IVideo } from "../../types";

interface IChannelCard {
  channelDetails: IVideo | null;
  marginTop?: string;
  subscribers?: string;
}

const ChannelCard = ({
  channelDetails,
  marginTop,
  subscribers,
}: IChannelCard) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", md: "350px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetails?.snippet?.title}{" "}
            <CheckCircle sx={{ fontSize: 14, color: "grey", ml: "5px" }} />
          </Typography>
          <Typography sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
            {subscribers}
            Subscribers
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
