import React from "react"
import "./style.css"

export default class Upper extends React.Component{
    constructor() {
        super()
        this.state = {
            text:"",
            converted:""
        }
    }

    setText(text) {
        this.setState({text:text})
    }

    convertUpper() {
        let text = this.state.text.toUpperCase()
        this.setState({converted:text})
    }

    render() {
        return <div className="upper-container">
            <h2>Convert to Upper</h2>
            <br/>
            <textarea onChange={(event) => {this.setText(event.target.value)}}></textarea>
            <br/>
            <button onClick={() => {this.convertUpper()}}>Convert</button>
            <p>{this.state.converted}</p>
        </div>
    }
}