import PrimarySearchAppBar  from "../../components/layout/navBar/navbar";
import ResponsiveTopVideosGrid from "../../components/layout/bodyDisplay/bodyDisplay";
import Videos from "../../components/layout/bodyDisplay/videos.json"
import { useState } from "react";


function Home() {
const [searchVideo, setSearchVideo]= useState("");
const filteredVideos =  Videos.filter(video => video.title.toLowerCase().includes(searchVideo.toLowerCase()))
    return(
      

        <>
        <PrimarySearchAppBar searchVideo={searchVideo} setSearchVideo={setSearchVideo}/>
        <ResponsiveTopVideosGrid videos={filteredVideos}/>
        </>
    )
}

export default Home 