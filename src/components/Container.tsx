type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto min-h-screen w-full bg-lightBackgroundColor tracking-[0.03em]">
      {children}
    </div>
  );
};

export default Container;
