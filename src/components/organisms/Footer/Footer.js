import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    background: black;
    color: white;
    min-height: 100vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 48px;
`

const StyledFooterNav = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
        li {
            a {
                text-decoration: none;
                color: white;
                &:hover {
                    border-bottom: 1px solid white;
                }
            }
            &:first-child {
                font-weight: 700;
            }
        }
    }
`

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    ul {
        display: flex;
        gap: 36px;
        list-style: none;
        li {
            a {
                text-decoration: none;
                color: white;
            }
            &:hover {
                border-bottom: 1px solid white;
            }
        }
    }
`

const Footer = () => (
    <StyledWrapper>
        <StyledFooterNav>
            <ul>
                <li>
                    <h3>Figma</h3>
                </li>
                <li>
                    <a href="/">Twitter</a>
                </li>
                <li>
                    <a href="/">YouTube</a>
                </li>
                <li>
                    <a href="/">Instagram</a>
                </li>
                <li>
                    <a href="/">Facebook</a>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Use Cases</h3>
                </li>
                <li>
                    <a href="/">UI Design</a>
                </li>
                <li>
                    <a href="/">UX Design</a>
                </li>
                <li>
                    <a href="/">Wireframing</a>
                </li>
                <li>
                    <a href="/">Diagraming</a>
                </li>
                <li>
                    <a href="/">Brainstorming</a>
                </li>
                <li>
                    <a href="/">Online whiteboard</a>
                </li>
                <li>
                    <a href="/">Agile workflows</a>
                </li>
                <li>
                    <a href="/">Strategic planning</a>
                </li>
                <li>
                    <a href="/">Templates</a>
                </li>
                <li>
                    <a href="/">Remote Design</a>
                </li>
                <li>
                    <a href="/">Agencies</a>
                </li>
                <li>
                    <a href="/">Figma for education</a>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Explore</h3>
                </li>
                <li>
                    <a href="/">Design features</a>
                </li>
                <li>
                    <a href="/">Prototyping features</a>
                </li>
                <li>
                    <a href="/">Design systems features</a>
                </li>
                <li>
                    <a href="/">Development Features</a>
                </li>
                <li>
                    <a href="/">Collaboration features</a>
                </li>
                <li>
                    <a href="/">Design process</a>
                </li>
                <li>
                    <a href="/">FigJam</a>
                </li>
                <li>
                    <a href="/">Pricing</a>
                </li>
                <li>
                    <a href="/">Enterprise</a>
                </li>
                <li>
                    <a href="/">Organization</a>
                </li>
                <li>
                    <a href="/">Professional</a>
                </li>
                <li>
                    <a href="/">Customers</a>
                </li>
                <li>
                    <a href="/">Security</a>
                </li>
                <li>
                    <a href="/">Integrations</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Resources</h3>
                </li>
                <li>
                    <a href="/">Blog</a>
                </li>
                <li>
                    <a href="/">Best practices</a>
                </li>
                <li>
                    <a href="/">Support</a>
                </li>
                <li>
                    <a href="/">Developers</a>
                </li>
                <li>
                    <a href="/">Resource library</a>
                </li>
                <li>
                    <a href="/">Downloads</a>
                </li>
                <li>
                    <a href="/">What's new</a>
                </li>
                <li>
                    <a href="/">Releases</a>
                </li>
                <li>
                    <a href="/">Careers</a>
                </li>
                <li>
                    <a href="/">Our story</a>
                </li>
                <li>
                    <a href="/">Partners</a>
                </li>
                <li>
                    <a href="/">Privacy</a>
                </li>
                <li>
                    <a href="/">Modern Slavery Statement</a>
                </li>
                <li>
                    <a href="/">Status</a>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Compare</h3>
                </li>
                <li>
                    <a href="/">Sketch</a>
                </li>
                <li>
                    <a href="/">Adobe XD</a>
                </li>
                <li>
                    <a href="/">Invision Studio</a>
                </li>
                <li>
                    <a href="/">Framer</a>
                </li>
                <li>
                    <a href="/">Design on Windows</a>
                </li>
                <li>
                    <a href="/">Miro</a>
                </li>
            </ul>
        </StyledFooterNav>
        <StyledDiv>
            <ul>
                <li>Cookie settings</li>
                <li>English</li>
            </ul>
        </StyledDiv>
    </StyledWrapper>
)

export default Footer
