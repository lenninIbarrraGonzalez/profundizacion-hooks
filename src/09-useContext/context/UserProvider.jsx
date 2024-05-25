import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: "Lennin Ibarra",
  email: "lennin@gmail.com",
};

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "mundo", user: user }}>
      {children}
    </UserContext.Provider>
  );
};
