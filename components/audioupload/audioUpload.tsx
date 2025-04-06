'use client';
import React from 'react'

const AudioUpload = () => {
    
    return (
        <div className='w-screen h-screen flex flex-row justify-center'>
            <form
                className='flex flex-col justify-center items-center w-1/2 h-1/2 border m-auto'
                onSubmit={(e) => {
                    e.preventDefault();
                    const fileInput = document.getElementById("audioFile"); // Replace with your HTML element ID
                    if(!fileInput){
                        alert("no file selected");
                        
                    }else{
                        const file = fileInput?.files[0];

                        const formData = new FormData();
                        formData.append("file", file);

                        fetch("/api/upload", {
                        method: "POST",
                        body: formData,
                        })
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.error(error));
                    }
                }}
            >
                <div className='mb-15 px-15 w-5'>
                    <label htmlFor="audioFile">Upload Audio File:</label>
                    <input type="file" id="audioFile" name="audioFile" accept="audio/*" required />
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default AudioUpload;
