import React, { Component } from 'react'

export class Posts extends Component {
    
    render() 
  {  console.log("nvb nfbvn");
        return (
            <div>
                <h2>{this.props.match.params.title}</h2>
            </div>
        )
    }
}

export default Posts
