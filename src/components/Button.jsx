
export const Button = ({ label, iconURL, backgroundColor, borderColor,textColor, fullWidth, width}) => {
  return (
    <button 
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`
        : 'bg-coral-red text-white border-coral-red'} rounded-full ${fullWidth && 'w-full'} ${width && `${width}`}`}
    >
      {label}
      {iconURL && <img 
        src={iconURL}
        alt={label}
        className="ml-2 rounded-fulls w-5 h-5"
      />}
    </button>
  )
}
