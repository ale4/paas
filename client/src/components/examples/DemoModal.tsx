import { DemoModal } from "../DemoModal";

export default function DemoModalExample() {
  return (
    <DemoModal
      isOpen={true}
      onClose={() => console.log("Close")}
    />
  );
}
