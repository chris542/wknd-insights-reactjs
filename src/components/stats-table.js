import React from 'react';

const week_mapping = {
    "Opening Week": "Opening Week",
    "Opening Wknd": "Opening Wknd",
    "Week 1": "Opening Week",
    "Week 2": "Week 2",
    "Week 3": "Week 3",
    "---": "---"
}

const Rank = (props)=> {
    const r = props.ranks.map((r,i)=>{
        const {name, week, share_string } = r;
        const ranking = i + 1;
        return (
            <li
                key={ranking}
                className={props.hoverIndex == i?"active":""}
                onMouseOver={()=>props.onHover(i)}
                onMouseOut={()=>props.onHoverOut()}
            >
                <div className="title">
                    <p>{ranking}. {name}</p>
                </div>
                <div className="share">
                    <p>{share_string}%</p>
                </div>
                <div className="week">
                    <h5>{week_mapping[week]}</h5>
                </div>
            </li>
        )
    })
    return r;
}

const Table = (props) => {
    return (
        <div className="cell">
            <div className="table-head">
                <p>Top 4 Weekend Movies</p>
                <h5>Week of Run</h5>
            </div>
            <ol className="ranks">
                <Rank {...props}/>
            </ol>
        </div>
    )
}

export default Table;
