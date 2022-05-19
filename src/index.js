import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css';
import Boo from './Book'
import {pook} from './books'



function BookList() {
   
    return (<section className='booklist' >
          
       {pook.map((y)=> {
                        return <Boo key={y.id} {...y}></Boo>})}
        </section>
    )}



ReactDOM.render(<BookList />, document.getElementById('root'));

