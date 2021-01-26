import React from 'react'


export default function Shelf( props ) {
    let mappedTitles = props.shelf.map((added, i) =>
      <li key={ i }>{ added }</li>)


    return <div>

              <div className="shelf">

                <h2 className="center">Your Shelf</h2>
                  { mappedTitles.length === 0 ? <p>Click book images<br/>to add to the shelf list.</p> : <ol>{ mappedTitles }</ol>}
                  <button onClick={() => props.delete() }>Clear Shelf</button>

              </div>

            </div>
  }
