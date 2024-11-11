type detailsProps = {
  placeholder: string;
};

const Details = ({ placeholder }: detailsProps) => {
  return (
    <div className="relative w-full text-[14px]">
      <p className="w-full rounded border border-secondary bg-transparent p-2 text-darkText">
        TEST
      </p>
      <span className="absolute start-2.5 top-0 -translate-y-1/2 bg-lightBackgroundColor p-0.5 font-secondary text-[12px] text-secondary">
        {placeholder}
      </span>
    </div>
  );
};

export default Details;
