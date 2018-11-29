import React from 'react';
import Donut from './stats-donut'
import Table from './stats-table'

const colors = [ '#0b71f0', '#83236a', '#e8a842', '#28DBCF', '#F1F2F2' ];
const reorderRanks = (ranks) => {
    let list = [];
    for (var i = 1, len = Object.keys(ranks).length; i <= len; i++) {
        let rank = ranks[i];
        list.push(rank); 
    }
    return list;
}

const Stats = (props) => {
    const ranks = reorderRanks(props.insights.ranks);

    return ( 
        <div className={`stats${(props.isOpened)?" active":""}`}>
            <Table ranks={ranks} colors={colors}/>
            <Donut ranks={ranks} colors={colors}/>
        </div>
    )
}

export default Stats;
