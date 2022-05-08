import { Variables } from '../../variables/variables';
import styled from 'styled-components';

export const EmptyBoxContainer = styled.div`
    margin: 0 auto 0 auto;
    .EmptyBoxAni {
        ${({ varient }) => {
            let StyleString = null;
            switch (true) {
                case varient === 'regular':
                    StyleString = 'height: 300px;';
                    break;

                case varient === 'sad':
                    StyleString = 'height: 400px;';
                    break;

                default:
                    break;
            }
            return StyleString;
        }}

    }
`;
