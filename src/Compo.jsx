import React from "react";


export default class Compo extends React.Component{
    render(){
        return(
            <>
                <h1> this is use for props</h1>
                <h1> {this.props.name}</h1>
                
            </>
        )
    }
}