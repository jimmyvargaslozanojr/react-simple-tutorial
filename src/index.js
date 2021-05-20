import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';

function BookList() {
  return (  
      <section className="booklist">
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
      </section>
  );
}

const Book = () => {
  return <article className="book">
    <Image />
    <Title />
    <Author />
  </article>
}

const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/81NdWmk6aUL._AC_UL200_SR200,200_.jpg" alt="" />
}

const Title =()=> <h1>Zero Fail</h1>;
const Author = () => <p>Jimmy Lozano</p>;

ReactDom.render(<BookList />, document.getElementById("root"));





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
