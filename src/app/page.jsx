import React from 'react';

const page = () => {
  return (
    <>
      <a href="https://www.youtube.com/watch?v=cAkMcPfY_Ns">
        <h1 className="text-3xl text-center text-white hover:text-green-500 cursor-pointer p-5 bg-gray-900">
          Lawrence Dsouza
        </h1>
      </a>
      <div className="bg-gray-900 min-h-screen p-5 text-green-500 space-y-4 text-center">
        <p>Brief description: I am exploring towards the path of life, good day ahead</p>
        <p>
          Learnings:
          <br />
          learnt to initialize the next-js, run the server, pages..., rafce
          <br />
          learnt to use file-based routing, dynamic routing, idea on tailwind CSS
          <br />
          use of Fragment rather than using div tags, getting more well-versed with git
        </p>
      </div>
    </>
  );
};

export default page;
