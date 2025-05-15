import Header from "@/components/header"
import Spinner from "@/components/sppiner"

export default function PostLoading() {
  return (
    <div>
      <Header />
    <div className="flex justify-center items-center min-h-screen">
      <Spinner />
    </div>
    </div>
  )
}
