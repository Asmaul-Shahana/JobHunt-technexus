import React, { useEffect, useState } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const Category = () => {

    const [ categories, setCategories ] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
            // console.log(data);
    }, [])

    return (
        <div className='px-28 pt-24'>
            <h3 className='font-bold text-4xl pb-3 text-center'>Job Category List</h3>
            <p className='text-[#757575] pb-6 text-center'>Explore thousands of job opportunities with all the information you need.</p>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    categories.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;