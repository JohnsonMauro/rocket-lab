import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { ALL_POSTS_QUERY, allPostsQueryVars } from "./PostList";

import Label from "@components/common/Form/Label";
import Input from "@components/common/Form/Input";
import { Form, Title, Button } from "./styles";

const CREATE_POST_MUTATION = gql`
  mutation createPost($title: String!, $url: String!) {
    createPost(title: $title, url: $url) {
      id
      title
      votes
      url
      createdAt
    }
  }
`;

export default function Submit() {
  const [createPost, { loading }] = useMutation(CREATE_POST_MUTATION);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new window.FormData(form);
    const title = formData.get("title");
    const url = formData.get("url");
    form.reset();

    createPost({
      variables: { title, url },
      update: (proxy, { data: { createPost } }) => {
        const data = proxy.readQuery({
          query: ALL_POSTS_QUERY,
          variables: allPostsQueryVars,
        });
        // Update the cache with the new post at the top of the
        proxy.writeQuery({
          query: ALL_POSTS_QUERY,
          data: {
            ...data,
            allPosts: [createPost, ...data.allPosts],
          },
          variables: allPostsQueryVars,
        });
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Submit</Title>
      <Label forControl="title">Title</Label>
      <Input type="text" id="title" name="title" placeholder="title" />
      <Input type="url" id="url" name="url" placeholder="url" />
      <Button type="submit" disabled={loading}>
        Submit
      </Button>
    </Form>
  );
}
