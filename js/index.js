function ready( cb ) {
  if ( document.readyState !== 'loading' ) {
    cb();
  } else  {
    document.addEventListener( 'DOMContentLoaded', cb );
  } 
}

ready( () => {
  setTimeout(() => {
    const card = document.querySelector( '.card' );
    card.classList.add( 'ready' );
  }, 500)
});

