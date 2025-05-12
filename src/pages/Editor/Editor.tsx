import { MarkdownEditor } from "../../components/Editor/MarkdownEditor";
import { Footer } from "../../components/Footer/Footer";

export const Editor = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <MarkdownEditor />
      <Footer />
    </div>
  );
};
