import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Config } from '../../../assets/icons/config.svg'

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.lightGreen};
    padding: 24px 64px 24px 32px;
    border: 3px solid ${({ theme }) => theme.colors.black};
    position: sticky;
    bottom: 0;
    width: 100%;
    div {
        display: flex;
        align-items: center;
        gap: 0 32px;
        p {
            font-weight: 700;
            font-size: 18px;
        }
    }
    span {
        position: absolute;
        top: 8px;
        right: 8px;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};
        border: 3px solid ${({ theme }) => theme.colors.black};
        border-radius: 8px;
        padding: 14px 24px;
        font-size: 18px;
        font-weight: 700;
        background: inherit;
        transition: 0.2s ease;
        &:hover {
            transform: translateY(-4px);
        }
    }
`

const CloseButton = styled.div`
    position: relative;
    width: 32px;
    height: 32px;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        background: ${({ theme }) => theme.colors.black};
        width: 24px;
        height: 3px;
    }
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        background: ${({ theme }) => theme.colors.black};
        width: 24px;
        height: 3px;
    }
`
const Popup = () => {
    const [isVisible, setIsVisible] = useState(true)

    const removeElement = () => {
        setIsVisible((prev) => !prev)
    }

    return (
        <>
            {isVisible ? (
                <StyledWrapper>
                    <div>
                        <Config />
                        <p>
                            SEE THE RECORDED TALKS FROM FIGMA'S ANNUAL
                            CONFERENCE
                        </p>
                    </div>
                    <a href="">WATCH NOW</a>
                    <span>
                        <CloseButton onClick={removeElement} />
                    </span>
                </StyledWrapper>
            ) : null}
        </>
    )
}

export default Popup
