export default function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
      <div className="grid md:grid-cols-5 gap-0">
        <div className="md:col-span-2 relative h-48 md:h-full bg-gray-200"></div>
        <div className="md:col-span-3 p-6">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
