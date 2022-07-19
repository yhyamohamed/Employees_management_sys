import { useEffect, useState } from "react";
import axios from "axios";

const usePost = (METHOD,url,body) => {
  const [data, SetData] = useState(null);
  const [isPending, SetIsPending] = useState(true);
  const [error, SetError] = useState(false);

  useEffect(() => {
    const abortReq = new AbortController();
    setTimeout(() => {
      axios(
        {
          method: METHOD,
          url: url,
          data: body,
        },
        { signal: abortReq.signal }
      ).then((res) => {
          if (res.status !== 200)
            throw Error("error.. cant fetch data for that url");
          return res.json();
        })
        .then((data) => {data;
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
  }, []);
  return { data, isPending, error };
};

export default usePost;
