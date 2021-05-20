import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';
// Setup Variables
const firstbook = {
  img:'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title : 'I Love You to the Moon and Back',
  author : 'Amelia Hepworth',
}

const secondbook = {
  img:'https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg',
  title : 'Our Class is a Family',
  author : 'Shannon Olsen',
}


// const title = 'I Love You to the Moon and Back';
// const author = 'Amelia Hepworth';
// const img = 'https://images-na.ssl-images-amazon.com/images/I/81NdWmk6aUL._AC_UL200_SR200,200_.jpg';

function BookList() {
  return (  
      <section className="booklist">
        <Book img={firstbook.img} title={firstbook.title} author={firstbook.author}/>
        <Book img={secondbook.img} title={secondbook.title} author={secondbook.author}/>
      </section>
  );
}

const Book = (props) => {
  return <article className="book">
    <img src={props.img} alt=""/>
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>
}


ReactDom.render(<BookList />, document.getElementById("root"));





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
