import { Article } from "./(article)"
import { Hero } from "./layout/hero"

const Page = () => {
  return (
    <div>
      <div className="min-h-screen">
        <Hero />
      </div>
      <Article />
    </div>
  )
}

export default Page
