import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLongUrl } from "../services/urlService";

export const Redirect = () => {
  const { shortId } = useParams();

  useEffect(() => {
    const fetchUrl = async () => {
      const longUrl = await getLongUrl(shortId!);
      if (longUrl) window.location.href = longUrl;
      else console.error("URL not found");
    };

    fetchUrl();
  }, [shortId]);

  return <p>Redirecting...</p>;
};
