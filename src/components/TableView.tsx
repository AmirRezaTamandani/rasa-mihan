"use client";
import React, { useEffect } from "react";
import { useWebSocket } from "@/hooks/useWebSocket";

const TableView: React.FC = () => {
  const { data, subscribe, unsubscribe } = useWebSocket(
    "wss://fstream.binance.com"
  );

  useEffect(() => {
    subscribe(["ticker@arr"]);

    return () => {
      unsubscribe(["ticker@arr"]);
    };
  }, [subscribe, unsubscribe]);

  const tableRows = data.map((item) => (
    <div key={item.s} className="flex items-center">
      <div className="flex-1">{item.s}</div>
      <div>
        <div className="flex-1 ">{item.c}</div>
        <div className="flex-1 text-xs">{item.P}%</div>
      </div>
    </div>
  ));
  return <div>{tableRows}</div>;
};

export default TableView;
