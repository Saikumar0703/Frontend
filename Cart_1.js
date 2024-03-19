import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { removecart } from '../Redux/cardSlice'
import './cart.css'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart_1() {

    const dispatch = useDispatch()
    const data= useSelector((state)=>state.Mycart);
    console.log(data)

    const handleRemoveFromCart = (id) => {
      dispatch(removecart(id));
      toast.error('Removed from Cart', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
    

  return (

<div className="container mt-5 mb-5">
<ToastContainer />
  <div className="d-flex justify-content-center row">
    <div className="col-md-8">
      <div className="p-2">
        <h4>Shopping cart</h4>
        <div className="d-flex flex-row align-items-center pull-right"><i className="fa fa-angle-down" /></div>
      </div>
      {data.map((value,index)=>{
        return(
            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
        <div className="mr-1"><img className="rounded" src={value.img} width={70} /></div>
        <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{value.name}</span>
          <div className="d-flex flex-row product-desc">
            <div className="size mr-1"><span className="text-grey">Quentity:</span><span className="font-weight-bold">&nbsp;M</span></div>
            <div className="color"><span className="text-grey">Brand</span><span className="font-weight-bold">&nbsp;</span></div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger" />
          <h5 className="btn btn-danger text-grey mt-1 mr-1 ml-1" onClick={() => handleRemoveFromCart(value.id)}>Remove</h5><i className="fa fa-plus text-success" /></div>
        <div>
          <h5 className="text-grey">₹{value.price}</h5>
        </div>
        <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger" /></div>
      </div>
        )
      })}
      
      <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><input type="text" className="form-control border-0 gift-card" placeholder="discount code/gift card" /><button className="btn btn-outline-warning btn-sm ml-2" type="button">Apply</button></div>
      <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</button></div>
    </div>
  </div>
</div>

  )
}

