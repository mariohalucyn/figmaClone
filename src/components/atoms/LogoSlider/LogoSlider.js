import React from 'react'
import styled, { keyframes } from 'styled-components'

const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    gap: 48px;
    font-weight: 700;
    font-size: 18px;
    padding: 48px 0;
    white-space: nowrap;
`

const StyledSlide = styled.div`
    display: inline-block;
    animation: ${slide} 80s linear infinite;
    img {
        height: 20px;
        padding: 0 48px;
    }
`

const LogoSlider = () => {
    return (
        <StyledWrapper>
            Trusted by teams at
            <div>
                <StyledSlide>
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/ab05e1a185076f6612ad3c373d95735362135a74-71x22.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="AirBnb Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/10030cd64a680afb8e98dee4483db66d26ef09d1-91x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Asana Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/32866b28878c23cdd203b5f4f69cc9102381e174-146x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Atlassian Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/d54af886ed8659bc278aef9cb6cfb61d8b5a6c9c-137x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Basic/Dept. Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/962518cdf66a8669ac335378ad252c16bb4ae581-133x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Braintree Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/4403c512ee8bbb39347dccad8ef0d210e9e1ee29-102x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Coinbase Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/d321952702fd743899505cd5dfeb6397a7c7bc5a-75x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Dribbble Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/ec94fd9f63d827b106e78931b08b134faa3173be-92x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Dropbox Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/e68a8936a4abb0cf2323e4550fad6b981c0b328e-67x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="GitHub Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/0d9aa9b05e89ce780ff78ee4a75fee2c96744292-90x22.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Herman Miller Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/74f4885f989edc568725e08b1b1a8666cd0c10bd-86x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Microsoft Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/5f1bbb4673a229cb85b6b157ef980e568a39d68a-153x20.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="The New York Times Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/16569e9ce1735e67798fbcdb815e0c632dec1281-146x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="One Medical Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/b1e6ceb3921861777f753c03cb24c48dd161f5ed-68x20.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Rakuten Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/84ae3c1b89f2e32d3fed6298e79b5c60a69b99c9-79x20.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Slack Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/57ce475b4f76d5867edf3d57a54e23cad5984f0c-107x22.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Walgreens Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/e028bf69d1a66c7f6ed75cc909f3e2d62869eed1-81x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Zoom Logo"
                        loading="eager"
                    />
                </StyledSlide>
                <StyledSlide>
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/ab05e1a185076f6612ad3c373d95735362135a74-71x22.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="AirBnb Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/10030cd64a680afb8e98dee4483db66d26ef09d1-91x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Asana Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/32866b28878c23cdd203b5f4f69cc9102381e174-146x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Atlassian Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/d54af886ed8659bc278aef9cb6cfb61d8b5a6c9c-137x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Basic/Dept. Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/962518cdf66a8669ac335378ad252c16bb4ae581-133x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Braintree Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/4403c512ee8bbb39347dccad8ef0d210e9e1ee29-102x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Coinbase Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/d321952702fd743899505cd5dfeb6397a7c7bc5a-75x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Dribbble Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/ec94fd9f63d827b106e78931b08b134faa3173be-92x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Dropbox Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/e68a8936a4abb0cf2323e4550fad6b981c0b328e-67x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="GitHub Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/0d9aa9b05e89ce780ff78ee4a75fee2c96744292-90x22.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Herman Miller Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/74f4885f989edc568725e08b1b1a8666cd0c10bd-86x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Microsoft Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/5f1bbb4673a229cb85b6b157ef980e568a39d68a-153x20.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="The New York Times Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/16569e9ce1735e67798fbcdb815e0c632dec1281-146x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="One Medical Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/b1e6ceb3921861777f753c03cb24c48dd161f5ed-68x20.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Rakuten Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/84ae3c1b89f2e32d3fed6298e79b5c60a69b99c9-79x20.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Slack Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/57ce475b4f76d5867edf3d57a54e23cad5984f0c-107x22.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Walgreens Logo"
                        loading="eager"
                    />
                    <img
                        src="https://cdn.sanity.io/images/599r6htc/localized/e028bf69d1a66c7f6ed75cc909f3e2d62869eed1-81x18.svg?q=75&amp;fit=max&amp;auto=format"
                        alt="Zoom Logo"
                        loading="eager"
                    />
                </StyledSlide>
            </div>
        </StyledWrapper>
    )
}

export default LogoSlider
