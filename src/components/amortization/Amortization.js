import React from 'react';
import { Table } from 'evergreen-ui';



function fixedFloat(nbr, toFixed = 2) {
  return parseFloat(nbr.toFixed(toFixed));
}


function calculateRepaymentAmount(a, n, i) {
  return (i * a) / (1 - (1 + i) ** -n);
}

function Amortization(props) {
  const { loanAmount, remainingTerm, interestRate } = props.store;
  
  
  
  if (!loanAmount || !remainingTerm || !interestRate) {
    return null;
  }

  const rows = Math.ceil(remainingTerm * 12);
  const repaymentAmount = fixedFloat(
    calculateRepaymentAmount(
      loanAmount,
      remainingTerm * 12,
      interestRate / 100 / 12
    )
  );

  let balance = loanAmount;
  


  return (
    <Table>
      <h2>Monthly Repayment <br /><br /> ${repaymentAmount}</h2>
      <h4>Amortization Table</h4>
      
      
      <Table.Head>
        <Table.TextHeaderCell>Payment #</Table.TextHeaderCell>
        {/* <Table.TextHeaderCell>Previous</Table.TextHeaderCell> */}
        <Table.TextHeaderCell>Balance</Table.TextHeaderCell>
        <Table.TextHeaderCell>Principal</Table.TextHeaderCell>
        <Table.TextHeaderCell>Interest</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={240}>
      
        {!isNaN(rows) &&
          [...new Array(rows)].map((__, index) => {
         
            const interest = fixedFloat((balance * interestRate) / 100 / 12);
            const principal = fixedFloat(repaymentAmount - interest);
            
            balance = fixedFloat(balance - principal);
           
            
            
            return (
              <Table.Row key={index}>
                <Table.TextCell>{index + 1}</Table.TextCell>
                {/* <Table.TextCell>{prev}</Table.TextCell> */}
                <Table.TextCell>{balance}</Table.TextCell>
                <Table.TextCell>{principal}</Table.TextCell>
                <Table.TextCell>{interest}</Table.TextCell>
              </Table.Row>
                
            );
          })}
          
      </Table.Body>
      
      
    </Table>
  );
}

export default Amortization;
