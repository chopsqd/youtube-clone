import {Link} from "react-router-dom";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl} from "../utils/constants";
import {IVideo} from "../types";

const VideoCard = ({video: {id: {videoId}, snippet}}: { video: IVideo }) => (
    <Card
        sx={{
            width: {
                xs: "100%",
                sm: '358px',
                md: "320px"
            },
            backgroundColor: '#1E1E1E',
            boxShadow: "none",
            borderRadius: 0
        }}
    >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                sx={{
                    width: {
                        xs: '100%',
                        sm: '358px'
                    },
                    height: 180
                }}
            />
        </Link>
        <CardContent
            sx={{
                backgroundColor: "1E1E1E",
                height: "106px"
            }}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography
                    variant={"subtitle1"}
                    fontWeight={"bold"}
                    color={"#FFF"}
                >
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography
                    variant={"subtitle2"}
                    fontWeight={"bold"}
                    color={"gray"}
                >
                    {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}

                    <CheckCircle
                        sx={{
                            fontSize: 12,
                            color: "gray",
                            ml: "5px"
                        }}
                    />
                </Typography>
            </Link>
        </CardContent>
    </Card>
);

export default VideoCard;
