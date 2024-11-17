import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFetch = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const userJson = await response.json();
        setUser(userJson);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };

    userFetch();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>There was an error...</h2>;
  const { avatar_url, login, name, id, bio, company } = user;

  return (
    <>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={login}
      />
      <p>{name}</p>
      <h2>{id}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </>
  );
};
export default MultipleReturnsFetchData;
