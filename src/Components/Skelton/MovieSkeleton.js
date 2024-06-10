import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MovieSkeleton = ({ count, isSmall }) => {
  const skeletonContainerStyle = {
    display: 'flex',
    overflowY: 'hidden',
    overflowX: 'scroll',
    padding: '20px',
  };

  const skeletonItemStyle = {
    marginRight: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
  };
  const height = isSmall ? 130 : 180
  
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={skeletonContainerStyle}>
        {Array(count)
          .fill()
          .map((_, index) => (
            <div key={index} style={skeletonItemStyle}>
              <Skeleton height={height} width={270} />
            </div>
          ))}
      </div>
    </SkeletonTheme>
  );
};

export default MovieSkeleton;
