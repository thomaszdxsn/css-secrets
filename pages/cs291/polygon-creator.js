import React, {useEffect} from 'react';
import BasicLayout from "../../components/BasicLayout"
import PolygonScene from '../../geometry/polygon'


export default function Page() {
    useEffect(() => {
        const scene = new PolygonScene('polygon-creator');
        scene.render();
    }, [])

    return (
        <BasicLayout>
            <div id='polygon-creator' />
        </BasicLayout>
    )
}