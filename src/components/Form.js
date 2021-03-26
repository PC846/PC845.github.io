import React from 'react';
import NumericalInputField from './NumericalInputField';
import { format } from '../utils';

function Form(props) {
  const loanAmount = format(props.store.loanAmount);
  const remainingTerm = format(props.store.remainingTerm);
  const interestRate = format(props.store.interestRate);

  function handleLoanAmountChange(value) {
    props.dispatch({
      type: 'LOAN_AMOUNT',
      value
    });
  }

  function handleRemainingTermChange(value) {
    props.dispatch({
      type: 'REMAINING_TERM',
      value
    });
  }

  function handleInterestRateChange(value) {
    props.dispatch({
      type: 'INTEREST_RATE',
      value
    });
  }

  return (
    <form>
      <NumericalInputField
        label="Loan amount"
        value={loanAmount}
        onChange={handleLoanAmountChange}
      />
      <NumericalInputField
        label="Remaining term"
        value={remainingTerm}
        onChange={handleRemainingTermChange}
      />
      <NumericalInputField
        label="Interest rate"
        value={interestRate}
        onChange={handleInterestRateChange}
      />
    </form>
  );
}

export default Form;
