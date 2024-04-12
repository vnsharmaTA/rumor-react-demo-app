import { FC } from 'react';
import { ILoadingSkeletonProps } from '../../types';
import { STATIC_MESSAGES } from '../../constants';

/**
 * Component to load skeleton loaders
 *
 * @param {*} {
 *   count,
 *   containerClass,
 * }
 */
const LoadingSkeleton: FC<ILoadingSkeletonProps> = ({
  count,
  containerClass,
}) => (
  <div
    className={`rounded-[20px] w-full  p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 ${
      containerClass ?? 'bg-white'
    }`}
  >
    {Array.from({ length: count ?? 7 }, (_, index) => index + 1).map(item => (
      <div
        key={item}
        className={`flex items-center justify-between pt-4 ${
          item !== 1 ? 'pt-4' : ''
        }`}
      >
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
      </div>
    ))}

    <span className="sr-only">{STATIC_MESSAGES.LOADING}</span>
  </div>
);

export default LoadingSkeleton;
