"use client";

import { GlobalContext } from "@/context";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  console.log(isAuthUser);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello NEXT </h1>
    </main>
  );
}
