
import { Card } from "@/components/ui/card"

export default function Nomovie({text}) {
  return (
    <Card className="mx-auto max-w-md p-6 border border-gray-200 shadow-sm dark:border-gray-700">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <FilmIcon className="h-12 w-12 text-gray-400 dark:text-gray-500" />
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">No Movies Available</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {text?text  :`Your playlist is currently empty. Add some movies to get started.`}
          </p>
        </div>
      </div>
    </Card>
  )
}

function FilmIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  )
}