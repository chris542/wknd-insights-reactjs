import React from 'react';
import Header from './insights-header';
import Stats from './insights-stats';

class Insights extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpened : false,
        }
    }
    toggleActive(e){
        this.setState({ isOpened: !this.state.isOpened, })
    }
    render(){
        return (
            <div className="insights-panel">
                <div className="container">
                    <Header insights={this.props.insights} toggleActive={()=>{this.toggleActive()}}/>
                    <Stats insights={this.props.insights} isOpened={this.state.isOpened}/>
                </div>
            </div>
        )
    }
};

export default Insights;
