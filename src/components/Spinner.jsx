
export const Spinner = ({className}) => (
    <div className={`${className} rounded-full border-collapse border-2 mt-[2px] animate-spin border-b-red-700`}></div>
)


export const SpinnerGeneral = () => {
  return (
      <div className="absolute top-0 left-0 w-full h-full bg-gray-100 bg-opacity-50 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin border-b-red-700" />
      </div>
  )
}

