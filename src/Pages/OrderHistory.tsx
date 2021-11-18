import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import OrderHistoryHeader from '../components/orderHistoryHeader';
import {
  NEXT_BUTTON,
  ORDER_AND_SHIPPING_RETRIEVE,
  PREVIOUS_BUTTON,
} from '../constants/ui';
import axios from 'axios';
import { useQuery } from 'react-query';
import { IOrder } from '../types/order';
import axiosInstance from '../utils/axios';

type IFetchOrderListResponse = {
  count: number;
  previous: null | string;
  next: string;
  results: IOrder[];
};

const OrderHistory: FC = () => {
  const userEmail = 'test@snackfor.com';
  const fetchOrderList = () => async () =>
    await axiosInstance.get(
      `https://coding-test.snackfor.com/order-groups?user=${userEmail}`,
    );

  const { data, isLoading } = useQuery<any, any, IFetchOrderListResponse>(
    ['fetchOrderList', { userEmail }],
    fetchOrderList(),
  );

  console.log('data', data);

  if (isLoading) {
    return null;
  }

  return (
    <PageWrapper>
      <OrderHistoryHeader user="user" orderQty={2} cancelQty={2} />
      <Wrapper2>{ORDER_AND_SHIPPING_RETRIEVE}</Wrapper2>
      <Wrapper3>{`총 ${7}건`}</Wrapper3>
      <div>
        <div>
          <StyledUl>
            {data?.results?.map(
              ({ uuid: id, status, delivery_status: deliveryStatus }) => {
                return (
                  <>
                    <Wrapper4>
                      <div>주문일 2021-09-28 14:54 (주문번호:akdkdkdkddkd)</div>
                      <Wrapper5>
                        <button>상세보기</button>
                      </Wrapper5>
                    </Wrapper4>
                    <Wrapper6 key={id}>
                      <Span3>
                        <img src="../snack2.jpeg" alt="Snack" width="60px" />
                      </Span3>
                      <Span2>간식박스</Span2>
                      <Span4>{status}</Span4>
                      <Span4>{deliveryStatus}</Span4>
                    </Wrapper6>
                  </>
                );
              },
            )}
          </StyledUl>
        </div>
      </div>
      <ButtonWrapper>
        <button>{PREVIOUS_BUTTON}</button>
        <button>{NEXT_BUTTON}</button>
      </ButtonWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  margin: 10px 5%;
`;

const Wrapper2 = styled.div`
  margin-top: 30px;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Wrapper3 = styled.div`
  margin-bottom: 10px;
  font-size: 0.9rem;
  display: flex;
  flex: 1 1 0;
  justify-content: flex-end;
`;

const Span2 = styled.span`
  width: 50%;
  border: 1px solid black;
  height: 100%;
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
`;

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

  //justify-content: space-between;
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

const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;

  & > button {
    background-color: #fff;
    border: 1px solid #d5d9d9;
    border-radius: 8px;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    box-sizing: border-box;
    color: #0f1111;
    cursor: pointer;
    display: inline-block;
    font-family: 'Amazon Ember', sans-serif;
    font-size: 13px;
    line-height: 29px;
    padding: 0 10px 0 11px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    width: 100px;
  }

  .button-13:hover {
    background-color: #f7fafa;
  }

  .button-13:focus {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }
`;

export const StyledUl = styled.ul`
  list-style: none;

  ul {
    list-style: none;
  }
`;

export default OrderHistory;
