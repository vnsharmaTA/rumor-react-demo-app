import { IInputProps } from '../../types';

/**
 * Component to load atomic inputs
 *
 * @param {IInputProps} { className, id, type, label, ...rest }
 */
const RInput = ({ className, id, type, label, ...rest }: IInputProps) => (
  <div>
    <label htmlFor={id} className="block text-[14px] text-dark pb-[8px]">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className={`text-dark bg-white border text-sm rounded-[64px] focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-3  ${className}`}
      {...rest}
    />
  </div>
);

export default RInput;
