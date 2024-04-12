import { FC, useEffect, useState } from 'react';
import { ILazyImageProps } from '../../types';

const LazyImage: FC<ILazyImageProps> = ({
  placeholderSrc,
  src,
  alt,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onImageLoad = () => {
      setLoaded(true);
    };
    const image = new Image();
    image.src = src;
    image.addEventListener('load', onImageLoad);
    return () => {
      image.removeEventListener('load', onImageLoad);
    };
  }, [src]);

  return (
    <img
      loading="lazy"
      src={loaded ? src : placeholderSrc}
      alt={alt}
      {...rest}
    />
  );
};

export default LazyImage;
