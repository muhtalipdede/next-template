import { UserContextProvider } from "./UserContext";

type ContextProviderProps = {
    children: React.ReactNode;
};

const ContextProvider = ({ children }: ContextProviderProps) => {
    return (
        <UserContextProvider>
            {children}
        </UserContextProvider>
    );
};

export default ContextProvider;