import styled from 'styled-components'
import { BorderBottomAnimation } from './BorderBottomAnimation'

export const StyledWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 100%;
    left: 50%;
    padding: 0;
    transform: translate(-50%, 0%);
    ul {
        border: 3px solid black;
        display: flex;
        margin: 0 auto;
        padding: 0;
        flex-direction: column;
        list-style: none;
        min-width: max-content;
        li {
            padding: 16px 24px;
            &:hover {
                a {
                    position: relative;
                    &::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -7px;
                        width: 100%;
                        height: 3px;
                        background: black;
                        animation: ${BorderBottomAnimation} 0.2s ease forwards;
                    }
                }
            }
        }
        p {
            font-weight: 300;
        }
    }
`
