import React from 'react'

const Book= (props)=>{
    //const {imag,author,title}= props.book;
    // return (
    // <article className='book'>
    //     <img src={props.book.imaag}/>
    //      <h1>{props.book.titlee}</h1>
    //      <h4 >{props.book.authorr}</h4>
    // </article> )
    const {imaag,authorr,titlee}= props;
    const cliko=()=>{alert("yayaaya")};
    const cliky=(e)=>{console.log(titlee)};
    return(
    <article className='book' onMouseOver={()=>console.log(title)}>
        <img src={imaag} onClick={()=>cliky(titlee)}/>
         <h1>{titlee}</h1>
         <h4 >{authorr}</h4>
         <button onClick={cliko}>press</button>
    </article> );
    
    };

   export default Book