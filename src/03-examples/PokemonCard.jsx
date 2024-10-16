import React from 'react'


export const PokemonCard = ({id, name, sprites=[]}) => {
  return (
    <section
        style={{height: 200, display:'flex'}}
    >
        <h2 className='text-capitalize'>
            #{id} - {name}
        </h2>

        <div>

            {
                sprites.map((sprite, index) => (
                    <img 
                        key={sprite}
                        src={sprite}
                        alt={name}
                        style={{width: 100, height: 100}}
                    />
                ))
            }



        </div>


      
    </section>
  )
}


