import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const ReactGifsApp = () => {
    const [categories, setCategories] = useState(['welcome']);

    return (
        <>
            <h1>React Gifs App</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            <div>
                {categories.map((category) => (
                    <GifGrid key={category} categories={category} />
                ))}
            </div>
        </>
    );
};
