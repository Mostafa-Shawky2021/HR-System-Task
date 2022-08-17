import React, { useState, useRef } from 'react'
import './imageupload.css'
const ImageUpload = () => {

    const [imageSrc, setImageSrc] = useState('')
    const onImageUpload = (e) => {
        const img = e.target.files[0]
        const fileReader = new FileReader()
        fileReader.readAsDataURL(img)
        fileReader.onload = () => {
            setImageSrc(fileReader.result)
        }
    }
    return (
        <div className='image-wrapper'>
            {/* <input type='file' className='image-upload' onChange={onImageUpload}/> */}
            <input type='file' className='image-upload' onChange={onImageUpload} />
            {
                imageSrc ?
                    (<img src={imageSrc} alt="employee-image" className='employee-image' />)
                    :
                    (<p className='text-upload'>upload image here</p>)
            }
        </div>
    )
}

export default ImageUpload