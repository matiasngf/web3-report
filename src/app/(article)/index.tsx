import AshokaSection from "./ashoka/ashoka.mdx"
import ConditionsSection from "./conditions/conditions.mdx"
import LdmSection from "./ldm/ldm.mdx"
import ParticipantsSection from "./participants/participants.mdx"
import StatisticsSeciton from "./statistics/statistics.mdx"
import WhySection from "./why/why.mdx"

const sections = {
  why: WhySection,
  conditions: ConditionsSection,
  statistics: StatisticsSeciton,
  ashoka: AshokaSection,
  ldm: LdmSection,
  participants: ParticipantsSection,
} as const

export const Article = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-32 px-8">
      {Object.entries(sections).map(([key, Section]) => (
        <div key={key} id={key} className="space-y-8 text-lg leading-relaxed">
          <Section />
        </div>
      ))}
    </div>
  )
}
