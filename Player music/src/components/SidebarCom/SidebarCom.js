import React from 'react';
import "./sidebar.scss"
import SidebarSongCom from "../SidebarSongCom/SidebarSongCom";

const SidebarCom = ({songArray, setCurrentSong, openLibrary}) => {
    return (
        <div className={`container ${openLibrary === true ? "" : "toggle"}`}>
            <h2>Library</h2>
            {
                songArray.map(el => {
                    return <SidebarSongCom el={el} setCurrentSong={setCurrentSong}/>
                })
            }
        </div>
    );
};

export default SidebarCom;