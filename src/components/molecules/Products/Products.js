import React from 'react'
import { ReactComponent as Figma } from '../../../assets/images/figmaProduct.svg'
import FigJam from '../../../assets/images/FigJam.png'
import { StyledWrapper } from '../../organisms/Header/StyledWrapper'
import styled from 'styled-components'

const StyledList = styled.ul`
    &:first-child {
        border-right: none;
    }
`

const Products = () => (
    <StyledWrapper>
        <StyledList>
            <a href="">
                <span>Figma</span>
                <p>An all-in-one design platform</p>
                <Figma />
            </a>
            <a>
                <span>Design</span>
            </a>
            <a href="">
                <span>Prototyping</span>
            </a>
            <a href="">
                <span>Design systems</span>
            </a>
            <a href="">
                <span>Developing</span>
            </a>
            <a href="">
                <span>Downloads</span>
            </a>
        </StyledList>
        <ul>
            <a href="">
                <span>FigJam</span>
                <p>An online whiteboard for teams</p>
                <img src={FigJam} alt="FigJam" />
            </a>
            <a href="">
                <span>Online whiteboarding</span>
            </a>
            <a href="">
                <span>Strategic planning</span>
            </a>
            <a href="">
                <span>Team meetigs</span>
            </a>
            <a href="">
                <span>Diagraming</span>
            </a>
        </ul>
    </StyledWrapper>
)

export default Products
