import React from 'react';
import Donut from './stats-donut'
import Table from './stats-table'

const Stats = ({insights}) => {
    return ( 
        <div className="stats">
            <Table ranks={insights.ranks}/>
            <Donut insights={insights}/>
        </div>
    )
}

export default Stats;
