import React, { useEffect, useContext, useState } from "react";
import { SearchContext } from "./GithubSearch";

export function FetchData() {
  const UserContext = useContext(SearchContext);
  const [userfetch, setUserFetch] = useState([]);
  const [errormessage, setErrorMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API = `https://api.github.com/search/users?q=${UserContext}`;
  useEffect(() => {
    if (!UserContext) {
      setUserFetch([]);
    }
    setIsLoading(true);
    (async () => {
      try {
        console.log(API);
        const result = await fetch(API);

        const result2 = await result.json();
        const fetchMap = result2.items.map((data) => data.login);
        console.log(fetchMap);
        setUserFetch(fetchMap);
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    })();
  }, [API]);

  const user = userfetch.map((user) => {
    console.log(user);
    return <li>{user}</li>;
  });
  console.log(user);

  return (
    <div>
      {errormessage ? errormessage : null}
      {isLoading && <p>loading..</p>}

      {user.length === 0 ? <p>No results</p> : user}
    </div>
  );
}
