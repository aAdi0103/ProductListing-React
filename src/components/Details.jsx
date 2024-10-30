import { useEffect, useState } from 'react';
import axios from '../utils/axios'
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading'


const Details = () => {
    const [pro,setPro]=useState(null)
    const {id}=useParams();

         const getSingleProduct = async () =>{
            try{
              const {data}= await axios.get(`/products/${id}`);
              setPro(data);
            }catch(err){
      console.log(err);
            }
         }

         useEffect(()=>{
            getSingleProduct();
         },[]);

    return pro ? (
    <>
  <div className="w-full h-screen flex items-center justify-center">
  <div className="flex items-start space-x-8 p-4 border rounded-lg shadow-lg bg-white">
    <img
      alt="A navy blue backpack with a brown leather logo patch on the front flap"
      className="w-[150px] h-[150px] object-cover"
      src={pro.image}
      width="150"
      height="150"
    />
    <div className="max-w-[300px]">
      <h1 className="text-2xl font-semibold truncate">
        {pro.title}
      </h1>
      <p className="text-gray-500 mt-1">
        {pro.category}
      </p>
      <p className="text-red-500 text-xl font-semibold mt-2">
        {pro.price}
      </p>
      <p className="text-gray-700 mt-4 line-clamp-3">
        {pro.description}
      </p>
      <div className="mt-4 space-x-2">
        <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded">
          Edit
        </button>
        <button className="px-4 py-2 bg-red-100 text-red-700 rounded">
          Delete
        </button>
      </div>
    </div>
  </div>
</div>

    </>
    ) : (
    <Loading></Loading>
    );
   
   }
   export default Details


