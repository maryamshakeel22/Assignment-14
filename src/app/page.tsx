import Link from 'next/link';

async function Product() {
  const apiEndpoints = [
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/users',
  ];

  const fetchData = async (endpoint: string) => {
    const response = await fetch(endpoint);
    return await response.json();
  };

  const [todos, posts, users] = await Promise.all(apiEndpoints.map(fetchData));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
  <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-600">Dynamic API Fetch</h1>

  <section className="mb-10">
    <h2 className="text-3xl font-bold mb-6 text-gray-700">Todos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {todos.slice(0, 6).map((todo: any) => (
        <Link key={todo.id} href={`/todo/${todo.id}`}>
          <div className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl hover:bg-blue-50 transition-transform transform hover:scale-105">
            <h3 className="text-lg font-semibold text-gray-800">Todo {todo.id}</h3>
            <p className="text-gray-600 truncate">{todo.title}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>

  <section className="mb-10">
    <h2 className="text-3xl font-bold mb-6 text-gray-700">Posts</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.slice(0, 6).map((post: any) => (
        <Link key={post.id} href={`/post/${post.id}`}>
          <div className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl hover:bg-green-50 transition-transform transform hover:scale-105">
            <h3 className="text-lg font-semibold text-gray-800">Post {post.id}</h3>
            <p className="text-gray-600 truncate">{post.title}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>

  <section>
    <h2 className="text-3xl font-bold mb-6 text-gray-700">Users</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.slice(0, 6).map((user: any) => (
        <Link key={user.id} href={`/user/${user.id}`}>
          <div className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl hover:bg-purple-50 transition-transform transform hover:scale-105">
            <h3 className="text-lg font-semibold text-gray-800">User {user.id}</h3>
            <p className="text-gray-600">{user.name}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
</div>

  );
}

export default Product;

