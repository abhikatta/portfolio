// app/api/forminit/route.ts
import { createForminitProxy } from "forminit/next";

const forminit = createForminitProxy({
  apiKey: process.env.FORMINIT_API_KEY || "",
});

export const POST = forminit.POST;
