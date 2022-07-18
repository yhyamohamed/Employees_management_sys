import { useEffect, useState } from "react";
import axios from "axios";

const useGet = (url) => {
  const [data, SetData] = useState(null);
  const [isPending, SetIsPending] = useState(true);
  const [error, SetError] = useState(false);

  useEffect(() => {
    const abortReq = new AbortController();
    setTimeout(() => {
      axios
        .get(url, { signal: abortReq.signal })
        .then((res) => {
          if (res.status !== 200)
            throw Error("error.. cant fetch data for that url");
            console.log(res.data);
          return res.data;
        })
        .then((data) => {
          console.log(data);
          SetData(data);
          SetIsPending(false);
          SetError(false);
        })
        .catch((err) => {
          console.log("run");

          if (err.name === "AbortError") {
          } else {
            SetIsPending(false);
            SetData(null);
            SetError(err.message);
          }
        });
    }, 1000);
    return () => {
      abortReq.abort();
    };
  }, [url]);
  return { data, isPending, error };
};

export default useGet;
