type DetailsProps = {
  placeholder: string;
  text: string;
};

const Details: React.FC<DetailsProps> = ({
  placeholder,
  text,
}: DetailsProps) => {
  return (
    <div className="relative w-full text-[0.875rem]">
      <p className="w-full rounded border border-secondary bg-transparent p-2 font-secondary tracking-[0.03em] text-darkText">
        {text}
      </p>
      <span className="absolute start-2.5 top-0 -translate-y-1/2 bg-lightBackgroundColor p-0.5 font-secondary text-[0.75rem] text-secondary">
        {placeholder}
      </span>
    </div>
  );
};

export default Details;
