import React from 'react'

const NationalCard =(props)=> {    

    const {key, data_year, value} = props.crimeReport;

        return (           

        
            <div className="card text-center">
                <h2>Race: {key}</h2>
                {/* <h3>Offence: Larceny</h3> */}
                <p>Year: {data_year}</p>
                <p>How many: {value}</p>               
            </div>

            // <table style ={{width: 100+'%'}}>
            //     <tr>
            //         <th>Race</th>
            //         <th>Count</th>
            //         <th>Year</th>

            // </tr>
            //     <tr>
            //     <td>{key}</td>
            //     <td>{value}</td>
            //     <td>{data_year}</td>
            // </tr>
            // </table>
            
        )
        
    
}

export default NationalCard
