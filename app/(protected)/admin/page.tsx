"use client";

import { admin } from "@/actions/admin";
import { Rolegate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { currentRole } from "@/lib/auth";

// import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";


const AdminPage = () => {
    // const role = useCurrentRole();
    // const role = await currentRole();

    const onServerActionClick = () => {
        admin()
          .then((data)=>{
            if(data.error){
                toast.error(data.error)
            }

            if(data.success){
                toast.success(data.success)
            }
          })
    }

    const onApiRouteClick = () => {
        fetch("/api/admin")
            .then((response) => {
            if(response.ok) {
                toast.success("Allowed API Route!")
            }else{
                toast.error("Forbidden API Route! ")
            }
            })
    };

  return (
    <Card className="w-[336px] md:w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
            🔑 Admin
        </p>
      </CardHeader>
      <CardContent className="space-y-4 md:p-6 px-3">
        <Rolegate allowedRole={UserRole.ADMIN}>
            <FormSuccess 
              message="You are allowed to see this content!"
            />
        </Rolegate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button className="p-[12px]" onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button className="p-[12px]" onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default AdminPage;