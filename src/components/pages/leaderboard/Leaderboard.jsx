"use client" // Next.js client component

import { Trophy, User } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import StudentRow from './StudentRow';
import SearchBar from './Search';

// Sample data
const leaderboardData = [
  { id: "CST-2024-001", name: "ARIF HOSSAIN", points: 950 },
  { id: "CST-2024-002", name: "FATIMA KHAN", points: 950 },
  { id: "IT-2024-003", name: "RAHMAN UDDIN", points: 890 },
  { id: "CST-2024-004", name: "SARAH AHMED", points: 875 },
  { id: "EEE-2024-005", name: "KARIM HASSAN", points: 950 },
  { id: "IT-2024-006", name: "NEELIMA AMIN", points: 845 },
  { id: "CST-2024-007", name: "ABDUL MALIK", points: 830 },
  { id: "CST-2024-008", name: "RASHIDA BEGUM", points: 815 },
  { id: "IT-2024-009", name: "HASSAN ALI", points: 800 },
  { id: "EEE-2024-010", name: "NADIA ISLAM", points: 785 },
  { id: "CST-2024-011", name: "RAFIQ AHMED", points: 785 },
  { id: "IT-2024-012", name: "SALMA KHATUN", points: 755 },
  { id: "CST-2024-013", name: "OMAR FARUK", points: 740 },
  { id: "EEE-2024-014", name: "RUMA AKTER", points: 725 },
  { id: "IT-2024-015", name: "JAHIR RAYHAN", points: 710 },
]

const Leaderboard = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredStudents, setFilteredStudents] = useState([])

  // Sort & rank students
  const sortedStudents = useMemo(() => {
    let lastRank = 0
    let lastPoints = null

    const sorted = leaderboardData.sort((a, b) => b.points - a.points)

    return sorted.map((student, idx) => {
      let rank
      if (idx === 0) rank = 1
      else if (sorted[idx].points === sorted[idx - 1].points) rank = lastRank
      else rank = idx + 1

      lastRank = rank
      lastPoints = student.points
      return { ...student, rank }
    })
  }, [])

  // Update filtered list on search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredStudents(sortedStudents)
    } else {
      const filtered = sortedStudents.filter(
        (student) =>
          student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.id.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredStudents(filtered)
    }
  }, [searchQuery, sortedStudents])

  // Stats
  const totalStudents = sortedStudents.length
  const averagePoints = Math.round(
    sortedStudents.reduce((acc, student) => acc + student.points, 0) / totalStudents
  )

  return (
    <div>
      {/* Stats row */}
      <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
        <span>{filteredStudents.length} students</span>
        <span>Average: {averagePoints} points</span>
      </div>

      {/* Search bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Leaderboard box */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-orange-500" />
            {searchQuery
              ? `Search Results (${filteredStudents.length})`
              : "Full Leaderboard"}
          </h2>
        </div>

        {/* Students list */}
        <div className="divide-y divide-gray-100">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <StudentRow
                key={student.id}
                student={student}
                rank={student.rank}
                isHighlighted={
                  searchQuery.trim() !== "" &&
                  (student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    student.id.toLowerCase().includes(searchQuery.toLowerCase()))
                }
              />
            ))
          ) : (
            <div className="p-8 text-center">
              <User className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No students found
              </h3>
              <p className="text-gray-500">
                Try searching with a different name or student ID.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
