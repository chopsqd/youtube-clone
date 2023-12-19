import {Box, Stack} from "@mui/material";
import {IVideo} from "../types";
import {ChannelCard, VideoCard} from "./index";

const Videos = ({videos}: { videos: Array<IVideo> }) => (
    <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"start"}
        gap={2}
    >
        {videos.map((video, idx) => (
            <Box key={idx}>
                {video.id.videoId && <VideoCard video={video} />}
                {video.id.channelId && <ChannelCard channelDetail={video} />}
            </Box>
        ))}
    </Stack>
);

export default Videos;
