import React, { useState } from "react";

const ShowcaseArea = ({ large, small, jsx, name }) => {
  const clipboard = useClipboard({ timeout: 1000 });
  const [clipboardColor, setClipboardColor] = useState("currentColor");
  const [afterCopyText, setAfterCopyText] = useState("");
  const saveToClipboard = () => {
    clipboard.copy(jsx);
    setClipboardColor("#b0fc38");
    setAfterCopyText("Copied!");
  };
  return (
    <div className="rounded-xl border border-gray-200">
      <div className="flex justify-around bg-[#373A40] p-4 rounded-t-xl group-hover:border group-hover:border-[#ff5478] border-t-0 text-white ">
        <p className="gradientText font-bold text-xl">{name}</p>
        <p className="text-gray-400">
          <button onClick={saveToClipboard} className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={clipboardColor}
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span className="text-[#b0fc38] ml-4">{afterCopyText}</span>
          </button>
        </p>
      </div>
      <div className="w-full rounded-b-xl">
        <div className="hidden lg:block">
          <img
            src={large}
            alt={name}
            className="rounded-b-xl object-cover object-center w-full rounded-md bg-gray-500"
          />
        </div>
        <div className="lg:hidden">
          <img
            src={small}
            alt={name}
            className="rounded-b-xl object-cover object-center w-full rounded-md bg-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowcaseArea;

function useClipboard({ timeout = 2000 } = {}) {
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] = useState(null);

  const handleCopyResult = (value) => {
    clearTimeout(copyTimeout);
    setCopyTimeout(setTimeout(() => setCopied(false), timeout));
    setCopied(value);
  };

  const copy = (valueToCopy) => {
    if ("clipboard" in navigator) {
      navigator.clipboard
        .writeText(valueToCopy)
        .then(() => handleCopyResult(true))
        .catch((err) => setError(err));
    } else {
      setError(new Error("useClipboard: navigator.clipboard is not supported"));
    }
  };

  const reset = () => {
    setCopied(false);
    setError(null);
    clearTimeout(copyTimeout);
  };

  return { copy, reset, error, copied };
}
