"use client"
import { useRouter } from 'next/navigation';

const Part = (props) => {
    const { _id, name, image, description, minimumQuantity, quantity, price } = props.part;
    const router = useRouter('/')
    return (
        <div className='mb-4'>
            <img src={image} className='w-1/2 mx-auto' alt="" />
            <h4>Name : {name}</h4>
            <p>Description : {description}</p>
            <p>Minimum Buy Quantity : {minimumQuantity}</p>
            <p>Available Quantity : {quantity}</p>
            <p>Price : ${price}</p>
            <button onClick={() => router.push(`/${_id}`)} className='btn btn-primary rounded-lg'>Place Order</button>
        </div>
    );
};

export default Part;