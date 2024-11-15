type InputProps = {
  inputType: string;
  inputName: string;
  inputId: string;
  label: string;
  value?: string | number;
  min?: string | number;
  max?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  inputType,
  inputName,
  inputId,
  label,
  value,
  min,
  max,
  onChange,
}: InputProps) => {
  return (
    <div className="relative w-full text-[0.875rem]">
      <input
        className="w-full rounded border border-secondary bg-transparent p-2 text-darkText focus:outline-secondary"
        type={inputType}
        name={inputName}
        id={inputId}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
      <span className="absolute start-2.5 top-0 -translate-y-1/2 bg-lightBackgroundColor p-0.5 font-secondary text-[0.75rem] text-secondary">
        {label}
      </span>
    </div>
  );
};

export default Input;
