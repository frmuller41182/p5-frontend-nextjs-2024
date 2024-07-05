"use client";

import { FormEventHandler, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type SearchBoxProps = {
  onChange: (s: string) => void;
};

export default function SearchBox({ onChange }: SearchBoxProps) {
  const textRef = useRef<HTMLInputElement | null>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onChange(textRef.current!.value);
    textRef.current!.value = "";
  };

  return (
    <form className="flex items-center justify-center p-4" onSubmit={onSubmit}>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" ref={textRef} placeholder="Search for stocks..." />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
