import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ texto }) => {

  const [categories, setcategories] = useState(['naruro']);

  return (
    <>
      <AddCategory setcategories={setcategories} />
      <h2>{texto}</h2>
      <hr />
      <ol>
        {
          categories.map(category => (
            <GifGrid
            key={category} 
            category={ category}/>
          ))
        }
      </ol>
    </>
  )
}

GifExpertApp.propTypes = {
  texto: PropTypes.string
}

GifExpertApp.defaultProps = {
  texto: 'GifEXpertApp'
}
export default GifExpertApp;
