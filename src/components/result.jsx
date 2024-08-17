import { formatter } from "../util/investment";
const Result = ({ result }) => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>investmentValue</th>
          <th>interest</th>
          <th>annualInvestment</th>
        </tr>
      </thead>
      <tbody>
        {result.map((item) => (
          <>
            <tr>
              <td>{formatter.format(item.year)}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.annualInvestment)}</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default Result;
