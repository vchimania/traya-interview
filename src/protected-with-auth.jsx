import Accordion from "./accordion";
import { items } from "./App";
import { withAuth } from "./auth";
import ListOfProducts from "./list-product";

const ProtectedPage = ({ user, storedEmail }) => {
  console.log({ user });
  console.log({ storedEmail });

  return (
    <div>
      <h2>Welcome ,{user ? user : storedEmail}</h2>
      <Accordion items={items} />
      <ListOfProducts />
    </div>
  );
};

export const ProtectedWithAuth = withAuth(ProtectedPage);

export default ProtectedPage;
