import React, { useState } from 'react'
import { ReactComponent as Logo } from '../../../assets/icons/figma.svg'
import styled from 'styled-components'
import Products from '../../molecules/Products/Products'
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg'
import Enterprise from '../../molecules/Enterprise/Enterprise'
import Resources from '../../molecules/Resources/Resources'
import { BorderBottomAnimation } from './BorderBottomAnimation'

const StyledWrapper = styled.div`
    padding: 24px 48px;
    display: flex;
    justify-content: space-between;
`

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    gap: 24px;
`

const StyledListItem = styled.li`
    display: flex;
    gap: 6px;
    align-items: center;
    position: relative;
    padding: 8px 0;

    img {
        overflow: hidden;
        pointer-events: none;
    }
    a {
        text-decoration: none;
        color: black;
        position: relative;
    }
`

const NavStyledListItem = styled.li`
    position: relative;
    padding: 8px 0;

    img {
        overflow: hidden;
        pointer-events: none;
    }

    a {
        text-decoration: none;
        color: black;
        position: relative;
    }
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
`
const GetStarted = styled.a`
    background: rgb(85, 81, 255);
    color: rgb(255, 255, 255);
    border-radius: 10px;
    border: none;
    font-weight: 700;
    font-size: 18px;
    padding: 14px 24px 16px;
    margin: 0 0 0 8px;
    transition: 0.2s ease;

    &:hover {
        transform: translateY(-4px);
    }
`

const Header = () => {
    const [isProductHover, setIsProductHover] = useState(false)
    const [isEnterpriseHover, setIsEnterpriseHover] = useState(false)
    const [isResourcesHover, setIsResourcesHover] = useState(false)
    return (
        <StyledWrapper>
            <div>
                <Logo />
            </div>
            <StyledList>
                <StyledListItem
                    onMouseEnter={() => setIsProductHover(true)}
                    onMouseLeave={() => setIsProductHover(false)}
                >
                    <a href="">Products</a>
                    {isProductHover ? <Products /> : null}
                    <Arrow />
                </StyledListItem>
                <StyledListItem
                    onMouseEnter={() => setIsEnterpriseHover(true)}
                    onMouseLeave={() => setIsEnterpriseHover(false)}
                >
                    <a href="">Enterprise</a>
                    {isEnterpriseHover ? <Enterprise /> : null}
                    <Arrow />
                </StyledListItem>
                <NavStyledListItem>
                    <a href="">Pricing</a>
                </NavStyledListItem>
                <StyledListItem
                    onMouseEnter={() => setIsResourcesHover(true)}
                    onMouseLeave={() => setIsResourcesHover(false)}
                >
                    <a href="">Resources</a>
                    {isResourcesHover ? <Resources /> : null}
                    <Arrow />{' '}
                </StyledListItem>
                <NavStyledListItem>
                    <a href="">Community</a>
                </NavStyledListItem>
                <NavStyledListItem>
                    <a href="">Log in</a>
                </NavStyledListItem>
                <GetStarted>Get started for free</GetStarted>
            </StyledList>
        </StyledWrapper>
    )
}

export default Header
