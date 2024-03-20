// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useGetPostsQuery } from '../../../redux/features/api/baseApi';

const Home = () => {

    const datas = useGetPostsQuery();
    console.log(datas)

    return (
      <div className="">
        <h2>Posts Data {datas.data.length}</h2>
      </div>
    );
};

export default Home;