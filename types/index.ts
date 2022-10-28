import React, { } from "react";
export type Prop = {
  children:React.ReactElement
};

export type GlobalContextType = {
  toggleColorMode: () => void;
};

export type AMPMCard = {
  time: string;
  set: string;
  value: string;
  twod: string;
};

export type ActionType = {
  type:string,
  payload:any
}

export type ResultResponse = {
  child:any,
  date:string
}