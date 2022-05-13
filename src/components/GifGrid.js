import React from 'react'
import useFecthGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

function GifGrid ( {category} ) {

    const { data:images, loading } = useFecthGifs(category); 

  return (
    <>
        <h3>{category}</h3>
        { loading && <p className='card animate__animated animate__flash'>Cargando</p> }
        <div>
            <ol>
                {
                    images.map( img => {
                        return <GifGridItem key={img.id} {...img}></GifGridItem>
                    })
                }
            </ol>
        </div>
    </>
  )
}

export default GifGrid;