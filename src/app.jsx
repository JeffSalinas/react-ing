import React from "react";
import ReactDOM from 'react-dom'


class Example extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <h1>Hello from NOT app.jsx</h1>
            </>
        )
    }
}


ReactDOM.render(<Example/>, document.getElementById('main'))