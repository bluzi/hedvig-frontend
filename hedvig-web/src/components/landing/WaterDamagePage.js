import React from 'react';
import Lottie from 'react-lottie';

import {
  SplashStyled,
  SplashText,
  AnimationsContainer,
  HeadingSubText
} from '../styles/landing';
import { Heading1 } from '../styles/typography';

const PurpleHeading = Heading1.extend`
  color: ${props => props.theme.colors.blackPurple};
  margin-bottom: 0;
`;

const getAnimationDimensions = () => {
  const width = window.innerWidth;
  if (width < 576) {
    return {
      height: 520,
      width: 347
    };
  }
  return {
    height: 615,
    width: 410
  };
};
const animationDimensions = getAnimationDimensions();

const WaterDamagePage = () => (
  <SplashStyled style={{ paddingTop: '150px' }}>
    <AnimationsContainer style={{ position: "absolute" }}>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: require('../../bundledAssets/animations/desktop.json'),
        }}
        height={animationDimensions.height}
        width={animationDimensions.width}
      />
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: require('../../bundledAssets/animations/drawer.json'),
        }}
        height={animationDimensions.height}
        width={animationDimensions.width}
      />
    </AnimationsContainer>
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: require('../../bundledAssets/animations/water.json'),
        rendererSettings: {
          preserveAspectRatio: 'none'
        },
      }}
      height={720}
      width={window.innerWidth * 1.5}
    />
    <SplashText
      style={{ position: "absolute", alignItems: "center", bottom: "50px" }}
      <PurpleHeading>Försäkring som du aldrig upplevt det tidigare</PurpleHeading>
      <HeadingSubText>För dig, ditt hem och dina prylar</HeadingSubText>
    </SplashText>
  </SplashStyled>
);

export default WaterDamagePage;
