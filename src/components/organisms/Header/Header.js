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
                    <Arrow className="arrow" />
                </StyledListItem>
                <StyledListItem
                    onMouseEnter={() => setIsEnterpriseHover(true)}
                    onMouseLeave={() => setIsEnterpriseHover(false)}
                >
                    <a href="">Enterprise</a>
                    {isEnterpriseHover ? <Enterprise /> : null}
                    <Arrow className="arrow" />
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
                    <Arrow className="arrow" />
                </StyledListItem>
                <NavStyledListItem>
                    <a href="">Community</a>
                </NavStyledListItem>
                <NavStyledListItem>
                    <a href="">Log in</a>
                </NavStyledListItem>
                <GetStarted />
            </StyledList>
        </StyledWrapper>
    )
}

export default Header
