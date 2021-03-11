import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['welcome']);

    return (
        <>
            <h2>Gif Expert App</h2>
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
