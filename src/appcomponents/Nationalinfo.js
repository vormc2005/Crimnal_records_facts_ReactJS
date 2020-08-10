import React, { Component } from 'react'
import Nationalcard from './Nationalcard'

export class Nationalinfo extends Component {
    // state ={
    //     nationalData : [{ 
    //         value: 2,
    //         data_year: 2002,
    //         key: "Asian"
    
    //     },
    //     {
    //         value: 455,
    //         data_year: 2008,
    //         key: "Black"
    
    //     },
    //     {
    //         value: 123,
    //         data_year: 1995,
    //         key: "White"
    
    //     }
    
    // ]
    // }

    render() {
        // console.log(this.props)
        return (
           
            <div style ={nationalinfostyle}>
               {this.props.nationalData.map(crimeReport =>(
                   
                //    console.log(crimeReport.key)
                  
                   <Nationalcard key={crimeReport.value} crimeReport={crimeReport}  />
                                   
                
               )
               )} 
            </div>
            
        )
    }
}

//style for grid gards
const nationalinfostyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Nationalinfo
