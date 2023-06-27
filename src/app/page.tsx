import Link from "next/link"

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl space-y-10">
        <h1 className="text-5xl">Informe de relevamiento web3 - LATAM</h1>
        <div className="">
          <Link href="/why">
            <button className="border-2 border-gray-800 px-4 py-2 rounded-md">
              Leer
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
