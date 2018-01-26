import React from 'react';
import {
  StyledOptionContainer,
  OptionsContainerStyled,
  WrappedOptionsContainerStyled,
} from '../styles/chat';
import {
  WhiteRoundedButton,
  PurpleRoundedButton,
  SendIconButton,
  InactiveSendIconButton,
} from '../Button';

const R = require('ramda');

const MultipleSelectInput = ({ message, onChoiceSelected, done }) => {
  const opts = message.body.choices.map(choice => {
    const ButtonComponent = choice.selected
      ? PurpleRoundedButton
      : WhiteRoundedButton;
    return (
      <StyledOptionContainer>
        <ButtonComponent
          key={choice.text}
          onClick={() => {
            onChoiceSelected(message, choice);
          }}
        >
          {choice.text}
        </ButtonComponent>
      </StyledOptionContainer>
    );
  });
  const Container =
    opts.length <= 4 ? OptionsContainerStyled : WrappedOptionsContainerStyled;
  const SendButton = R.any(choice => choice.selected, message.body.choices) ? (
    <SendIconButton onClick={() => done(message)} />
  ) : (
    <InactiveSendIconButton />
  );
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <Container>{opts}</Container>
      {SendButton}
    </div>
  );
};

export default MultipleSelectInput;
