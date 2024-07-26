import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="size-full flex">
      <article className="m-auto bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Page Not Found</h1>
        <p className="text-gray-600 mb-6">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
        <Link to="/" className="inline-block py-3 px-6 bg-black hover:brightness-90 text-white rounded-lg font-semibold">Go back to homepage</Link>
      </article>
    </section>
  )
}
