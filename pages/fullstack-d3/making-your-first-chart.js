import React from 'react';
import * as d3 from 'd3';


async function drawLineChart() {
    const dataset = await d3.json('/api/my-weather-data');
}


const Page = () => {
    React.useEffect(() => {
        drawLineChart();
    }, [])

    return <cavnas id='d3-chapter1' />
}


export default Page;