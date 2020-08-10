import React, { Component } from 'react'

export class NationalCard extends Component {
   
    render() {

        const {key, data_year, value} = this.props.crimeReport;

        return (
            <div className="card text-center">
                <h2>Race: {key}</h2>
                <h3>Offence: Larceny</h3>
                <p>Year: {data_year}</p>
                <p>How many: {value}</p>               
            </div>
        )
    }
}

export default NationalCard
