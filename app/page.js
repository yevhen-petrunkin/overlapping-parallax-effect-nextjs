import OverlapClient from "@/components/OverlapClient";
import Section from "@/components/Section";

export default function Home() {
  const sections = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    // padding-top equals the height of header
    <main className="pt-16">
      <OverlapClient>
        {sections.map((section) => (
          <Section number={section} />
        ))}
      </OverlapClient>
    </main>
  );
}
