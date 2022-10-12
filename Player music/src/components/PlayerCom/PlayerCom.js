import React, {useState, useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faForward, faPlay, faPause} from "@fortawesome/free-solid-svg-icons";
import "./player.scss"

const PlayerCom = ({currentSong, isPlaying, setIsPlaying, setCurrentSong, array}) => {

    const [time, setTime] = useState({
        current: 0,
        duration: 0
    })

    let audio = useRef('')
    let input = useRef('')

    function handleClick() {
        setIsPlaying(!isPlaying)
        if (isPlaying) {
            audio.current.pause()
        } else {
            audio.current.play()
        }
        console.log(isPlaying)
    }

    const handlerTimeUpdate = () => {
        let current = audio.current.currentTime
        let duration = audio.current.duration
        setTime({...time, current: current, duration: duration})
    }

    function secondsToTime(e) {
        let h = Math.floor(e / 3600).toString().padStart(2, '0'),
            m = Math.floor(e % 3600 / 60).toString().padStart(2, '0'),
            s = Math.floor(e % 60).toString().padStart(2, '0');
        console.log(h)
        return m + ':' + s;
    }


    function skip(open) {
        let indexSong = array.findIndex(i => i.id === currentSong.id);
        let lastSong = array.length-1
        if (open === "prev") {
            setCurrentSong(array[indexSong - 1])
        if(indexSong === 0){
            setCurrentSong(array[lastSong])
        }
                } else {
            setCurrentSong(array[indexSong + 1])
        }if(indexSong === lastSong){
            setCurrentSong(array[0])
        }
    }

    const handlerChange = (e) => {
        audio.current.currentTime = e.target.value

    }



    return (
        <div className="player">
            <div className="time-control">
                <p>{secondsToTime(time.current)}</p>
                <from action="/">
                    <label htmlFor="musicWeb"/>
                    <input id="musicWeb" onChange={handlerChange} value={time.current} ref={input} min={0} max={time.duration} type="range"/>
                </from>
                <p>{secondsToTime(time.duration)}</p>
            </div>
            <div className="controller">
                <FontAwesomeIcon onClick={() => skip('prev')} size="2x" icon={faBackward}/>
                <FontAwesomeIcon onClick={handleClick} size="2x" icon={isPlaying === false ? faPlay : faPause}/>
                <FontAwesomeIcon onClick={() => skip('next')} size="2x" icon={faForward}/>

            </div>
            <audio onTimeUpdate={handlerTimeUpdate} onLoadedData={handlerTimeUpdate} ref={audio}
                   src={currentSong.audio}/>

        </div>
    );
};

export default PlayerCom;