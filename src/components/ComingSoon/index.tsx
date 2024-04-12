import { STATIC_MESSAGES } from '../../constants';

/**
 * Component to load coming soon pages
 *
 */
const ComingSoon = () => (
  <div className="text-dark flex h-[600px] items-center justify-center font-semibold text-3xl">
    {STATIC_MESSAGES.COMING_SOON}
  </div>
);

export default ComingSoon;
