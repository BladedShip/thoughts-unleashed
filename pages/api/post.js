import { client } from "../../lib/client";

export const loadData = async (start, end) => {
  const query = `{
    "posts":*[_type=="post"],
    "total":count(*[_type=="post"])
  }`;

  const { posts, total } = await client.fetch(query);

  return {
    posts,
    total
  }
};
