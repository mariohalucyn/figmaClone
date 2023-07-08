import styled from 'styled-components'

export const StyledWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 48px;
    background: black;
    color: white;
    margin: 0;
    padding: 48px 0;
`

export const StyledFooterNav = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        list-style: none;
        margin: 0;
        padding: 16px;
        li {
            a {
                text-decoration: none;
                color: white;
                &:hover {
                    border-bottom: 1px solid white;
                }
            }
            p {
                margin: 0;
            }
            &:first-child {
                font-weight: 700;
            }
        }
    }
`

export const StyledCookies = styled.div`
    display: flex;
    justify-content: center;
    ul {
        display: flex;
        gap: 36px;
        list-style: none;
        margin: 0;
        padding: 0;
        li {
            a {
                text-decoration: none;
                color: white;
            }
            p {
                margin: 0;
            }
            &:hover {
                border-bottom: 1px solid white;
            }
        }
    }
`

export const StyledInfo = styled.div`
    min-width: 1320px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
