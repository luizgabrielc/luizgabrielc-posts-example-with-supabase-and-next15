import { getPosts } from "./_actions/actions";
import ButtonDelete from "./_components/button-delete";
import NewPostForm from "./_components/new-post";

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <main className="max-w-2xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold text-center">Lista de Posts</h1>
      <NewPostForm />
      <ul className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <li
              key={post.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm border text-neutral-800 relative"
            >
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-lg text-gray-700">{post.content}</p>
              <ButtonDelete postId={post.id} />
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">Nenhum post encontrado.</p>
        )}
      </ul>
    </main>
  );
}
