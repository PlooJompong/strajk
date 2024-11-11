type inputSectionProps = {
  children: React.ReactNode;
};

const InputSection = ({ children }: inputSectionProps) => {
  return (
    <section className="mx-auto flex w-full max-w-96 flex-col items-center justify-center gap-5">
      {children}
    </section>
  );
};

export default InputSection;
