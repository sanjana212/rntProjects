import React from 'react';
import './Responsive.css';
const Responsive = () => {
  return (
    <div className='wrapper'>
      <header className='header'> <h1>Header</h1></header>
     <article className='main'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quidem culpa officiis maiores quas quae commodi sint, beatae explicabo corporis libero labore perferendis ea tempora, minima voluptatum consequuntur quisquam quibusdam.</p>
     </article>
     <aside className="aside aside1">
        <h1>Aside 1</h1>
     </aside>
     <aside className="aside aside1">
        <h1>Aside 2</h1>
     </aside>
    </div>
  )
}

export default Responsive
