"use client"

import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Hash, User, Building, Calendar } from "lucide-react"

const StudentRow = ({ student, rank, isHighlighted = false }) => {
  const getRankBadgeColor = (rank) => {
    if (rank === 1) return "bg-yellow-100 text-yellow-800 hover:text-white border-yellow-200"
    if (rank === 2) return "bg-gray-100 text-gray-800 hover:text-white border-gray-200"
    if (rank === 3) return "bg-orange-100 text-orange-800 hover:text-white border-orange-200"
    return "bg-blue-100 text-blue-800 hover:text-white border-blue-200"
  }

  return (
    <div
      className={`flex flex-row items-start sm:items-center justify-between p-4 rounded-lg border transition-all duration-200 ${
        isHighlighted ? "bg-orange-50 border-orange-200 shadow-md" : "bg-white border-gray-200 hover:shadow-md"
      }`}
    >
      {/* Left Section: Rank + Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
        {/* Rank Icon */}
        <div className="flex items-center justify-center w-12">
          <RankIcon rank={rank} />
        </div>

        {/* Student Info */}
        <div className="flex flex-col gap-1 w-full">
          <h3 className="font-semibold text-gray-900 truncate">{student.name}</h3>

<div className="flex flex-wrap gap-3 text-xs text-gray-500"> <div className="flex items-center gap-1"> <Hash className="w-3 h-3" /> {student.studentId} </div> <div className=" items-center gap-1 lg:flex hidden"> <Building className="w-3 h-3" /> {student.polytechnic} </div> <div className="flex items-center gap-1"> <Calendar className="w-3 h-3" /> {student.session} </div> <div className="xl:flex hidden items-center gap-1 "> <Hash className="w-3 h-3" /> {student.department} </div> </div>
        </div>
      </div>

      {/* Right Section: Points & Rank */}
      <div className="flex items-center gap-3 mt-2 sm:mt-0 justify-end">
        <div className="text-right">
          <div className="text-xl font-bold text-gray-900">{student.point}</div>
          <div className="text-xs text-gray-500">points</div>
        </div>
        <Badge className={`${getRankBadgeColor(rank)} font-semibold`}>#{rank}</Badge>
      </div>
    </div>
  )
}

export default StudentRow

const RankIcon = ({ rank }) => {
  if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />
  if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />
  if (rank === 3) return <Award className="w-6 h-6 text-orange-600" />
  return <span className="w-6 h-6 flex items-center justify-center text-gray-500 font-bold">#{rank}</span>
}
