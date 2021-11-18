import React, { FC } from 'react';
import dayjs from 'dayjs';
import { DELIVERY_STATUS_MAP, ORDER_STATUS_MAP } from '../constants/ui';
import styled from 'styled-components';

type Props = {
  id: string;
  registrationDate: string;
  totalPrice: number;
  status: string;
  deliveryStatus: string;
};

const OrderLi: FC<Props> = ({
  id,
  registrationDate,
  totalPrice,
  status,
  deliveryStatus,
}) => {
  return (
    <>
      <Wrapper4>
        <div>{`주문일 ${dayjs(registrationDate).format(
          'YYYY-MM-DD HH:mm',
        )} (주문번호:${id})`}</div>
        <Wrapper5>
          <button>상세보기</button>
        </Wrapper5>
      </Wrapper4>
      <Wrapper6 key={id}>
        <Span3>
          <img
            src="https://www.elandrs.com/upload/prd/img/643/600/2106993643_0000002.jpg"
            alt="Snack"
            width="60px"
          />
        </Span3>
        <Span2>
          <div>간식박스</div>
          <div>{`${totalPrice.toLocaleString('ko-KR')} 원`}</div>
        </Span2>
        <Span4>{ORDER_STATUS_MAP[status]}</Span4>
        <Span4>{DELIVERY_STATUS_MAP[deliveryStatus]}</Span4>
      </Wrapper6>
    </>
  );
};

const Wrapper4 = styled.div`
  background-color: #fff;
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
  top: 0;
  vertical-align: baseline;
  width: 100%;
  z-index: 60;
`;

const Wrapper5 = styled.div`
  display: flex;
  flex: 1 1 0;
  justify-content: flex-end;
`;

const Wrapper6 = styled.li`
  padding: 5px;
  border: 1px solid;
  height: 80px;
  border-radius: 2px;
  margin-top: 5px;
  margin-bottom: 5px;

  -webkit-box-align: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1pt 4pt, rgba(0, 0, 0, 0.08) 0 2pt 8pt;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  padding: 8px;
  position: relative;
  width: 100%;
  text-align: center;
`;

const Span3 = styled.span`
  width: 60px;
  border: 1px solid black;
  height: 100%;
`;

const Span4 = styled.span`
  width: 18%;
  border: 1px solid black;
  height: 100%;
  font-size: 0.7rem;
  font-weight: 400;
  text-align: center;
`;

const Span2 = styled.span`
  width: 55%;
  border: 1px solid black;
  height: 100%;
  font-size: 0.7em;
  font-weight: 400;
  padding-left: 10px;
  text-align: left;
`;

export default OrderLi;
