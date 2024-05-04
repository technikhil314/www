import React from "react";
export default function LoadingUserImage() {
  return (
    <div className="max-w-sm px-4 mx-auto border border-blue-300 rounded-md shadow">
      <div className="flex space-x-4 animate-pulse">
        <div className="w-8 h-8 rounded-full bg-slate-700"></div>
      </div>
    </div>
  );
}
