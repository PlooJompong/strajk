type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="my-5 w-full max-w-96 rounded border bg-primary p-2.5 font-secondary text-[1.5rem] font-bold text-white">
      {children}
    </button>
  );
};

export default Button;
