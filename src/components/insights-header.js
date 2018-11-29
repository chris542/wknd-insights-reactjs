import React from 'react';

const group_mapping = {
    "18-30f": { "name": "Millennial Female", "range": "18 – 30 years" },
    "18-30m": { "name": "Millennial Male", "range": "18 – 30 years" },
    "30-50f": { "name": "Gen X Female", "range": "30 – 50 years" },
    "30-50m": { "name": "Gen X Male", "range": "30 – 50 years" },
    "50-80f": { "name": "50+ Female", "range": "50 – 80 years" },
    "50-80m": { "name": "50+ Male", "range": "50 – 80 years" }
}

const Header = (props) => {
    const {group, total} = props.insights;
    const {name, range} = group_mapping[group];
    return ( 
        <div className="headings" onClick={()=>{props.toggleActive()}} >
            <div className="cell demographic-group">
                <h3>{name}</h3>
                <p>{range}</p>
            </div>
            <div className="cell attendance">
                <h3>Attendance: {total}</h3>
                <p>Compared to last weekend</p>
            </div>
        </div>
    )
}

export default Header;
