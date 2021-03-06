/* global require */
import React from 'react';
import { View, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { NavBar } from '../NavBar';
import { StyledButtonContainer, StyledCtaContainer } from '../styles/offer';
import { TurquoiseRoundedInvertedButton, XNavigateBackButton } from '../Button';
import { PerilsCategory } from './PerilsCategory';
import OfferDashboardHeader from '../dashboard/OfferDashboardHeader';
import { StyledText, StyledPassiveText } from '../styles/text';
import { TextLink } from '../Link';
import OfferFooter from './OfferFooter';

const { width } = Dimensions.get('window');

const HEDVIG_INTEGRITET_S3_LINK =
  'https://s3.eu-central-1.amazonaws.com/com-hedvig-web-content/Hedvig+-+integritetspolicy.pdf';

class Offer extends React.Component {
  componentWillMount() {
    this.props.getInsurance();
  }

  render() {
    return (
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <NavBar
          headerLeft={
            <XNavigateBackButton onPress={() => this.props.closeModal()} />
          }
        />
        <ScrollView style={{ backgroundColor: '#F9FAFC' }}>
          <OfferDashboardHeader
            newTotalPrice={this.props.insurance.newTotalPrice}
            isCurrentlyInsured={this.props.insurance.insuredAtOtherCompany}
          />
          <View style={{ paddingHorizontal: 8, paddingBottom: 8 }}>
            {this.props.insurance.categories.map((category, index) => (
              <PerilsCategory
                offerMode
                key={index}
                perils={category.perils}
                title={category.title}
                description={category.description}
                iconUrl={category.iconUrl}
                navigation={this.props.navigation}
              />
            ))}
          </View>
          <OfferFooter insuranceType={this.props.insurance.insuranceType} />
          <StyledPassiveText
            style={{ paddingLeft: 24, paddingRight: 18, paddingBottom: 170 }}
          >
            Genom att trycka bli medlem bekräftar jag att jag tagit del av&nbsp;
            <TextLink to={this.props.insurance.presaleInformationUrl}>
              förköpsinformation
            </TextLink>, Hedvigs{' '}
            <TextLink to={this.props.insurance.policyUrl}>
              försäkringsvillkor
            </TextLink>{' '}
            och att mina personuppgifter&nbsp; behandlas i enlighet med&nbsp;
            <TextLink to={HEDVIG_INTEGRITET_S3_LINK}>
              Personuppgiftslagen
            </TextLink>.
          </StyledPassiveText>
        </ScrollView>
        <StyledCtaContainer>
          <ImageBackground
            source={require('../../../assets/bgs/gradient-white-rectangle.png')}
            resizeMode="stretch"
            style={{
              position: 'absolute',
              width: width,
              height: 135,
              paddingTop: 36,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <StyledButtonContainer>
              <TurquoiseRoundedInvertedButton
                onPress={() => this.props.checkout()}
                title="Bli medlem"
              />
            </StyledButtonContainer>
            <StyledText
              style={{
                marginTop: 8,
                alignSelf: 'center',
                color: '#651EFF',
                backgroundColor: 'rgba(0,0,0,0)',
              }}
            >
              Ingen bindingstid, avsluta när du vill ✌
            </StyledText>
          </ImageBackground>
        </StyledCtaContainer>
      </View>
    );
  }
}

export default Offer;
