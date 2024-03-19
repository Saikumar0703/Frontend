import React, { useEffect, useState } from 'react';
import Myapi from './Api';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addcart , removecart } from '../Redux/cardSlice';
import { useDispatch } from 'react-redux';
import './home.css'

export default function Home() {
    const [data, setdata] = useState();
    const [householdData, setHouseholdData] = useState();
    const dispatch=useDispatch()

    useEffect(() => {
        setdata(Myapi.data[0].productList);
        setHouseholdData(Myapi.data[1].productList);
    }, []);



    const handleAddToCart = (value) => {
        dispatch(addcart(value));
        toast.success('Added to Cart', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };
    
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
        <div>
            <ToastContainer />
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1>Cosmetics</h1>
                            <hr />
                            <div className='container d-flex flex-wrap justify-content-center align-items-center'>
                                {data?.map((value, index) => (
                                    <div className="card mx-5 col-12 col-sm-6 col-lg-6" style={{ width: '18rem'}} key={index}>
                                        <img src={value.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.name}</h5>
                                            <p className="card-text">Price: ₹{value.price}</p>
                                            <div className='d-flex flex-wrap justify-content-between align-items-center'>
                                            <a  className="btn btn-success mx-2" onClick={() => handleAddToCart(value)}>Add to Cart</a>
                                            <a  className="btn btn-danger"  onClick={() => handleRemoveFromCart(value.id)}>Remove Cart</a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1>Household</h1>
                            <hr />
                            <div className='container d-flex flex-wrap justify-content-center align-items-center'>
                                {householdData?.map((value, index) => (
                                    <div className="card mx-5 col-12 col-sm-6 col-lg-6" style={{ width: '18rem'}} key={index}>
                                        <img src={value.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.name}</h5>
                                            <p className="card-text">Price: ₹{value.price}</p>
                                            <div className='d-flex flex-wrap justify-content-between align-items-center'>
                                            <a href="#" className="btn btn-success mx-2" onClick={() => handleAddToCart(value)}>Add to Cart</a>
                                            <a href="#" className="btn btn-danger" onClick={() => handleRemoveFromCart(value.id)}>Remove Cart</a>
                                            </div>
                                             </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
