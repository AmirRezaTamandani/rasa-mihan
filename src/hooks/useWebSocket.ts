import { useEffect, useState, useCallback } from "react";
import { Payload, UseWebSocketResult } from "@/types";

export const useWebSocket = (url: string): UseWebSocketResult => {
  const [data, setData] = useState<Payload[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const wsInstance = new WebSocket(url);

    wsInstance.onopen = () => {
      //add:
      //you can change what happens upon successful connection
      alert("we are in");
    };

    wsInstance.onmessage = (event) => {
      const message: Payload[] = JSON.parse(event.data);
      setData((prevData) => [...prevData, ...message]);
    };
    wsInstance.onclose = () => {
      //add:
      //you can change what happens upon failed connection
      alert("check your vpn");
    };

    setWs(wsInstance);

    return () => {
      wsInstance.close();
    };
  }, [url]);

  const subscribe = useCallback(
    (symbols: string[]) => {
      if (ws?.readyState === WebSocket.OPEN) {
        const request = {
          method: "SUBSCRIBE",
          params: symbols,
          id: Date.now(),
        };
        ws.send(JSON.stringify(request));
      }
    },
    
    [ws]
  );

  const unsubscribe = useCallback(
    (symbols: string[]) => {
      if (ws?.readyState === WebSocket.OPEN) {
        const request = {
          method: "UNSUBSCRIBE",
          params: symbols,
          id: Date.now(),
        };
        ws.send(JSON.stringify(request));
      }
    },
    [ws]
  );

  return { data, subscribe, unsubscribe };
};
