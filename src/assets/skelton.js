import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Skelton = ({count = 0}) => {
  return <Skeleton count={count} /> 

}

export default Skelton