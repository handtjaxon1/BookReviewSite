import React, { useEffect, useState } from "react";

export const useStoredUser = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) ?? {});

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return [user, setUser];
}