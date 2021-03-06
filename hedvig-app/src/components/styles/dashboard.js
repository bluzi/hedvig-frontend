import styled from 'styled-components/native';

export const StyledDashboardContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.offWhite};
`;

export const StyledDashboardHeader = styled.View`
  padding-top: 22;
  padding-right: 24;
  padding-bottom: 12;
  padding-left: 24;
`;

export const StyledDashboardHeaderOffWhite = StyledDashboardHeader.extend`
  background-color: ${props => props.theme.colors.offWhite};
`;

export const StyledDashboardHeaderRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10;
`;

export const StyledDashboardHeaderRowLessMargin = StyledDashboardHeaderRow.extend`
  margin-bottom: 5;
`;

export const StyledDashboardHeaderRowGray = StyledDashboardHeaderRow.extend`
  background-color: ${props => props.theme.colors.offWhite};
`;

export const StyledDashboardHeaderItem = styled.View`
  flex-direction: row;
`;

export const StyledDashboardHeaderIcon = styled.Image`
  margin-right: 5px;
  width: 16px;
  height: 16px;
`;

export const StyledCategoriesContainer = styled.View`
  padding: 8px;
`;

export const StyledCategoryContainer = styled.TouchableOpacity`
  margin-bottom: 8px;
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  padding-top: 16px;
  ${'' /* Drop shadow */} shadow-opacity: 0.2;
  shadow-radius: 2;
  shadow-offset: 0px 1px;
  shadow-color: black;
  elevation: 1;
`;

export const StyledCategoryHeader = styled.View`
  flex-direction: row;
  padding: 0px 16px 14px 16px;
  flex: 1;
`;

export const StyledCategoryIcon = styled.Image`
  width: 72px;
  height: 72px;
`;

export const StyledCategoryTextContainer = styled.View`
  margin-left: 16px;
  justify-content: center;
  align-self: stretch;
  flex: 1;
`;

export const StyledExpandButton = styled.View`
  align-items: flex-end;
  justify-content: center;
`;

export const StyledCategoryTextAndButton = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPerilsContainer = styled.View`
  border-top-color: ${props => props.theme.colors.offWhite};
  border-top-width: 1px;
  padding: 16px 0px;
  flex-wrap: wrap;
`;

export const StyledPerilsHelpText = styled.View`
  border-top-color: ${props => props.theme.colors.offWhite};
  border-top-width: 1px;
  height: 31px;
  justify-content: center;
  align-items: center;
`;

export const StyledPerilsRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

export const StyledCheckoutButton = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 32px;
`;

export const StyledConditionRow = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;
