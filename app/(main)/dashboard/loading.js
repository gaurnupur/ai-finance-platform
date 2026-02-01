export default function DashboardLoading() {
  return (
    <div className="space-y-8">
      <div className="h-32 bg-gray-200 rounded-lg animate-pulse" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-64 bg-gray-200 rounded-lg animate-pulse" />
        <div className="h-64 bg-gray-200 rounded-lg animate-pulse" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-32 bg-gray-200 rounded-lg animate-pulse" />
        ))}
      </div>
    </div>
  );
}