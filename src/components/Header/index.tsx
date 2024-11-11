import React from "react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex justify-between border-b-[1px] border-solid border-foreground p-5">
      <Bars3Icon className="size-7" />

      <h1>logo</h1>

      <div className="flex gap-5">
        <UserIcon className="size-7" />
        <ShoppingBagIcon className="size-7" />
      </div>
    </header>
  );
}
