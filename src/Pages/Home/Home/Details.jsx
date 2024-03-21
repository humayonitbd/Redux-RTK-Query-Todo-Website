// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useGetPostByIdQuery } from '../../../redux/features/api/baseApi';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    console.log(id)
    const {data:item}= useGetPostByIdQuery(id);
    console.log(item)
    return (
      <div className="my-20 mx-20">
          <div  className=" p-10 bg-zinc-600  mb-3">
            <h3 className="text-xl mb-3 text-white ">{item?.title}</h3>
            <h3 className="text-white">{item?.body}</h3>
            {/* <h2>hi</h2> */}
          </div>
       
      </div>
    );
};

export default Details;