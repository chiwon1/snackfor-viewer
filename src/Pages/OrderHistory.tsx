import React, { FC } from 'react';
import styled from 'styled-components';
import OrderHistoryHeader from '../components/orderHistoryHeader';
import { NEXT_BUTTON, PREVIOUS_BUTTON } from '../constants/ui';
import { useQuery } from 'react-query';
import { IOrder } from '../types/order';
import axiosInstance from '../utils/axios';
import Order from '../components/order';
import Button from '../components/button';

type IFetchOrderListResponse = {
  count: number;
  previous: null | string;
  next: string;
  results: IOrder[];
};

const OrderHistory: FC = () => {
  const userEmail = process.env.REACT_APP_TEST_USER_EMAIL!;

  const fetchOrderList = () => async () =>
    await axiosInstance.get(
      `https://coding-test.snackfor.com/order-groups?user=${userEmail}`,
    );

  const { data: orderInfo, isLoading } = useQuery<
    any,
    any,
    IFetchOrderListResponse
  >(['fetchOrderList', { userEmail }], fetchOrderList());

  if (isLoading) {
    return null;
  }

  return (
    <PageWrapper>
      {orderInfo && (
        <OrderHistoryHeader
          user={orderInfo?.results[0].user_name}
          orderQty={orderInfo.count}
          cancelQty={0}
        />
      )}
      <StyledUl>
        {orderInfo?.results?.map(
          ({
            uuid: id,
            registration_date: registrationDate,
            status,
            delivery_status: deliveryStatus,
            total_price: totalPrice,
          }) => (
            <Order
              key={id}
              id={id}
              registrationDate={registrationDate}
              totalPrice={totalPrice}
              status={status}
              deliveryStatus={deliveryStatus}
            />
          ),
        )}
      </StyledUl>
      <ButtonWrapper>
        <Button
          name={PREVIOUS_BUTTON}
          handleClick={() => {
            console.log('button');
          }}
        />
        <Button
          name={NEXT_BUTTON}
          handleClick={() => {
            console.log('button');
          }}
        />
      </ButtonWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  margin: 10px 5%;
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
