import { AIFeaturesSection } from "../AIFeaturesSection";

export default function AIFeaturesSectionExample() {
  return (
    <AIFeaturesSection
      onTryAISupport={() => console.log("AI Support clicked")}
      onTryAssessment={() => console.log("Assessment clicked")}
      onTryCompliance={() => console.log("Compliance clicked")}
    />
  );
}
