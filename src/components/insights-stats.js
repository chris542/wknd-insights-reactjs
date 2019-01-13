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

class Stats extends React.Component {
    state = {
        hoverIndex : -1
    }
    hover = (i) => {
        this.setState({
            hoverIndex : i
        })
    }
    hoverOut = () => {
        this.setState({
            hoverIndex : -1
        })
    }

    render() {
        const ranks = reorderRanks(this.props.insights.ranks);
        return (
            <div className={`stats${(this.props.isOpened)?" active":""}`}>
                <Table ranks={ranks} colors={colors} onHover={this.hover} onHoverOut={this.hoverOut} hoverIndex={this.state.hoverIndex}/>
                <Donut ranks={ranks} colors={colors} onHover={this.hover} onHoverOut={this.hoverOut} hoverIndex={this.state.hoverIndex}/>
            </div>
        );
    }
}

export default Stats;
