import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].annualInvestment -
    resultData[0].interest;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          let totalInterset =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          let intestedCapital = yearData.valueEndOfYear - totalInterset;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterset)}</td>
              <td>{formatter.format(intestedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
