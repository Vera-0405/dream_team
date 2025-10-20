import { useForm } from "react-hook-form";

export const TestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);

    console.log("SUBMIT!");
  };


  // TODO: regex
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        username
        <input
          type="text"
          id="userName"
          {...register("userName", {
            required: "Wrong input. Try again",
            maxLength: {
              value: 10,
              message: "max 10 characters allowed",
            },
            minLength: {
              value: 3,
              message: "user name should be more than 3 characters",
            },
          })}
        />
        
      </div>
      <div>
        email
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "это поле обязательное",
            pattern: {
              value: "",
              message: "incorrect email",
            },
          })}
        />
     
      </div>
      <div>
        tel
        <input
          type="tel"
          id="tel"
          {...register("tel", {
            validate: (value) => {
              // "4(23) 423-4"
              if (value) {
                return true;
              } else {
                return "please fill in phone number";
              }
            },
          })}
        />
      </div>
      {errors.userName && <span>{errors.userName.message}</span>}
         {errors.email && <span>{errors.email.message}</span>}

      <button type="submit">get a discount</button>
    </form>
  );
};
