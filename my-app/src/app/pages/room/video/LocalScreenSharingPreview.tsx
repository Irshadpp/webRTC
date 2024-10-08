import React, { useEffect, useRef } from 'react'

const LocalScreenSharingPreview = ({stream}: any) => {
    const localPreviewRef = useRef<any>();

    useEffect(()=>{
        const video: any = localPreviewRef.current;
        video.srcObject = stream;

        video.onloadedmetadata = () =>{
            video.play()
        }

    }, [stream])
  return (
    <div className='local_screen_share_preview'>
      <video muted autoPlay ref={localPreviewRef}  style={{
          transform: 'none',
          objectFit: 'cover'
        }} ></video>
    </div>
  )
}

export default LocalScreenSharingPreview
