import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GirGridItem } from "./GirGridItem";

const GifGrid = ({ category }) => {

  const {data:images, loading} = useFetchGifs(category);
  
  return (
    <>
      <h3 className='animate__animated animate__bounce'> {category} </h3>
      
      { loading && <p className='animate__animated animate__flash'> loading </p> }
      {<div className='card-grid'>
        {
          images.map(img => {
            return <GirGridItem
              key={img.id}
              {...img}
            />
          })
        }
      </div>}
    </>
  )
}

export default GifGrid;