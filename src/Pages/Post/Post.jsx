// eslint-disable-next-line no-unused-vars
import React from 'react';

const Post = () => {
    return (
      <div>
        <h3 className='text-center text-xl font-bold mb-5'>Post Page</h3>
        <div className='w-8/12 mx-auto'>
          <form action="">
            <label htmlFor="" className='text-lg text-black mb-2' >Text Type</label>
            <input
              type="text"
              placeholder="Text type here"
              className="input input-bordered w-full max-w-xs mb-3"
            />
            <button className='bg-green-500 text-white text-lg' type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
};

export default Post;