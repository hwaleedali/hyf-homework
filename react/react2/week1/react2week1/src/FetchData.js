import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "./GithubSearch";

export function FetchData() {
  const UserContext = useContext(SearchContext);
  const [userfetch, setUserFetch] = useState([]);
  const [errormessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!UserContext) {
      setUserFetch([]);
      return;
    }
    const API = `https://api.github.com/search/users?q=${UserContext}`;
    setIsLoading(true);
    (async () => {
      try {
        console.log(API);
        const result = await fetch(API);
        const result2 = await result.json();
        if (result.ok) {
          console.log("anything");
          const fetchMap = result2.items.map((data) => data.login);
          console.log(fetchMap);
          setUserFetch(fetchMap);
        } else {
          console.log("else statement", result2);
          setErrorMessage(result2.message);
        }
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    })();
  }, [UserContext]);

  const user = userfetch.map((user) => {
    return <li>{user}</li>;
  });

  return (
    <div>
      {errormessage && <p>{errormessage}</p>}
      {isLoading && <p>loading..</p>}
      {user.length === 0 ? <p>No results</p> : user}
    </div>
  );
}
