// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useGetPostsQuery } from '../../../redux/features/api/baseApi';

const Home = () => {

    const {data,isLoading} = useGetPostsQuery();
    console.log(data)

    return (
      <div className="my-10 mx-20">
        {data?.map((item) => (
          <div key={item.id} className=" p-10 bg-zinc-600  mb-3">
            <h3 className="text-xl mb-3 text-white ">{item.title}</h3>
            <h3 className="text-white">{item.body}</h3>
          </div>
        ))}
      </div>
    );
};

export default Home;