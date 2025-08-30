const { Badge } = require("@/components/ui/badge")
const { Trophy, Medal, Award, Hash } = require("lucide-react")

const StudentRow = ({
  student,
  rank,
  isHighlighted = false,
}) => {
  const getRankBadgeColor = (rank) => {
    if (rank === 1) return "bg-yellow-100 text-yellow-800 hover:text-white border-yellow-200"
    if (rank === 2) return "bg-gray-100 text-gray-800 hover:text-white border-gray-200"
    if (rank === 3) return "bg-orange-100 text-orange-800 hover:text-white border-orange-200"
    return "bg-blue-100 text-blue-800 hover:text-white border-blue-200"
  }

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 ${
        isHighlighted ? "bg-orange-50 border-orange-200 shadow-md" : "bg-white border-gray-200 hover:shadow-md"
      }`}
    >
      <div className="flex items-center gap-4">
        {/* Rank */}
        <div className="flex items-center justify-center w-12">
          <RankIcon rank={rank} />
        </div>

        {/* Student Info */}
        <div>
          <h3 className="font-semibold text-gray-900">{student.name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Hash className="w-3 h-3" />
            <span>{student.id}</span>
          </div>
        </div>
      </div>

      {/* Points and Rank Badge */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-xl font-bold text-gray-900">{student.points}</div>
          <div className="text-xs text-gray-500">points</div>
        </div>
        <Badge className={`${getRankBadgeColor(rank)} font-semibold`}>#{rank}</Badge>
      </div>
    </div>
  )
}

export default StudentRow



const RankIcon= ({ rank }) => {
  if (rank === 1) {
    return <Trophy className="w-6 h-6 text-yellow-500" />
  } else if (rank === 2) {
    return <Medal className="w-6 h-6 text-gray-400" />
  } else if (rank === 3) {
    return <Award className="w-6 h-6 text-orange-600" />
  }
  return <span className="w-6 h-6 flex items-center justify-center text-gray-500 font-bold">#{rank}</span>
}