import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderStyled, HeaderIconStyled } from './styles/header';
import { TurquoiseRoundedButtonStyled } from './styles/button';
import { ResetIconButton } from './Button';

const HeaderLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (min-width: 800px) {
    min-width: 300px;
  }
`;

const HeaderNavigationLinksContainer = styled.div`
  display: none;

  > a {
    &:visited {
      color: ${props => props.theme.colors.purple};
    }
  }

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-evenly;
    min-width: 200px;
  }
`;

export class Header extends React.Component {
  render() {
    return (
      <HeaderStyled>
        <HeaderLinkContainer>
          <div>
            <Link to="/">
              <HeaderIconStyled />
            </Link>
          </div>
          <HeaderNavigationLinksContainer>
            <Link to="/about-us">Om Hedvig</Link>
            <Link to="/faq">Vanliga frågor</Link>
          </HeaderNavigationLinksContainer>
        </HeaderLinkContainer>
        <div>
          {this.props.headerRight || (
            <Link to="/chat">
              <ResetIconButton />
            </Link>
          )}
        </div>
      </HeaderStyled>
    );
  }
}

const PriceText = styled.div`
  font-size: 20px;
  color: ${props => props.theme.colors.purple};
`;

export class HeaderWithScroll extends React.Component {
  render() {
    if (this.props.scrollY === 0) {
      return <Header headerRight={this.props.headerRight} />;
    }
    return (
      <HeaderStyled>
        <PriceText>{this.props.price} kr/mån</PriceText>
        <TurquoiseRoundedButtonStyled onClick={() => this.props.checkout()}>
          Bli försäkrad
        </TurquoiseRoundedButtonStyled>
        <ResetIconButton onClick={() => this.props.closeModal()} />
      </HeaderStyled>
    );
  }
}
