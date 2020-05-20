import React, {useEffect} from 'react';
import BasicLayout from "../../components/BasicLayout"



function init() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
}



export default function Page() {
    useEffect(() => {
        init();
    }, [])
    return (
        <BasicLayout>
            stairway
        </BasicLayout>
    )
}