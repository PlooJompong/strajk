type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const Input: React.FC<InputProps> = ({
  type,
  name,
  id,
  label,
  value,
  min,
  max,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <div className="relative w-full text-[0.875rem]">
      <input
        className="w-full rounded border border-secondary bg-transparent p-2 text-darkText focus:outline-secondary"
        type={type}
        name={name}
        id={id}
        value={value}
        min={min}
        max={max}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span className="absolute start-2.5 top-0 -translate-y-1/2 bg-lightBackgroundColor p-0.5 font-secondary text-[0.75rem] text-secondary">
        {label}
      </span>
    </div>
  );
};

export default Input;
