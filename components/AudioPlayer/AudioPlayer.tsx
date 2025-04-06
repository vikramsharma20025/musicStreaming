'use client';
import React, { useRef } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const AudioPlayer = () => {
    const audioelement = useRef(null);
    function playMusic(){
        audioelement.play();
    }
    function pauseMusic(){

    }
    return (
        <div>
            <audio src="../uploads/Shri Bansi Jogi - Shiv Stuti (Bam Lehri) 1995 - full remastered audio programme [TubeRipper.com].mp3" controls ref={audioelement} />
            <button onClick={playMusic}><PlayArrowIcon /></button>
            <button onClick={pauseMusic}><PauseIcon /></button>
        </div>
    )
}

export default AudioPlayer;
