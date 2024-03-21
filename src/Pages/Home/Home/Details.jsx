// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useGetPostByIdQuery } from '../../../redux/features/api/baseApi';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams()
    const {data:item}= useGetPostByIdQuery(id)
    return (
      <div className="my-10 mx-20">
          <div  className=" p-10 bg-zinc-600  mb-3">
            <h3 className="text-xl mb-3 text-white ">{item.title}</h3>
            <h3 className="text-white">{item.body}</h3>
          </div>
       
      </div>
    );
};

export default Details;