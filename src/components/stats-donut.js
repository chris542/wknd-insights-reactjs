import React from 'react';
import * as d3 from "d3";

const Slice = (props) => {
    const { pie, radius, data, colors } = props;
    const arc = d3.arc()
        .padAngle(0.02)
        .innerRadius(radius-10)
        .outerRadius(radius-70);
    const outerArc = d3.arc()
        .padAngle(0.02)
        .innerRadius(radius)
        .outerRadius(radius-3);

    return pie(data).map((slice, index)=>{
        return (
            <g 
                key={index+1}
                className={`arc ${props.hoverIndex == index?"active":""}`}
                onMouseOver={()=>props.onHover(index)}
                onMouseOut={()=>props.onHoverOut()}
            >
                <path className="donut-outline" key={index} d={outerArc(slice)} fill={colors[index]} />
                <path d={arc(slice)} fill={colors[index]} />
            </g>
        )  
    })
}

const Donut = (props) => {
    const pie = d3.pie().sort(null),
        width =300,
        height = 300,
        radius = Math.min(width,height)/2,
        list = props.ranks.map((r)=>r.share);

    return (
        <div className="cell donut">
            <svg width={width} height={height}>
                <g transform={`translate(${width/2}, ${height/2})`}>
                    <Slice pie={pie} radius={radius} data={list} {...props}/>
                </g>
            </svg>
        </div>
    )
}

export default Donut;
