import React from 'react'


export default function BookList (props) {
  
  let mappedBooks = props.books.filter( ( book ) => book.title.toLowerCase().includes( props.search.toLowerCase() ) )
    .map((b, i) => <section className="book" key={ i } > 
    <img src={ b.img } alt="book cover" onClick={ e => props.add(b.title) } />
    <p>{ b.title }</p>
    <p>{ b.author }</p> 
    </section>)

    // console.log(this.props.search)
    return <div className='book-wrap'>
          { mappedBooks }
      </div>
}