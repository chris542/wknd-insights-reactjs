import React from 'react';

const group_mapping = {
    "18-30f": {
        "name": "Millennial Female",
        "range": "18 – 30 years"
    },
    "18-30m": {
        "name": "Millennial Male",
        "range": "18 – 30 years"
    },
    "30-50f": {
        "name": "Gen X Female",
        "range": "30 – 50 years"
    },
    "30-50m": {
        "name": "Gen X Male",
        "range": "30 – 50 years"
    },
    "50-80f": {
        "name": "50+ Female",
        "range": "50 – 80 years"
    },
    "50-80m": {
        "name": "50+ Male",
        "range": "50 – 80 years"
    }
}

const Insights = ({insights}) => {
    console.log(insights)
    const {group, total, ranks, "week of" : week} = insights;
    const {name , range} = group_mapping[group];

    return (
        <div>
            {name}
            {range}
            {week}
            {total}
            {ranks["1"].name}
        </div>
    )
};

export default Insights;
