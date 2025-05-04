'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const HandleClick = ({ destination , children , className }) => {

  const router = useRouter();

    const handle = (e) => {
        e.preventDefault();

        if ( destination ) {
          if( destination.startsWith('#') ) {
            // Scrolling logic
            const target = document.querySelector( destination );

            if( target ) {
              target.scrollIntoView( {
                behavior : 'smooth' ,
                block : 'start',
              } );
            }
          } else

          if (destination) {
            // Download logic 
            const link = document.createElement('a');
            link.href = destination;
            link.download = destination.substring( destination.lastIndexOf('/') + 1 );
            document.body.appendChild(link);
            link.click();
            
            document.body.removeChild(link);
          }
        }


        
        
    };

    


  return (
      <button onClick={handle} className={className}> {children} </button>
  )
}

export default HandleClick
