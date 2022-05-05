import React from 'react';
import { PreviousOrderCardContainer,MainContent,Heading } from './PreviousOrderCardStyle'
import OrderProductCard from '../../components/OrderProductCard/OrderProductCard'
import PriceDetailsCard from '../../components/PriceDetailsCard/PriceDetailsCard'

export default function PreviousOrderCard({ OrderData }) {
    const UserAddress = OrderData.MetaData.address
    const TimeStamp = OrderData.MetaData.timestamp
    const TotalAmount = OrderData.MetaData.total_amount
    console.log()
    const FormattedTime = (new Date(TimeStamp.seconds*1000)).toLocaleTimeString()
    const FormattedDate = (new Date(TimeStamp.seconds*1000)).toDateString()
    const Products = OrderData.Products
    return (
        <PreviousOrderCardContainer>
            <Heading>Ordered On {FormattedDate}  , At {FormattedTime}</Heading>
            <MainContent>
                <div className='OrderProductCard'>
                    {Products.map((Product, index) => {
                        return (
                            <OrderProductCard
                                key={index}
                                data={Product}
                            ></OrderProductCard>
                        );
                    })}
                </div>
                <div className='AddressCardContainer'>
                    <div className='Heading'>Shipping Address</div>
                    <div className='TopPart'>
                        <div className='Name'>{UserAddress.name}</div>
                        <div className='PhoneNumber'>
                            {UserAddress.mobile_number}
                        </div>
                    </div>
                    <div className='BottomPart'>
                        {`${UserAddress.country}, ${UserAddress.state}, ${UserAddress.district}, ${UserAddress.city_town}, ${UserAddress.landmark} - ${UserAddress.pin}`}
                    </div>
                </div>
                <PriceDetailsCard
                    className='PriceSummaryContainer'
                    // TODO :  ADD Dynamic card Value 
                    CardValue={TotalAmount}
                    // TODO : Remove the HandelButtonClick
                    ButtonLabel={'Confirm Order'}
                    ButtonDisplay={false}
                    IsSticky = {false}
                ></PriceDetailsCard>
            </MainContent>
        </PreviousOrderCardContainer>
    );
}
