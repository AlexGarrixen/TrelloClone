import React from 'react';
import { Skeleton, SkeletonPicture, SkeletonCol } from '../ui/Skeleton';

const SkeletonBoard = () => (
  <Skeleton spacing={3}>
    <SkeletonPicture />
    <SkeletonCol />
  </Skeleton>
);

const SkeletonBoards = ({ count = 7 }) => (
  <ul className='boards__grid'>
    {[...Array(count).keys()].map((idx) => (
      <SkeletonBoard key={idx} />
    ))}
  </ul>
);

export default SkeletonBoards;
