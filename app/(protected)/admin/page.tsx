"use client";

import { Rolegate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { currentRole } from "@/lib/auth";

// import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";


const AdminPage = () => {
    // const role = useCurrentRole();
    // const role = await currentRole();
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
            🔑 Admin
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Rolegate allowedRole={UserRole.ADMIN}>
            <FormSuccess 
              message="You are allowed to see this content!"
            />
        </Rolegate>
      </CardContent>
    </Card>
  )
}

export default AdminPage;