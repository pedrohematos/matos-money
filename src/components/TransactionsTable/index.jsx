import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">$5.000</td>
            <td>Development</td>
            <td>02/20/21</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">-$1.000</td>
            <td>Housing</td>
            <td>02/17/21</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
