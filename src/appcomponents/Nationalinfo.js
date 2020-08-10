import React, { Component } from 'react'
import Nationalcard from './Nationalcard'

export class Nationalinfo extends Component {
  
    render() {
        // console.log(this.props)
        return (
            <>
            
           
            <div style ={nationalinfostyle}>
               {this.props.nationalData.map(crimeReport =>(
                 
                //    console.log(crimeReport)
                  
                   <Nationalcard key={Math.random(crimeReport.value+crimeReport.data_year+crimeReport.key)*10000} crimeReport={crimeReport}  />
                                   
                
               )
               )} 
            </div>
            </>
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
