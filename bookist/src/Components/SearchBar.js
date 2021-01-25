import React, { Component } from 'react'



export default class SearchBar extends Component {
  constructor(props){
    super(props)


    this.state = {
      userInput: ''
    }
    
    this.clearInput = this.clearInput.bind(this)
  }

    onInputChange(userInput) {
      // console.log(userInput)
      this.setState({
        userInput: userInput 
      })
    }
  
    clearInput() {
      // console.log('Hiya')
      this.setState({
        userInput: ''
      })
      this.props.search('')
    }






  render() {
    return (
      <div className='search'>

        {/* Search Box */}

        {/* <div className='search-box'> */}
          <input onChange={ e => this.onInputChange( e.target.value ) } className='search-input' id='search' type='text' placeholder='Search' value={ this.state.userInput } />

        {/* Search button */}

          {/* <div className='search-icon'> */}
            <img alt="Search Icon" onClick={ e => this.props.search( this.state.userInput ) } src='https://cdn2.iconfinder.com/data/icons/android-app-line-1/32/search_android_app_aplication_phone-512.png' />
          {/* </div> */}
          
        {/* Clear button */}

          {/* <div className='clear-search'> */}
            { this.state.userInput !== '' && <button onClick={ this.clearInput }>Clear Input</button>}
          {/* </div> */}
        {/* </div> */}
      </div>
        
    )
  }
}
