import React from 'react'
import {HeadingContainer, MainHeading, SubHeading} from './HeadingStyle'

export default function Heading({mainHeading, subHeading}) {
    return (
        <HeadingContainer>
            <MainHeading>{ mainHeading}</MainHeading>
            <SubHeading>{subHeading}</SubHeading>
        </HeadingContainer>
    )
}
