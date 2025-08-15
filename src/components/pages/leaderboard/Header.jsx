const { default: HeadingBadge } = require("@/components/shared/Heading/HeadingBadge")
const { Star, Code } = require("lucide-react")

const Header = ()=>{
    return(
                <div className="text-center mb-8">

<HeadingBadge>
<div
    >
      <Star className="h-4 w-4" />
    </div>

    <span>Empowering New Tech Innovation</span>

    <Code className="h-4 w-4" />

</HeadingBadge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            🤖 <span className="text-orange-500">AI Workshop</span> Leaders
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Track your progress and see how you rank among your fellow AI enthusiasts.
          </p>
        </div>
    )
}


export default Header