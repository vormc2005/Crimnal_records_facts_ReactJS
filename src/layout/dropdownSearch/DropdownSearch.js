import React, { Component } from 'react'

export class DropdownSearch extends Component {
    state ={
        search: ""
    }

    onSubmit=(e)=>{
        e.preventDefault();
        // console.log(this.state.search)
        this.props.searchCrimes(this.state.search)
        this.setState({ search: ""})

    }

    handleInputChange = event =>{
       
        //   const value = event.target.value;
        //   const name = event.target.name;
        //   this.setState({ [name]: value})                
        this.setState({search: event.target.value})
        // console.log(this.state.search)
       
         
      }

     
    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>       
            <select className="recordSearch custom-select" name="search" value={this.state.value} onChange={this.handleInputChange}>
            <option 
                id="larceny" 
                value="larceny" 
                name="search"  >
                Larceny
            </option>
            
            <option 
                id="aggravated-assault"
                name="search"
                value="aggravated-assault">
                Agrravated Assault
            </option>
            <option 
                id="burglary"
                name="search"
                value="burglary">
                Burglary
            </option>
            <option
              id="motor-vehicle-theft"
              name="search"
              value="motor-vehicle-theft"
            >
             Motor Vehicle-Theft
            </option>
            <option
              id="Homicide"
              name="search"
              value="Homicide"
            >
              Homicide
            </option>
            <option
              id="rape"
              name="search"
              value="rape"
            >
              Rape
            </option>
            <option
              id="robbery"
              name="search"
              value="robbery"
            >
              Robbery
            </option>
            <option
              id="arson"
              name="search"
              value="arson"
            >
              Arson
            </option>
            <option
              id="violent-crime"
              name="search"
              value="violent-crime"
            >
              Violent Crime
            </option>
            <option
              id="property-crime"
              name="search"
              value="property-crime"
            >
              Property Crime
            </option>
          </select>  
          <input type="submit" value="Submit" />
          </form>         
            </div>
        )
    }
}

export default DropdownSearch
