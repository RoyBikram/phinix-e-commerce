import React, { useEffect,useRef } from 'react';
import { EmptyBoxContainer } from './EmptyBoxStyle';
import lottie from 'lottie-web';

export default function EmptyBox({varient}) {
    const EmptyBoxSelector = useRef(null);
    let AniDataPath = null;
    switch (true) {
        case varient === "regular":
            AniDataPath = 'empty-box.json'
            lottie.setSpeed(0.7)

            break;
    
        case varient === "sad":
            AniDataPath = 'sad-empty-box.json'
            lottie.setSpeed(0.9)

            break;
    
        default:
            break;
    }

    useEffect(() => {
        lottie.loadAnimation({
            container: EmptyBoxSelector.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require(`../../res/json/${AniDataPath}`)
        })
        
    }, [])
    
    return (
        <EmptyBoxContainer varient={varient}>
            <div  ref={EmptyBoxSelector}  className="EmptyBoxAni"></div>
        </EmptyBoxContainer>
    );
}
