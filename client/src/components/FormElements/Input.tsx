type InputProps = {
  type: string | number | any;
  name: string;
  placeholder: string;
  value: any;
  onChange: (e: any) => void;
  error?: any;
};

const Input = ({
  type = "text",
  name = "Empty",
  placeholder = "",
  value = "",
  onChange,
  error,
}: InputProps) => {
  return (
    <div className="w-full bg-white">
      <div className="relative z-0 w-full group">
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className={
            error
              ? "block py-2.5 px-0 w-full text-sm text-red-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
              : "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          }
          placeholder=" "
        />
        <label
          htmlFor={name}
          className={
            error
              ? "peer-focus:font-medium absolute text-sm text-red-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              : "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          }
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
};

export default Input;
