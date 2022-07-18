const Input = ({ placeholder, name, id, register, errors }) => {
  return (
    <div className="flex px-4 flex-col gap-4">
      <input
        placeholder={placeholder}
        id={id}
        name={name}
        className="bg-transparent rounded w-full placeholder:text-[#707070] text-[#707070] border-b border-b-[#707070] py-2 px-4 font-heading text-base  focus:outline-none  focus:border-[#707070] transition focus:ring-[#707070] focus:ring-1 duration-300"
        {...register(name, {
          required: `${placeholder} is required`,
          minLength: {
            value: 4,
            message: `${placeholder} must be more than 4 characters`,
          },
        })}
      />
      <p className="text-white font-normal text-sm font-body">
        {errors[name] && errors[name]?.message}
      </p>
    </div>
  );
};

export const FormInput = ({
  inputName,
  title,
  placeholder,
  type,
  py,
  register,
  errors,
}) => {
  const inputStyle = `px-6  py-${py} z-20 font-heading placeholder:text-purple text-purple bg-white rounded border border-white focus:outline-none  focus:border-white transition focus:ring-white focus:ring-1 duration-300 w-full`;
  return (
    <div className="flex flex-col w-full" key={inputName}>
      <label htmlFor={inputName} className="text-base text-white font-heading">
        {title}
      </label>
      <input
        placeholder={placeholder}
        name={inputName}
        type={type}
        className={inputStyle}
        id={inputName}
        {...register(inputName, {
          required: `${title} is required`,
          minLength: {
            value: 4,
            message: `${title} must be more than 4 characters`,
          },
        })}
      />
      <p className="text-white font-normal text-sm font-body">
        {errors[inputName] && errors[inputName]?.message}
      </p>
    </div>
  );
};

export default Input;
