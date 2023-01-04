import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const { price, patient, email, _id } = booking;

    useEffect(() => {
        // Create PaymentIntent As Soon As The Page Loads
        fetch("https://best-care-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    // Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            // Post Payment To Database
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            };
            fetch("https://best-care-server.vercel.app/payments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess('Your Payment Completed Successfully');
                        setTransactionId(paymentIntent.id);
                    }
                });
        }
        setProcessing(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className='bg-white p-6 rounded-lg'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <p className='text-sm text-error mt-1'>{cardError}</p>
                {
                    success && <>
                        <p className='text-sm text-green-500 mt-1'>{success}</p>
                        <p className='text-sm mt-1'>Your Transaction Id: <b>{transactionId}</b></p>
                    </>
                }
                <button className='btn btn-primary text-white mt-6' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;