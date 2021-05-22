import React from 'react'

const Book = (props) => {

    const clickHandler = (e) => {
      console.log(e);
      console.log(e.target);
    };
  
    const complexExample = (author) => {
      console.log(author);
    };
    
    const {img,title, author} = props;
    return <article className="book" onMouseOver={()=>{
      console.log(title);
    }}>
      <img src={img} alt=""/>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      {props.children}
      <button type="button" onClick={clickHandler}>ClickMe</button>
      <button type="button" onClick={() => complexExample(author)}>More Complex Example</button>
    </article>
  }

export default Book
