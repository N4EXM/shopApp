import { useNavigate } from "react-router-dom";

const DealsCard = ({ category, title, content, cardImage, path, extraClasses }) => {
  const navigate = useNavigate();

  return (
    <div className={`${extraClasses}`}>
      <div className={`flex flex-row items-stretch p-3 rounded-lg md:p-7 h-36 bg-gradient-to-tr from-primary to-tertiary dark:from-darkPrimary dark:to-darkTertiary md:h-80 lg:h-[28rem] lg:p-20`}>

        {/* Text Content */}
        <div className="flex flex-col justify-between w-3/5 pr-4 text-darkText"> {/* Added pr-4 for padding */}
          <div className="flex flex-col gap-2 lg:gap-4">
            <h6 className="text-xs md:text-sm dark:text-darkText/80">{category}</h6>
            <h1 className="font-semibold md:text-xl text-wrap">{title}</h1> {/* line-clamp for overflow */}
            <p className="text-lg font-semibold sm:hidden md:block md:text-wrap">{content}</p>
          </div>
          <button 
            onClick={() => navigate(`/${path}`)} 
            className="self-start p-2 px-4 mt-2 text-xs font-medium rounded-sm md:text-base md:p-3 md:px-6 w-fit text-rich-black bg-background text-text"
          >
            Buy Now
          </button>
        </div>

        {/* Image Container */}
        <div className="relative flex items-center justify-center w-2/5">
          <img 
            className="object-contain w-full h-auto max-h-[90%] max-w-[90%]" 
            src={cardImage} 
            alt={title}
          />
        </div>

      </div>
    </div>
  );
};

export default DealsCard;