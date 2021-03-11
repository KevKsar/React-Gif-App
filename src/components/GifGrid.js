import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categories }) => {
    const { data: images, loading } = useFetchGifs(categories);

    return (
        <>
            <h3 className=" titleCategory animate__animated animate__fadeInLeft">{categories}</h3>

            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            
            <div className='card-grid'>
                {images.map((image) => (
                    <GifGridItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};

/*
La function map:
  -utilisation de desctructuring >> de l'argument 'image' on prend id et title.
  -dans le component GifGridItem on passe un objet avec spread de image, l'argument passé a la fonction dans map.
*/
