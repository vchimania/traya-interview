import { ProtectedWithAuth } from "./protected-with-auth";
import "./styles.css";

export const items = [
  {
    title: "section 1",
    conetct: "Section 1 content",
  },
  {
    title: "section 2",
    conetct: "Section 2 content",
  },
  {
    title: "section 3",
    conetct: "Section 3 content",
  },
];

export default function App() {
  return (
    <div className="App">
      <ProtectedWithAuth />
    </div>
  );
}
