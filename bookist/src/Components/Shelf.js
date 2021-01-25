import React, { Component } from 'react'


export default class Shelf extends Component {


  render() {
    let mappedTitles = this.props.shelf.map((added, i) =>
    <li key={ i }>{ added }</li>)


    return (

      <div>

        <div className="shelf">

          <h2 className="center">Your Shelf</h2>
            { mappedTitles.length === 0 ? <p>Click book images<br/>to add to the shelf list.</p> : <ol>{ mappedTitles }</ol>}
            <button onClick={() => this.props.delete() }>Clear Shelf</button>

        </div>

      </div>
      
    )
  }
}