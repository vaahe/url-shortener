import { useState } from "react";
import { Input, Button, message } from "antd";
import { shortenUrl } from "../services/urlService";

export const ShortenForm = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    if (!url) {
      message.error("Please enter a valid URL");
      return;
    }

    setLoading(true);

    try {
      const shortId = await shortenUrl(url);
      setShortUrl(`${window.location.origin}/${shortId}`);
    } catch (error) {
      message.error("Failed to shorten URL");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <div style={{ maxWidth: 500, textAlign: "center" }}>
      <Input
        placeholder="Enter your long URL"
        value={url}
        onChange={handleChange}
        style={{ marginBottom: "10px" }}
      />
      <Button type="primary" onClick={handleShorten} loading={loading} block>
        Shorten URL
      </Button>

      {shortUrl && (
        <div style={{ marginTop: "15px", fontWeight: "bold" }}>
          Shortened URL:{" "}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};
