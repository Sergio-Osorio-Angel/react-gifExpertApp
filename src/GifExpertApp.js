import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp () {

    const [categories, setcategories] = useState(['One Punch']);

    function handleAdd(categoryNew) {
        setcategories(cats => [categoryNew,...cats]);
    }

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setcategories={ setcategories }></AddCategory>
        <hr></hr>

        <button onClick={ handleAdd } >Agregar</button>

        <ol>
            { 
                categories.map( category => {
                    return <GifGrid category={category} key={category}></GifGrid>
                }) 
            }
        </ol>

        </>
    );

}

export default GifExpertApp;