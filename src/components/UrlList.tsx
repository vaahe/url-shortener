import { Table, message } from "antd";
import { useEffect, useState } from "react";
import { getAllUrls } from "../services/urlService";

export const UrlList = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getAllUrls()
      .then(setData)
      .catch(() => message.error("Failed to load URLs"));
  }, []);

  const columns = [
    {
      title: "Short URL",
      dataIndex: "shortUrl",
      key: "shortUrl",
      render: (url: string) => <a href={url}>{url}</a>,
    },
    { title: "Long URL", dataIndex: "longUrl", key: "longUrl" },
  ];

  return <Table dataSource={data} columns={columns} rowKey="id" />;
};
