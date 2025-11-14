import { ArrowUp } from "lucide-react";

export default function TopOfPage() {
  return (
    <a title="back to top" href="#" className="bg-black/70 inline-flex p-1.5 rounded-full">
      <ArrowUp className="text-gray-300 size-8" />
    </a>
  );
}
