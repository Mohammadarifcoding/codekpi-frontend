"use client"
import { useEffect, useState, useMemo,Fragment } from "react"
import { Trophy, User } from "lucide-react"
import StudentRow from "./StudentRow"
import SearchBar from "./Search"

const Leaderboard = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [limit] = useState(10)
  const [meta, setMeta] = useState(null)

  // --- Debounce search ---
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery.trim())
      setPage(1) // reset page on new search
    }, 500) // 500ms debounce

    return () => clearTimeout(handler)
  }, [searchQuery])

  // --- Fetch data ---
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true)
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        })
        if (debouncedQuery) params.append("query", debouncedQuery)

        const res = await fetch(
          `https://backend.codekpi.club/api/v1/workshop/list?${params.toString()}`,
          { cache: "no-store" }
        )
        const data = await res.json()
        setStudents(data?.data?.data || [])
        setMeta(data?.data?.meta || null)
      } catch (err) {
        console.error("Failed to fetch students:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchStudents()
  }, [page, limit, debouncedQuery])

  // --- Sort & rank ---


  const totalStudents = meta?.total || 0
  const averagePoints =
    students.length > 0
      ? Math.round(
          students.reduce((acc, s) => acc + s.point, 0) /
            students.length
        )
      : 0
console.log(students[0])
  return (
    <div>
      {/* Stats */}
      <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
        <span>{totalStudents} students</span>
        <span>Average: {averagePoints} points</span>
      </div>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-orange-500" />
            {debouncedQuery
              ? `Search Results (${students.length})`
              : "Full Leaderboard"}
          </h2>
        </div>

        {/* Students */}
        <div className="divide-y divide-gray-100 relative min-h-[200px]">
          {loading && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
              <div className="animate-spin w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full"></div>
            </div>
          )}
          {students.length > 0 ? (
            students.map((student) => (
              <StudentRow
                key={student.studentId}
                student={student}
                rank={student.rank}
                isHighlighted={
                  debouncedQuery &&
                  (student.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
                    student.studentId
                      .toLowerCase()
                      .includes(debouncedQuery.toLowerCase()))
                }
              />
            ))
          ) : (
            !loading && (
              <div className="p-8 text-center">
                <User className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No students found
                </h3>
                <p className="text-gray-500">
                  Try searching with a different name or student ID.
                </p>
              </div>
            )
          )}
        </div>

        {/* Pagination */}
{meta && meta.totalPages > 1 && (
  <div className="flex justify-center gap-1 p-4 border-t text-sm flex-wrap">
    {/* Prev Button */}
    <button
      disabled={page <= 1}
      onClick={() => setPage((p) => Math.max(1, p - 1))}
      className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
    >
      Prev
    </button>

    {/* Page Buttons */}
    {Array.from({ length: meta.totalPages }, (_, i) => i + 1)
      .filter((p) => {
        // Show first, last, current ±1, current ±2
        return (
          p === 1 ||
          p === meta.totalPages ||
          (p >= page - 2 && p <= page + 2)
        )
      })
      .map((p, idx, arr) => {
        // Check for ellipsis
        const prev = arr[idx - 1]
        const showEllipsis = prev && p - prev > 1
        return (
          <Fragment key={p}>
            {showEllipsis && <span className="px-2">…</span>}
            <button
              onClick={() => setPage(p)}
              className={`px-3 py-1 rounded ${
                p === page
                  ? "bg-orange-500 text-white font-semibold"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {p}
            </button>
          </Fragment>
        )
      })}

    {/* Next Button */}
    <button
      disabled={page >= meta.totalPages}
      onClick={() => setPage((p) => Math.min(meta.totalPages, p + 1))}
      className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
    >
      Next
    </button>
  </div>
)}

      </div>
    </div>
  )
}

export default Leaderboard
