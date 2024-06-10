// src/components/BannerSkeleton.js
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BannerSkeleton = () => {
  const skeletonBannerStyle = {
    height: '448px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#202020',
    padding: '20px',
    boxSizing: 'border-box'
  };

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={skeletonBannerStyle}>
        <Skeleton height={40} width={300} style={{ marginBottom: '10px' }} />
        <Skeleton height={25} width={200} style={{ marginBottom: '20px' }} />
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <Skeleton height={40} width={100} style={{ marginRight: '10px' }} />
          <Skeleton height={40} width={100} />
        </div>
        <Skeleton height={100} width={360} />
      </div>
    </SkeletonTheme>
  );
};

export default BannerSkeleton;
