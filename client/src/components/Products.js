import React from 'react'
import ProductCart from './ProductCart'

const Products = ({products}) => {
    console.log(products);
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
                Shopping everyday
            </h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700] text-gray-600 text-center'>
                "Làm sao để chúng ta chống lại việc kỳ vọng vào một thứ gì đó không chắc chắn? 
                Câu hỏi này luôn hiện diện trong suy nghĩ của chúng ta. Đôi khi,
                cuộc sống trở nên mơ hồ như những cơn mưa rào đầu mùa,
                làm người ta cảm thấy mình đang đi lạc vào mê cung của thế giới.
                Những lúc như vậy, chúng ta cần phải tìm thấy định hướng, dẫn đường cho bản thân,
                và tạo ra những ý nghĩa riêng của cuộc sống."
            </p>
        </div>

        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
            {products.map((item)=>(
                <ProductCart key={item._id} products={item}/>
            ))}
        </div>
    </div>
  )
}

export default Products;