import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCard } from '../redux/bazarSlide';
import {ToastContainer, toast} from "react-toastify";
const ProductCart = ({products}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = products.title;
  const idString = (_id)=>{
    return String(_id).toLowerCase().split(" ").join("");
  }
  const roodId = idString(_id)

  const handleDetails=()=>{
    navigate(`/product/${roodId}`,{
      state:{
        item: products,
      },
    })
  }
  return (
    <div className='group relative'>
        <div onClick={handleDetails} 
             className='w-full h-96 cursor-pointer overflow-hidden'>
            <img  className='w-full h-full object-cover group-hover:scale-110 duration-500'
                  src={products.image} 
                  alt='productImg'
            />
        </div>
        <div className='w-full border-[1px] px-2 py-4'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='font-titleFont text-base font-bold'>
                        {products.title.substring(0,15)}
                    </h2>
                </div>
                <div className='flex justify-end gap-2 relative overflow-hidden w-28 '>
                    <div className='flex gap-2 transform group-hover:translate-x-24
                                    transition-transform duration-500'>
                        <p className='line-through text-gray-500'>${products.oldPrice}</p>
                        <p className='font-semibold'>${products.price}</p>
                    </div>
                    <p onClick={()=>dispatch
                              (addToCard({
                                _id: products._id,
                                title: products.title,
                                image: products.image,
                                price: products.price,
                                quantity: 1,
                                description: products.description,
                              })
                              )& toast.success(`${products.title} is Added`)
                            } 
                    className='absolute z-20 w-[100] text-gray-500 hover:text-gray-900 flex
                                  items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0
                                  transition-transform cursor-pointer duration-500' >
                                  add to cart 
                                  <span>
                                      <BsArrowRight/>
                                  </span>
                    </p>
                </div>
            </div>
            <div>
                <p>{products.category}</p>
            </div>
            <div className='absolute top-4 right-0'>
                {products.isNew && 
                  <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>
                    Sale
                  </p>
                }
            </div>
        </div>
        <ToastContainer
          position = "top-left"
          autoClose = {2000}
          hideProgressBar = {false}
          newestOnTop = {false}
          closeOnClick
          rtl = {false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme = "dark"
        />
    </div>
  )
}

export default ProductCart