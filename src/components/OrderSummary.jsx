import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Order has been placed.</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};
