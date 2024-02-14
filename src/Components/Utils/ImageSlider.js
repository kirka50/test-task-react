import {useEffect, useRef, useState} from "react";

function ImageSlider({images}) {
    const [currentImg, setCurrentImage] = useState()
    let index = useRef(1)
    useEffect(() => {
        setCurrentImage(images[0])
        index.current = 1
    },[images])
    const handleRight = () => {
        if (index.current + 1 > images.length ){
            index.current = 1
            setCurrentImage(images[index.current - 1])
        } else {
            index.current = index.current + 1
            setCurrentImage(images[index.current - 1])
        }
    }

    const handleLeft = () => {
        if (index.current - 1 <= 0 ){
            index.current = images.length
            setCurrentImage(images[index.current - 1])
        } else {
            index.current = index.current - 1
            setCurrentImage(images[index.current - 1])
        }
    }

    return <div className={'image-slider'}>
        <button onClick={handleLeft}>Лево</button>
        <img src={currentImg} alt={'Картинка товара'} width={'300'} height={'300'}/>
        <button onClick={handleRight}>Право</button>
    </div>
}

export default ImageSlider;