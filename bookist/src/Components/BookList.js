import React, { Component } from 'react'


export default class BookList extends Component {
  // constructor() {
  //   super()

  // }


  render() {
    // console.log(this.props.search)
    let mappedBooks = this.props.books.filter( ( book ) => book.title.toLowerCase().includes( this.props.search.toLowerCase() ) )
    .map((b, i) => <section className="book" key={ i } > 
  
    <img src={ b.img } alt="book cover" onClick={ e => this.props.add(b.title) } />
    <p>{ b.title }</p>
    <p>{ b.author }</p> 
    </section>)


    return (
      <div className='book-wrap'>
          { mappedBooks }
      </div>
    )
  }
}