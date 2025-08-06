import React from "react";
import { Lightbulb, Users, Heart, BookOpen } from "lucide-react";
import Container from "@/components/shared/Container";
import  HeadingBadge from '@/components/shared/Heading/HeadingBadge';
import { div, MotionVariantsDiv, MotionVariantsH2, MotionVariantsP } from "@/components/shared/animation/AnimationVariants/MotionVariants";




const Core = () => {

const variants =  {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      }
    },
  },
  item: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  },
}

const VALUES = [
  {
    icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
    title: "We Think Different",
    description:
      "We love trying out new tech and finding smart ways to solve problems. No boring stuff here.",
  },
  {
    icon: <Users className="w-6 h-6 text-teal-500" />,
    title: "People Come First",
    description:
      "We grow together. Whether you're a beginner or a pro, you're part of the crew. We help each other out.",
  },
  {
    icon: <Heart className="w-6 h-6 text-pink-500" />,
    title: "Built with Passion",
    description:
      "We code because we care. It’s fun, exciting, and we’re here to build things that matter.",
  },
];

  return (
    <Container className="my-10 sm:my-16 ">
        <div className="mx-auto flex justify-center items-center relative overflow-hidden">
<HeadingBadge>

   <BookOpen className="w-4 h-4" />
             Core Values
            </HeadingBadge>

        </div>

         
      <div className="text-center max-w-4xl mx-auto mb-12">
        <div
          variants={variants.container}
          initial="hidden"
          animate={"visible"}
        >
         <MotionVariantsH2
            id="core-heading"
            variants={variants.item}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            What <span className="text-secondary">Make</span> Us Crazy
          </MotionVariantsH2>
          <MotionVariantsP variants={variants.item} className="md:text-xl sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These are the beliefs that guide everything we do at CodeKPI.
          </MotionVariantsP>
        </div>
      </div>

      <MotionVariantsDiv
        variants={variants.container}
        initial="hidden"
        whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
        className="flex md:flex-row md:flex-nowrap gap-4 flex-wrap justify-center items-center"
      >
        {VALUES.map((value) => (
<div
  key={value.title}
  variants={variants.item}
  className="group w-full max-w-sm rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-out hover:border-gray-300"
>
  {/* Icon */}
  <div className="mb-5 flex justify-start">
    <div className="p-4 rounded-full bg-gradient-to-tr from-gray-50 to-white shadow-inner group-hover:scale-105 transition-transform duration-200 ease-in-out">
      {value.icon}
    </div>
  </div>

  {/* Title */}
  <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">
    {value.title}
  </h3>

  {/* Description */}
  <p className="text-sm text-gray-600 leading-relaxed">
    {value.description}
  </p>

  {/* Subtle hover line */}
  <div className="mt-5 h-1 w-10 mx-auto bg-gradient-to-r from-secondary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
</div>

        ))}
      </MotionVariantsDiv>
    </Container>
  );
};

export default Core;
