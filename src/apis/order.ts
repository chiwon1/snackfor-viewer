import axiosInstance from '../utils/axios';

const userEmail = process.env.REACT_APP_TEST_USER_EMAIL!;

export const fetchOrderList = () => async () =>
  await axiosInstance.get(
    `https://coding-test.snackfor.com/order-groups?user=${userEmail}`,
  );
