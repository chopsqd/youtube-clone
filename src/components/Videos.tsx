import {Box, Stack} from "@mui/material";
import {IVideo} from "../types";
import {ChannelCard, VideoCard} from "./index";

interface IVideosProps {
    videos: Array<IVideo>
    direction?: "row" | "column"
}

const Videos = ({videos, direction = "row"}: IVideosProps) => (
    <Stack
        direction={direction}
        flexWrap={"wrap"}
        justifyContent={"start"}
        gap={2}
    >
        {videos.map((video: IVideo, idx: number) => (
            <Box key={idx}>
                {video.id.videoId && <VideoCard video={video} />}
                {video.id.channelId && <ChannelCard channelDetail={video} />}
            </Box>
        ))}
    </Stack>
);

export default Videos;
