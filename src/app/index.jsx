import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";

class Main extends React.Component {
    render() {
        return <div onClick={() => this.setState({count: this.state.count + 1})}>

            <Test text="Non-Radium-Component, click me, works as expected -> alert is shown."/>

            <br/><br/><br/>

            <TestRadium text="Radium-Component, click me, alert is not shown (bug) with 0.21.0, but shown (expected) with 0.19.6."/>

        </div>
    }
}

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    render() {
        return <div onClick={() => this.setState({count: this.state.count + 1})}>

            {this.props.text} Click {this.state.count}

        </div>
    }

    componentDidUpdate(prevProps, prevState) {
        window.alert("If you see this everything is ok.");
    }
}

const TestRadium = Radium(Test);

ReactDOM.render(
    <Main/>,
    document.getElementById('app')
);