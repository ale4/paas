import { AIChatPanel } from "../AIChatPanel";

export default function AIChatPanelExample() {
  return (
    <div className="h-[600px] relative">
      <AIChatPanel
        isOpen={true}
        onClose={() => console.log("Close clicked")}
      />
    </div>
  );
}
