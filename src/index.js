import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';
// Setup Variables
const books = [
  {
    id:1,
    img:'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title : 'I Love You to the Moon and Back',
    author : 'Amelia Hepworth',
  },
  {
    id:2,
    img:'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg',
    title : 'Our Class is a Family',
    author : 'Shannon Olsen',
  },
  {
    id:3,
    img:'https://images-na.ssl-images-amazon.com/images/I/81QRyjf28tS._AC_UL200_SR200,200_.jpg',
    title : "Oh, the Places You'll Go!",
    author : 'Dr. Seuss',
  }
]



function BookList() {
  return (  
      <section className="booklist">
        {books.map((book) => {
          // const {img, title, author} = book;
          return <Book key={book.id} book={book}></Book>;
        })}
      </section>
  );
}

const Book = (props) => {
  const {img,title, author} = props.book;
  return <article className="book">
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    {props.children}
  </article>
}


ReactDom.render(<BookList />, 
  document.getElementById("root"));



  // const names = ['Jimmy','Rylie','Kyle Daniel'];
  // const newNames = names.map((name)=> {
  //   return <h1>{name}</h1>;
  // });

// const Image = () => {
//   return <img src="https://images-na.ssl-images-amazon.com/images/I/81NdWmk6aUL._AC_UL200_SR200,200_.jpg" alt="" />
// }
// const Title =()=> <h1>Zero Fail</h1>;
// const Author = () => <h4 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'}}>Jimmy Lozano</h4>;


// const Greeting =() =>{
//   return React.createElement(
//     'div',
//     {},
//     React.createElement(
//       'h1',
//       {},
//       'Hello World')
//     );
// };
