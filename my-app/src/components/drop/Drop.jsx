import React from 'react';
import GridLayout from 'react-grid-layout';

export default class Drag extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            layout: [{i:"1", x: 0, y: 0, w: 1, h: 2 }, { i:'2', x: 1, y: 0, w: 3, h: 2 }, { i:'3',x: 4, y: 0, w: 1, h: 2 }]
        }
    }

    render(){
        return (
            <div>
                <div className="dropItem">hah</div>
                <GridLayout className="layout" layout={this.state.layout} cols={12} rowHeight={30} width={1200} onLayoutChange={this.onLayoutChange}>
                    <div key="1" className="layoutItem">a</div>
                    <div key="2" className="layoutItem">b</div>
                    <div key="3" className="layoutItem">c</div>
                </GridLayout>
            
            </div>
        )
    }
}