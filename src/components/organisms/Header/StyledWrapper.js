import styled from 'styled-components'
import { BorderBottomAnimation } from './BorderBottomAnimation'

export const StyledWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 100%;
    left: 50%;
    padding: 0;
    transform: translate(-50%, 0%);
    background: white;
    ul {
        min-width: max-content;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        padding: 0;
        list-style: none;
        border: 3px solid black;
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
