"use client";

import { useRouter } from "next/navigation";

import { Button } from "../ui/button";

interface Props {
  pageNumber: number;
  isNext: boolean;
  path: string;
}
const Pagination = ({ pageNumber, isNext, path }: Props) => {
  return (
    <div>Pagination</div>
  )
}

export default Pagination