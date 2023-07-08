import React, { useState } from 'react'
import { ReactComponent as Logo } from '../../../assets/icons/figma.svg'
import Products from '../../molecules/Products/Products'
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg'
import Enterprise from '../../molecules/Enterprise/Enterprise'
import Resources from '../../molecules/Resources/Resources'
import {
    NavStyledListItem,
    StyledList,
    StyledListItem,
    StyledWrapper,
} from './Header.styles'
import GetStarted from '../../atoms/GetStarted/GetStarted'

const Header = () => {
    const [isProductHover, setIsProductHover] = useState(false)
    const [isEnterpriseHover, setIsEnterpriseHover] = useState(false)
    const [isResourcesHover, setIsResourcesHover] = useState(false)
    return (
        <StyledWrapper>
            <a href="">
                <Logo />
            </a>
            <StyledList>
                <StyledListItem
                    onClick={() => setIsProductHover(true)}
                    onMouseEnter={() => setIsProductHover(true)}
                    onMouseLeave={() => setIsProductHover(false)}
                >
                    <span>Products</span>
                    {isProductHover ? <Products /> : null}
                    <Arrow className="arrow" />
                </StyledListItem>
                <StyledListItem
                    onMouseEnter={() => setIsEnterpriseHover(true)}
                    onMouseLeave={() => setIsEnterpriseHover(false)}
                >
                    <span>Enterprise</span>
                    {isEnterpriseHover ? <Enterprise /> : null}
                    <Arrow className="arrow" />
                </StyledListItem>
                <NavStyledListItem href="">
                    <span>Pricing</span>
                </NavStyledListItem>
                <StyledListItem
                    onMouseEnter={() => setIsResourcesHover(true)}
                    onMouseLeave={() => setIsResourcesHover(false)}
                >
                    <span>Resources</span>
                    {isResourcesHover ? <Resources /> : null}
                    <Arrow className="arrow" />
                </StyledListItem>
                <NavStyledListItem href="">
                    <span>Community</span>
                </NavStyledListItem>
                <NavStyledListItem href="">
                    <span>Log in</span>
                </NavStyledListItem>
                <GetStarted fontSize="18px" />
            </StyledList>
        </StyledWrapper>
    )
}

export default Header
