type ButtonProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="my-5 w-full max-w-96 rounded border bg-primary p-2.5 font-secondary text-[1.5rem] font-bold text-white"
    >
      {children}
    </button>
  );
};

export default Button;
