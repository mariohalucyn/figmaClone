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
            <li>
                <a href="">Figma</a>
                <p>An all-in-one design platform</p>
            </li>
            <li>
                <Figma />
            </li>
            <li>
                <a href="">Design</a>
            </li>
            <li>
                <a href="">Prototyping</a>
            </li>
            <li>
                <a href="">Design systems</a>
            </li>
            <li>
                <a href="">Developing</a>
            </li>
            <li>
                <a href="">Downloads</a>
            </li>
        </StyledList>
        <ul>
            <li>
                <a href="">FigJam</a>
                <p>An online whiteboard for teams</p>
            </li>
            <li>
                <img src={FigJam} alt="FigJam" />
            </li>
            <li>
                <a href="">Online whiteboarding</a>
            </li>
            <li>
                <a href="">Strategic planning</a>
            </li>
            <li>
                <a href="">Team meetigs</a>
            </li>
            <li>
                <a href="">Diagraming</a>
            </li>
        </ul>
    </StyledWrapper>
)

export default Products
