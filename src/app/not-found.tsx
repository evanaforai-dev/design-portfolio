import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-shell flex-col items-start px-6 py-24 md:px-10 md:py-40">
      <p className="label mb-6">404</p>
      <h1 className="max-w-2xl text-3xl font-medium tracking-tight text-fg md:text-5xl">
        this page doesn&apos;t exist.
      </h1>
      <Link
        href="/"
        className="mt-10 text-sm text-fg underline-offset-4 hover:underline"
      >
        back to home
      </Link>
    </div>
  );
}
