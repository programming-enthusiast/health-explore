import Link from "next/link"

const Logo = () => {
  return (
    <Link href={`/`} as={`/`} prefetch={false}>
      <a className="text-blue-500 font-semibold text-lg" title="Return to homepage">
        HEALTH EXPLORE
      </a>
    </Link>
  )
}

export default Logo