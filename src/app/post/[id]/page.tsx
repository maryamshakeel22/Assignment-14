import React from 'react';

async function PostDetails({ params }: { params: { id: string } }) {
  const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
  const response = await fetch(url);

  if (!response.ok) {
    return <div>Error loading data.</div>;
  }

  const data = await response.json();

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Post Details</h2>
        <p className="text-lg text-gray-700">
          <span className="font-medium text-gray-800">ID:</span> {data.id}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-medium text-gray-800">Body:</span> {data.body}
        </p>
      </div>
    </div>

  );
}

export default PostDetails;