import React from "react";

function MiniMenu() {
  return (
    <div className="mx-auto flex justify-between space">
      <button className="btn w-16 h-8 btn-sm btn-outline btn-circle to-blue-400 btn-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-xs"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
        <div className="text-xs">Like</div>
      </button>
      <button className="btn w-24 h-8 btn-sm btn-outline btn-circle to-blue-400 btn-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-xs"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <div className="text-xs">Comment</div>
      </button>
      <button className="btn w-20 h-8 btn-sm btn-outline btn-circle to-blue-400 btn-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-xs"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
        <div className="text-xs">Point</div>
      </button>
      <button className="btn w-24 h-8 btn-sm btn-outline btn-circle to-blue-400 btn-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-xs"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
        <div className="text-xs">Diamond</div>
      </button>
    </div>
  );
}

export default MiniMenu;
