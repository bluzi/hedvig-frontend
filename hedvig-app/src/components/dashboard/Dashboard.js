/* global require */
import React from 'react';
import { View, ScrollView } from 'react-native';

import { HeaderRightChat } from '../NavBar';
import { PerilsCategory } from './PerilsCategory';

import { RoundedButton } from '../Button';
import {
  StyledDashboardHeaderOffWhite,
  StyledDashboardHeaderRowLessMargin,
  StyledDashboardHeaderItem,
  StyledDashboardContainer,
  StyledCategoriesContainer,
  StyledCheckoutButton,
  StyledDashboardHeaderIcon,
  StyledConditionRow,
} from '../styles/dashboard';
import { StyledPassiveText, StyledHeading } from '../styles/text';

import { INSURANCE_TYPES } from '../../constants';

export default class Dashboard extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Min Försäkring',
    headerRight: <HeaderRightChat navigation={navigation} />,
  });

  renderCategories() {
    let categories = this.props.categories.map(
      ({ title, description, perils, iconUrl }, i) => {
        return (
          <PerilsCategory
            title={title}
            description={description}
            perils={perils}
            offerMode={this.props.mode === 'offer'}
            iconUrl={iconUrl}
            key={i}
            navigation={this.props.navigation}
          />
        );
      },
    );
    return <StyledCategoriesContainer>{categories}</StyledCategoriesContainer>;
  }

  maybeCheckoutButton() {
    if (this.props.newTotalPrice !== null && this.props.mode !== 'offer') {
      let prefix = `${this.props.newTotalPrice} kr`;
      return (
        <StyledCheckoutButton>
          <RoundedButton
            prefix={prefix}
            title="Betala ändringar"
            onPress={() => this.props.checkout()}
          />
        </StyledCheckoutButton>
      );
    }
  }

  statusIcon() {
    const imageModule = {
      ACTIVE: require('../../../assets/icons/my_insurance/aktiv.png'),
      PENDING: require('../../../assets/icons/edit_perils/added_peril.png'),
      INACTIVE: require('../../../assets/icons/edit_perils/added_peril.png'),
    }[this.props.insurance.status];
    return <StyledDashboardHeaderIcon source={imageModule} />;
  }

  statusText() {
    return {
      ACTIVE: 'Aktiv',
      PENDING: 'På gång',
      INACTIVE: 'Aktiveras snart',
    }[this.props.insurance.status];
  }

  render() {
    return (
      <StyledDashboardContainer style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <StyledDashboardHeaderOffWhite>
            <StyledDashboardHeaderRowLessMargin>
              <StyledHeading>Min hemförsäkring</StyledHeading>
              <StyledDashboardHeaderItem>
                {this.statusIcon()}
                <StyledPassiveText>{this.statusText()}</StyledPassiveText>
              </StyledDashboardHeaderItem>
            </StyledDashboardHeaderRowLessMargin>
          </StyledDashboardHeaderOffWhite>

          {this.renderCategories()}

          <View>
            <View style={{ marginLeft: 24 }}>
              <StyledConditionRow>
                <StyledDashboardHeaderIcon
                  source={require('../../../assets/icons/my_insurance/pris.png')}
                />
                <StyledPassiveText>Din självrisk är 1 500 kr</StyledPassiveText>
              </StyledConditionRow>
              {this.props.insurance.insuranceType === INSURANCE_TYPES.BRF ||
              this.props.insurance.insuranceType ===
                INSURANCE_TYPES.SUBLET_BRF ? (
                <StyledConditionRow>
                  <StyledDashboardHeaderIcon
                    source={require('../../../assets/icons/my_insurance/aktiv.png')}
                  />
                  <StyledPassiveText>
                    Lägenheten försäkras till sitt fulla värde
                  </StyledPassiveText>
                </StyledConditionRow>
              ) : null}
              <StyledConditionRow>
                <StyledDashboardHeaderIcon
                  source={require('../../../assets/icons/my_insurance/pris.png')}
                />
                <StyledPassiveText>
                  Prylarna försäkras till totalt 1 000 000 kr
                </StyledPassiveText>
              </StyledConditionRow>
              <StyledConditionRow>
                <StyledDashboardHeaderIcon
                  source={require('../../../assets/icons/my_insurance/worldwide.png')}
                />
                <StyledPassiveText>
                  Gäller på resor varsomhelst i världen
                </StyledPassiveText>
              </StyledConditionRow>
            </View>
            <View
              style={{
                alignSelf: 'stretch',
                height: this.props.extraScrollViewPadding || 0,
              }}
            />
          </View>
        </ScrollView>
        {this.maybeCheckoutButton()}
      </StyledDashboardContainer>
    );
  }
}
