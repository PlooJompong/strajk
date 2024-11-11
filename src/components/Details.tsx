type detailsProps = {
  placeholder: string;
};

const Details = ({ placeholder }: detailsProps) => {
  return (
    <div className="relative w-full text-[0.875rem]">
      <p className="w-full rounded border border-secondary bg-transparent p-2 font-secondary tracking-[0.03em] text-darkText">
        TEST
      </p>
      <span className="absolute start-2.5 top-0 -translate-y-1/2 bg-lightBackgroundColor p-0.5 font-secondary text-[0.75rem] text-secondary">
        {placeholder}
      </span>
    </div>
  );
};

export default Details;
