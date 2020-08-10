import React, { Component, Fragment } from 'react'
import Nationalinfo from '../appcomponents/Nationalinfo'
import DropdownSearch from '../layout/dropdownSearch/DropdownSearch'
import axios from 'axios';

export class NationalPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            nationalData: [],
            loading: false,
               
          }

        //   this.handleInputChange=this.handleInputChange.bind(this);
        //   this.handlesubmit = this.handlesubmit.bind(this)
    }

    //getting national data from API
    
    
      
      //Need to get drop down to work!!!!************************************
      componentDidMount(){
          
        this.getCrimeFromAPI('larceny')
       
        
      }
      //******************************************************************* */
      //Making Api Call got pull national data
      async getCrimeFromAPI(crimeType){
          
      this.setState({loading:true})
      
        const res = await axios (`https://api.usa.gov/crime/fbi/sapi/api/nibrs/${crimeType}/offender/national/race?API_KEY=${process.env.REACT_APP_APIKEY}`);
        // console.log(res.data.data)
        // console.log(res.data.keys)
        this.setState({nationalData: res.data.data, loading:false})
    //Checking if data is in state
        console.log(this.state)
        // console.log(this.state.loading)        
        
      }
   
//connecting to a Dropdown component, passing props up
    searchCrimes= (search)=>{
        // console.log(search)      
        this.getCrimeFromAPI(search)
        this.setState({ nationalData: []})
    }

   //Need to filter by year and race



    render() {
        return (
            <Fragment>
                    <div className="container">

                        

                        <DropdownSearch searchCrimes = {this.searchCrimes}/>            
               
                        <Nationalinfo loading={this.state.loading} nationalData={this.state.nationalData} />
                    </div>
            </Fragment>
        )
    }
}

export default NationalPage
