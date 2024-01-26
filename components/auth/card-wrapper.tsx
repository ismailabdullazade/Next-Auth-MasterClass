"use client";

import { Card,CardContent,CardHeader,CardFooter } from "../ui/card";
import { Header } from "./header";
import { Social } from "./social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
    children:React.ReactNode;
    headerLabel:string;
    backButtonLabel:string;
    backButtonHref:string;
    showSocial?:boolean;
}

export const CardWrapper = ({children,headerLabel,backButtonHref,backButtonLabel,showSocial}:CardWrapperProps) => {
  return (
    <Card className="w-[346px] md:w-[400px] shadow-md">
        <CardHeader>
            <Header label={headerLabel}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        {showSocial && (
            <CardFooter>
                <Social/>
            </CardFooter>
        )}
        <CardFooter>
            <BackButton
              label={backButtonLabel}
              href={backButtonHref}
            />
        </CardFooter>
    </Card>
  )
}

