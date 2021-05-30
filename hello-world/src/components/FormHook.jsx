import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

export function FormHook() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <Fragment>
      <h2>Form with the Library React Form Hook</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Write your name"
          {...register("name", {
            required: "Field required, please write your name",
          })}
        />
        <span>{errors?.name?.message}</span>
        <input
          type="text"
          placeholder="Write your surname"
          {...register("surname", {
            required: "Field required, please write your surname",
          })}
        />
        <span>{errors?.surname?.message}</span>
        <button type="submit">Send</button>
      </form>
    </Fragment>
  );
}
