import { memo } from 'react';
import type { RandomTransform } from '../../../types/thirdPage.types';
import OptimizedImage from './OptimizedImage';

interface ImageGridProps {
  images: readonly string[];
  isVisible: boolean;
  randomTransforms: RandomTransform[];
}

const ImageGrid = memo(
  ({ images, isVisible, randomTransforms }: ImageGridProps) => {
    return (
      <div
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6'
        style={{
          position: 'relative',
          width: '100%',
        }}
      >
        {images.map((src, idx) => (
          <div key={idx} className='aspect-[4/3] w-full'>
            <OptimizedImage
              src={src}
              index={idx}
              isVisible={isVisible}
              randomTransform={randomTransforms[idx]}
            />
          </div>
        ))}
      </div>
    );
  }
);

ImageGrid.displayName = 'ImageGrid';

export default ImageGrid;
