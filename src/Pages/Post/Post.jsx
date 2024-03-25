// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm } from 'react-hook-form';

const Post = () => {
  const {register, handleSubmit,reset} = useForm();
  const onsubmit=(data)=>{
    console.log(data)
    reset()
  }
    return (
      <div className="bg-zinc-800 h-screen">
        <h3 className="text-center text-xl font-bold mb-5">Post Page</h3>
        <div className="w-6/12 mx-auto bg-zinc-600 p-5 rounded">
          <form action="" onSubmit={handleSubmit(onsubmit)}>
            <label htmlFor="" className=" text-lg text-white font-bold mb-2">
              Text Type
            </label><br />
            <input
              {...register("post", { required: true })}
              type="text"
              placeholder="Text type here"
              className="input input-bordered w-full  mb-3 mt-2"
            /> <br />
            <button className="bg-green-500 text-white text-lg px-5 py-1 rounded" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
};

export default Post;