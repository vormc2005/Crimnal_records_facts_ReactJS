import React, { Component } from 'react'
import Nationalinfo from '../appcomponents/Nationalinfo'
import axios from 'axios';

export class NationalPage extends Component {


    //getting national data from API
    state = {
        nationalData: [],
        loading: false
        
      }
    
      async componentDidMount(){
        this.setState({loading:true})
        const APIKey = 'bUyTG0hGrUKuyuaIVeB6pbzvYXCFrbrzImvHr8D8'
        const res = await axios (`https://api.usa.gov/crime/fbi/sapi/api/nibrs/larceny/offender/states/VA/race?API_KEY=${APIKey}`);
        console.log(res.data.data)
        console.log(res.data.keys)
        this.setState({nationalData: res.data.data, loading:false})
        //Checking if data is in state
        console.log(this.state)
        // console.log(this.state.loading)
      }



    render() {
        return (
            <div className="container">
                National card works
               <Nationalinfo loading={this.state.loading} nationalData={this.state.nationalData} />
            </div>
        )
    }
}

export default NationalPage
