"use client"

import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import { FormError } from "../form-error";

interface RoleGateProps {
    children: React.ReactNode;
    allowedRole: UserRole;
}

export const Rolegate = ({
    children,
    allowedRole,
}:RoleGateProps) => {
    const role = useCurrentRole();

    if(role !== allowedRole){
        return (
            <FormError message="You do not have permission to view this content!" />
        )
    }

    return (
        <>
          {children}
        </>
    )
}