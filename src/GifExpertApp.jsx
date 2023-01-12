import { AddCategory } from './components/AddCategory';
import { useState } from 'react';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const capitalize = (word) => {
        const arr = word.split(' ');
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();            
        }
        const newWord = arr.join(' ');
        console.log(newWord);
        return newWord;
    }

    const onAddCategory = (newCategory) => {
        newCategory =  capitalize(newCategory);
        if(categories.includes(newCategory)) return;
        setCategories( [ newCategory, ...categories ] )
    }

  return (
    <>
        <h1>GifExprtApp</h1>

        <AddCategory onNewCategory = { (value) => onAddCategory(value) }/>

        {
            categories.map( (category) => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            ))
        }
    </>
  )
}
