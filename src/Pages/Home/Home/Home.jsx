// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useGetPostsQuery } from '../../../redux/features/api/baseApi';
import { Link } from 'react-router-dom';

const Home = () => {

    const {data,isLoading,isError} = useGetPostsQuery();
    console.log(data)
    if(isLoading){
      return <p className='text-2xl text-red-600 text-center mb-5'>Loading.....</p>
    }

    if(!isLoading && isError){
      return <p className='text-white text-center text-2xl py-5'>Something is Error..!</p>
    }
    return (
      <div className="my-10 mx-20">
        {data?.map((item) => (
          <>
            <Link to={`/posts/${item.id}`}>
              <div key={item.id} className=" p-10 bg-zinc-600  mb-3">
                <h3 className="text-xl mb-3 text-white ">{item.title}</h3>
                <h3 className="text-white">{item.body}</h3>
              </div>
            </Link>
          </>
        ))}
      </div>
    );
};

export default Home;