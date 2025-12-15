import { Header } from "../Header";
import { ThemeProvider } from "@/lib/ThemeProvider";

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <Header
        onSupportClick={() => console.log("Support clicked")}
        onSearchChange={(val) => console.log("Search:", val)}
      />
    </ThemeProvider>
  );
}
