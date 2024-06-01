
export default function NotPublic() {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-6">
        <h1 className="text-3xl font-bold">Private Playlist</h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center gap-4">
            <LockIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
            <p className="text-gray-500 dark:text-gray-400 text-center">This playlist is not publicly available.</p>
          </div>
        </div>
      </div>
    )
  }
  
  function LockIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  }