'use client';
import React from 'react'

const AudioUpload = () => {
    return (
        <div className='w-screen h-screen flex flex-row justify-center'>
            <form
                className='flex flex-col justify-center items-center w-1/2 h-1/2 border m-auto'
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    fetch('/api/upload', {
                        method: 'POST',
                        body: formData,
                    })
                        .then((response) => response.json())
                        .then((data) => console.log('File uploaded successfully:', data))
                        .catch((error) => console.error('Error uploading file:', error));
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
