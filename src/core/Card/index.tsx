import { FC, ReactNode } from 'react';

/**
 * Componet to load atomic card components
 *
 * @param {*} { children }
 */
const Card: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="p-3 bg-white border rounded-full mb-3">{children}</div>
);
export default Card;
