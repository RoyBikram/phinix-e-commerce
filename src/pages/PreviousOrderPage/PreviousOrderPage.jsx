import React from 'react';
import { PreviousOrderPageContainer } from './PreviousOrderPageStyle';
import Heading from '../../components/Heading/Heading';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import { useSelector } from 'react-redux';
import PreviousOrderCard from '../../components/PreviousOrderCard/PreviousOrderCard';
import EmptyBox from '../../components/EmptyBox/EmptyBox'

export default function PreviousOrderPage() {
    const ConfirmOrdersData = useSelector((state) => {
        return state.Order.ConfirmOrder;
    });
    return (
        <>
            {!ConfirmOrdersData ? (
                <LoadingPage />
            ) : (
                <PreviousOrderPageContainer>
                    <Heading
                        mainHeading='Your Previous Orders'
                        subHeading='You Will Find All Of Your Previous Order.'
                    />
                    {ConfirmOrdersData.length === 0 ? (
                        <EmptyBox varient={'regular'} />
                    ) : (
                        <>
                            {ConfirmOrdersData.map((OrderData, Index) => {
                                return (
                                    <PreviousOrderCard
                                        key={Index}
                                        OrderData={OrderData}
                                    />
                                );
                            })}
                        </>
                    )}
                </PreviousOrderPageContainer>
            )}
        </>
    );
}
