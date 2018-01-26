import React from 'react';
import { Link } from 'react-router-dom';
import { Placeholder } from './Styles';

const RegisterCashback = () => (
  <Placeholder>
    Register cashback
    <Link to="/change-cashback">Change cashback</Link>
    <Link to="/sign-bankid">Sign with BankID</Link>
  </Placeholder>
);

export default RegisterCashback;
