import React from 'react';
import { PreviousOrderPageContainer } from './PreviousOrderPageStyle';
import Heading from '../../components/Heading/Heading';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import { useSelector } from 'react-redux';
import PreviousOrderCard from '../../components/PreviousOrderCard/PreviousOrderCard'

export default function PreviousOrderPage() {
    const ConfirmOrdersData = useSelector((state) => {
        return state.Order.ConfirmOrder;
    });
    return (
        <>
            {(!ConfirmOrdersData) ? (
                <LoadingPage />
            ) : (
                <PreviousOrderPageContainer>
                    <Heading
                        mainHeading='Your Previous Orders'
                        subHeading='Take a look everything before make payment.'
                    />
                        {
                            ConfirmOrdersData.map((OrderData, Index) => { 
                                return (<PreviousOrderCard key={Index} OrderData={OrderData}/>)
                             })
                    }
                </PreviousOrderPageContainer>
            )}
        </>
    );
}
