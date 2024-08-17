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
              <td>{item.year}</td>
              <td>{item.investmentValue}</td>
              <td>{item.interest}</td>
              <td>{item.annualInvestment}</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default Result;
