type inputProps = {
  inputType?: string;
  inputName: string;
  inputId: string;
  placeholder: string;
};

const Input = ({ inputType, inputName, inputId, placeholder }: inputProps) => {
  return (
    <div className="relative w-full text-[14px]">
      <input
        className="w-full rounded border border-secondary bg-transparent p-2 text-darkText"
        type={inputType || "text"}
        name={inputName}
        id={inputId}
      />
      <span className="absolute start-2.5 top-0 -translate-y-1/2 bg-lightBackgroundColor p-0.5 font-secondary text-[12px] text-secondary">
        {placeholder}
      </span>
    </div>
  );
};

export default Input;
