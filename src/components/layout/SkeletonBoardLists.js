import React from 'react';
import {
  Skeleton,
  SkeletonPicture,
  SkeletonCol,
  SkeletonRow,
} from '../ui/Skeleton';

const SkeletonCard = () => (
  <Skeleton spacing={3}>
    <SkeletonPicture />
    <SkeletonCol />
    <SkeletonRow>
      <SkeletonCol cols={4} />
      <SkeletonCol cols={4} />
    </SkeletonRow>
  </Skeleton>
);

const SkeletonHeader = () => (
  <div className='board-header-actions'>
    <Skeleton spacing={3} className='w-48'>
      <SkeletonRow>
        <SkeletonCol cols={8} />
        <SkeletonCol cols={4} />
      </SkeletonRow>
    </Skeleton>
  </div>
);

const SkeletonListsGrid = () => (
  <ul className='board-lists-grid'>
    <li className='w-48 mr-4'>
      <div className='mb-4'>
        <SkeletonCard />
      </div>
      <div>
        <SkeletonCard />
      </div>
    </li>
    <li className='w-48'>
      <SkeletonCard />
    </li>
  </ul>
);

const SkeletonBoardLists = () => (
  <section className='board'>
    <SkeletonHeader />
    <SkeletonListsGrid />
  </section>
);

export default SkeletonBoardLists;
