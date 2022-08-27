import { Card } from "@components";
import styled from "styled-components";

export const Summary = () => {
  return (
    <StyledDiv>
      <Card title="Mês de" information="Julho - 2022" />
      <Card title="Total a pagar" information="R$ 00,00" type="black" />
      <Card title="Total pago" information="R$ 00,00" type="ok" />
      <Card title="Total vencendo" information="R$ 00,00" type="warning" />
      <Card title="Total a vencer" information="R$ 00,00" type="danger" />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    margin-right: 1em;
    &:last-child {
      margin-right: 0;
    }
  }
`;
