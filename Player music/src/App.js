import React, {useState} from "react";
import "./index.css"
import data from "./data";
import SongCom from "./components/SongCom/SongCom";
import PlayerCom from "./components/PlayerCom/PlayerCom";
import SidebarCom from "./components/SidebarCom/SidebarCom";



function App() {
    const [array,setArray] = useState(data)
    const [songArray, setSongArray] = useState(data)
    const [currentSong, setCurrentSong] = useState(songArray[0])
    const [openLibrary, setOpenLibrary] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
  return (
        <div className="App">
            <SongCom currentSong={currentSong} openLibrary={openLibrary} setOpenLibrary={setOpenLibrary}/>
            <SidebarCom songArray={songArray} setCurrentSong={setCurrentSong} openLibrary={openLibrary}/>
            <PlayerCom currentSong={currentSong}  isPlaying={isPlaying} setIsPlaying={setIsPlaying} array={array} setCurrentSong={setCurrentSong} />
        </div>
  );
}

export default App;
