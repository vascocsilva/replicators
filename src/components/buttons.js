import styled from 'styled-components'

import { colors } from '../constants/colors'

export const Button = styled.button`
    appearance: none;
    background-color: ${colors.black};
    border: 1px solid ${colors.mainBlue};
    color: ${colors.mainBlue};
    font-size: 14px;
    height: 50px;
    width: 200px;
    text-transform: uppercase;
`

export const ButtonSec = styled(Button)`
    border: 0;
    font-size: 40px;
    height: 100%;
    width: 90px;
`

export const CircularButton = styled(Button)`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    font-size: 40px;
`

