type InputErrorProps = {
  children: React.ReactNode;
};
const InputError = ({ children }: InputErrorProps) => {
  return (
    <div className="my-5 w-full max-w-96 text-wrap rounded border bg-primary p-2 text-center font-secondary text-[0.8rem] italic text-white">
      <p>{children}</p>
    </div>
  );
};

export default InputError;
