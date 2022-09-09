import { Typography } from '@mui/material'
import React from 'react'
import ProductNotAvailable from '../../../components/Product/ProductNotAvailable'
import ProductSpecs from '../../../components/Product/ProductSpecs'
import ProductToolbar from '../../../components/Product/ProductToolbar'
import ProductSwiper from '../../../components/Product/ProductSwiper'
import ProductVendor from '../../../components/Product/ProductVendor'
import BoxItems from '../../../components/Ui/BoxItems/BoxItems'
import { toast } from 'react-toastify'
import axios from 'axios';
import { profile } from '../../../redux/actions';
import {useDispatch, useSelector  } from 'react-redux';
import * as e from '../../../redux/endpoints'
import AddToCardButton from '../../../components/elements/AddToCardButton'
import Breadcrumb from '../../../components/Breadcrumb'
import ProductGuarantee from '../../../components/Product/ProductGuarantee'
import ProductSend from '../../../components/Product/ProductSend'

function Product({product, similar_products, handleLoginOpen}) {
  
  const ProductSuggested = [
    {
        id: 1,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10 (1)f.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
    {
        id: 2,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
    {
        id: 3,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
    {
        id: 4,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
    {
        id: 5,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
    {
        id: 6,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
    {
        id: 7,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
    {
        id: 8,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
];
  const toggle_reminder = ()=>{
    axios.post(e.TOGGLE_REMINDER, {product_id:product.id})
    .then((response)=>{
      const {error, message} = response.data
      toast(message, {type: (error? "error": "success")})
      dispatch(profile())
    })
    .catch(e=>{toast.error("خطا در برقراری ارتباط")})
  }


  const dispatch = useDispatch()
  const user = useSelector(s=>s.auth.user)


  const [isFavorite, setIsFavorite] = React.useState(false)
  const [reminderActive, setReminderActive] = React.useState(false)
  const [current, setCurrent] = React.useState(false)


  React.useEffect(()=>{
    setIsFavorite(user&&user.favorite_set?.find(item=>item.product_id.id === product.id))
    setReminderActive(user&&user.reminder_set?.find(item=>item.product_id.id === product.id))
  }, [user])
  console.log(product);
  return (
    <section id="product-page" className="container_custom">
      <Breadcrumb product={product} />

      <div className="product-main row">
        <div className='col-lg-8 col-12'>
         <div className='card mx-1 my-1 row'>
        <div className="row row-cols-2">
            <div className="col-lg-6 col-12 p-3 my-2">
                <ProductSwiper product={product}/>
            </div>
            <div className="col-lg-3 col-12 p-3  my-2">
               <ProductToolbar product_id={product.id} toggle_reminder={toggle_reminder} reminderActive={reminderActive} isFavorite={isFavorite}/>
                
                <Typography component="h1" fontSize="20px">{product.name}</Typography>
              
            </div>
            <div classNmae="col-lg-9 col-12 my-5">
                 <ProductSpecs product={product} current={current} setCurrent={setCurrent}/>
            </div>
        </div>
          
        </div>
        </div>
        <div className='col-lg-4 col-12 position-sticky'>
        <div className='card my-1 '>   
          <ProductVendor product={product}/>    
          <ProductSend product={product} current={current}/>   
           <div className="container py-4 text-center">
           {
                current?.count > 0?
                <>
                <Typography fontSize="30px" className="d-inline-block">{Number(current.price).toLocaleString("fa")} </Typography> <span>{" تومان"}</span>
                <br />
                <AddToCardButton template_id={product?.id} large handleLoginOpen={handleLoginOpen}/>
                </> 
                :
                <ProductNotAvailable  product_id={product.id} toggle_reminder={toggle_reminder} reminderActive={reminderActive} />
            }

           </div>
           <ProductGuarantee/>
          </div>
        
        </div>
        <div className='row'>
          <div className='col-12 mt-5'>
            <BoxItems boxClasses="my-5" items={ProductSuggested} title={'محصولات مشابه'} />
          </div>
        </div>
      </div>
    </section>
  )
}
export async function getServerSideProps ({query}){
  let product = {}

  let {product_slug} = query
  try{
      product_slug = product_slug.split('-')[0]
      const res2    = await fetch(e.GET_PRODUCT_BY_ID(product_slug))
      product  = await  res2.json()
  }
  catch(e){
      console.log(e)
  }
  return {
      props: {
          product: product?.product || {},
          similar_product: product?.similar_products || []
      }
  }
}
export default Product