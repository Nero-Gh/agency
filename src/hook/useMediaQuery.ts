import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    //get the current state of the media query
    const media = window.matchMedia(query);

    //if the state of the media query changes, update the matches state
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    //add a listener to update the matches state if it changes
    const listener = () => setMatches(media.matches);

    //add the listener to the media query
    window.addEventListener("resize", listener);

    //remove the listener when the component unmounts
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
