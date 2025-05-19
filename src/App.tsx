import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Default</Button>
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"link"}>Link</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"secondary"}>Secondary</Button>
    </div>
  );
}

export default App;
