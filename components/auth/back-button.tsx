"use client";

interface BackButtonProps {
    href:string;
    label:string;
}

import Link from "next/link";
import { Button } from "../ui/button"

export const BackButton = ({href,label}:BackButtonProps) => {
    return (
        <Button
         variant="link"
         className="font-normal w-full"
         size="sm"
         asChild
        >
            <Link href={href}>
              {label}
            </Link>
        </Button>
    )
}