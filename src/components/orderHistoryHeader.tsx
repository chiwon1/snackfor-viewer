import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  user: string;
  orderQty: number;
  cancelQty: number;
};

const OrderHistoryHeader: FC<Props> = ({ user, orderQty, cancelQty }) => {
  return (
    <Wrapper>
      <StyledSpan>{`${user} 님`}</StyledSpan>
      <StyledHr />
      <StyledSpan>{`주문내역 ${orderQty} 건`}</StyledSpan>
      <StyledHr />
      <StyledSpan>{`주문내역 ${cancelQty} 건`}</StyledSpan>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  background: #47227b;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1pt 4pt, rgba(0, 0, 0, 0.08) 0 2pt 8pt;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 56px;
  line-height: 16px;
  padding: 8px 0 8px 8px;
  position: relative;
  width: 100%;

  text-align: center;

  hr {
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    background-color: rgb(237, 237, 237);
    width: 1px;
    height: 40px;
    margin: 0;
  }
`;

const StyledHr = styled.hr`
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  background-color: rgb(237, 237, 237);
  width: 1px;
  height: 40px;
`;

const StyledSpan = styled.span`
  text-align: center;
  margin: 0 auto;
  justify-content: center;
`;

export default OrderHistoryHeader;
