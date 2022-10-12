import React from 'react';
import "./sidebarsong.scss"

const SidebarSongCom = ({el, setCurrentSong}) => {
    function Change(){
        setCurrentSong(el)
    }
    return (
        <div onClick={Change} className="bar">
            <div className="image">
                <img className="img" src={el.cover} alt="photo"/>
            </div>
            <div>
                <h4>{el.name}</h4>
                <p>{el.artist}</p>
            </div>
        </div>
    );
};

export default SidebarSongCom;