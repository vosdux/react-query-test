import { createFileRoute, Link } from "@tanstack/react-router";
import { postsQueryOptions } from "../shared/queryOptions";
import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Posts } from "../service/posts";

export const Route = createFileRoute("/posts/")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postsQueryOptions),
  component: PostsPage,
});

const columns: ColumnsType<Posts> = [
  {
    dataIndex: "title",
    title: "title",
    render: (value: string, record) => (
      <Link to="/posts/$postId" params={{ postId: record.id.toString() }}>
        {value}
      </Link>
    ),
  },
  { dataIndex: "body", title: "body" },
];

function PostsPage() {
  const { data, isFetching } = useQuery(postsQueryOptions);

  return (
    <div>
      <Table dataSource={data} loading={isFetching} columns={columns} />
    </div>
  );
}
