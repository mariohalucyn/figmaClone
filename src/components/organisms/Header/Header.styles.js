import styled from 'styled-components'
import { BorderBottomAnimation } from './BorderBottomAnimation'

export const StyledWrapper = styled.div`
    margin: 0;
    padding: 24px 48px;
    display: flex;
    justify-content: space-between;
`

export const StyledList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 16px;
`

export const StyledListItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 0;
    padding: 8px 4px;
    svg {
        overflow: hidden;
    }
    img {
        overflow: hidden;
        pointer-events: none;
    }
    a {
        position: relative;
        text-decoration: none;
        color: black;
    }
    .arrow {
        padding-top: 4px;
    }
`

export const NavStyledListItem = styled.li`
    position: relative;
    margin: 0;
    padding: 8px 4px;
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
