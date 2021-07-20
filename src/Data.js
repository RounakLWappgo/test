import React, { Component } from 'react'
import Content from './Content';
import { Link } from 'react-router-dom';


export class Data extends Component {

    render() 
   {
    let cont = Content;
  
        return (
            
            <div>
                <table>
                    {cont.map(item => {
                        return (
                            <tr key={item.title}>
                                <td><Link to={`data/${item.title}`} > {item.title} </Link></td>              
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}

export default Data
