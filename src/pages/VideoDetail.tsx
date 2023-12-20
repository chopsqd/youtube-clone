import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {Box, Stack, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {IVideo} from "../types";
import {Videos} from "../components";

const VideoDetail = () => {
    const {id} = useParams()
    const [videoDetail, setVideoDetail] = useState<IVideo | null>(null);
    const [relatedVideos, setRelatedVideos] = useState<Array<IVideo>>([]);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then(data => setVideoDetail(data.items[0]))

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then(data => setRelatedVideos(data.items))
    }, [id])

    if (!videoDetail?.snippet) {
        return <>"Loading..."</>
    }

    return (
        <Box minHeight={"95vh"}>
            <Stack direction={{xs: "column", md: "row"}}>
                <Box flex={1}>
                    <Box
                        sx={{
                            width: "100%",
                            position: "sticky",
                            top: "86px"
                        }}
                    >
                        <ReactPlayer
                            controls
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className={"react-player"}
                        />

                        <Typography
                            color={"#FFF"}
                            variant={"h5"}
                            fontWeight={"bold"}
                        >
                            {videoDetail?.snippet.title}
                        </Typography>

                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            py={1}
                            px={2}
                            sx={{color: "#FFF"}}
                        >
                            <Link to={`/channel/${videoDetail?.snippet.channelId}`}>
                                <Typography variant={"h6"} color={"#FFF"}>
                                    {videoDetail?.snippet.channelTitle}
                                    <CheckCircle
                                        sx={{
                                            fontSize: "12px",
                                            color: "gray",
                                            ml: "5px"
                                        }}
                                    />
                                </Typography>
                            </Link>

                            <Stack direction={"row"} gap={"20px"} alignItems={"center"}>
                                <Typography variant={"body1"} sx={{opacity: 0.7}}>
                                    {parseInt(videoDetail?.statistics.viewCount).toLocaleString()} views
                                </Typography>

                                <Typography variant={"body1"} sx={{opacity: 0.7}}>
                                    {parseInt(videoDetail?.statistics.likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>

                <Box
                    px={2}
                    py={{md: 1, xs: 5}}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Videos videos={relatedVideos} direction={"column"}/>
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetail;
