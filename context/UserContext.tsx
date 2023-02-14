import User from "@/interfaces/User";
import { createContext, useContext, useMemo, useState } from "react";

type userContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
};

const UserContext = createContext<userContextType>({
    user: null,
    setUser: () => {},
});

export function useUserContext() {
    return useContext(UserContext);
}

type UserContextProviderProps = {
    children: React.ReactNode;
};

export function UserContextProvider({ children }: UserContextProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    const values = useMemo(() => ({ user, setUser }), [user, setUser]);
    
    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
}
