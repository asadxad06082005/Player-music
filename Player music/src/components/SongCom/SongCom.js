import React from 'react';
import "./songcom.scss"

const SongCom = ({currentSong, openLibrary, setOpenLibrary}) => {
    function Change() {
        setOpenLibrary(!openLibrary)
    }

    return (
        <div>
            <div className="waves">
                <h2>Waves</h2>
                <button onClick={Change}>Library</button>
            </div>
            <div className="song-container">
                <img src={currentSong.cover} alt="photo"/>
                <h2>{currentSong.name}</h2>
                <h3>{currentSong.artist}</h3>
            </div>
        </div>
    );
};

export default SongCom;