import Header from "@/components/header"
import BlogCardSkeleton from "@/components/blog-card-skeleton"

export default function LoadingAlternative() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-[#ededed] py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto mb-4 animate-pulse"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto mb-8 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded w-full mx-auto animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Featured Post Skeleton */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="h-8 bg-gray-200 rounded w-48 mb-8 animate-pulse"></div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl animate-pulse">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-80 bg-gray-200"></div>
                <div className="p-6 md:p-8">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="h-4 w-24 bg-gray-200 rounded"></div>
                      <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts Skeleton */}
        <section className="py-12 bg-[#ededed]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="h-8 bg-gray-200 rounded w-48 mb-8 animate-pulse"></div>
                <div className="grid gap-8">
                  {[1, 2, 3].map((i) => (
                    <BlogCardSkeleton key={i} />
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="flex items-center">
                          <div className="h-4 w-16 bg-gray-200 rounded mr-2"></div>
                          <div className="h-4 w-20 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="h-8 bg-gray-200 rounded-full px-4"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
