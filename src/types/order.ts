export interface IOrder {
  uuid: string;
  price: number;
  discount_price: number;
  total_price: number;
  payment_amount: number;
  refund_amount: number;
  pay_method: string;
  pg: string;
  shipping_price: number;
  status: string;
  registration_date: string;
  user_name: string;
  user_phone_number: string;
  user_email: string;
  delivery_status: string;
  courier: string;
  invoice_number: string;
  address_recipient: string;
  address_phone_number: string;
  address1: string;
  address2: string;
  zip_code: string;
  user: string;
}
