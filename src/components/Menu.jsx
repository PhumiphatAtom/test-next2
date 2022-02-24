import React from "react";

function Menu() {
  return (
    <div>
      <div className="flex w-full border-b-2 pb-2">
        <div className="grid h-8 flex-grow card  rounded-box place-items-center">
          <a className="cursor-pointer hover:text-blue-600 font-semibold">Submission</a>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-8 flex-grow card  rounded-box place-items-center">
        <a className="cursor-pointer hover:text-blue-600 font-semibold">Engagement</a>
        </div>
      </div>
      <div className="flex justify-center pt-2">
        <div className="tabs">
          <a className="tab tab-bordered tab-active">Daily</a>
          <a className="tab tab-bordered hover:text-blue-600">Weekly</a>
          <a className="tab tab-bordered hover:text-blue-600">Monthly</a>
        </div>
        <div className="flex">
          <div className="tabs">
            <a className="tab">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 hover:text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </a>
            <a className="tab tab-active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
