type DividerProps = {
  dividerText: string;
};

const Divider = ({ dividerText }: DividerProps) => {
  return (
    <span className="mx-auto my-3 flex w-full max-w-[400px] items-center font-primary text-[24px] text-secondary">
      <span className="h-px flex-1 bg-secondary"></span>
      <span className="shrink-0 px-2">{dividerText}</span>
      <span className="h-px flex-1 bg-secondary"></span>
    </span>
  );
};

export default Divider;
