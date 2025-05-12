import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
interface Blog {
  id: number;
  date: string;
  title: string;
  image: string;
  content: string;
  summary: string;
}

export const MarkdownEditor = () => {
  const [value, setValue] = useState("");
  const [blog, setBlog] = useState<Blog>({
    id: 0,
    date: "",
    title: "",
    image: "",
    content: "",
    summary: "",
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleChange = (val?: string) => {
    if (val !== undefined) setValue(val);
  };

  const generateId = () => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    return randomNumber;
  };

  const generateSummary = (content: string) => {
    const summary = content
      .substring(0, 100)
      .trim()
      .replace(/[^\w\s]/g, "");
    return summary;
  };

  const handleSave = () => {
    const newBlog = {
      ...blog,
      id: generateId(),
      date: formatDate(new Date()),
      content: value,
      summary: generateSummary(value),
    };

    setBlog(newBlog);

    console.log(JSON.stringify(newBlog));
  };

  return (
    <div className="w-full flex items-center justify-center py-20 bg-white text-black">
      <div className="w-[90%]">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-4xl font-bold">Markdown Editor</h1>
        </div>

        <div className="mb-5 flex items-center justify-end">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-6 py-2 rounded-xl cursor-pointer hover:bg-black"
          >
            Save
          </button>
        </div>

        <div className="w-full flex items-center justify-center my-10 flex-col">
          <div className="w-full">
            <input
              type="text"
              placeholder="Title"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
              className="w-full mt-2 p-3 text-md rounded-full outline-none border "
            />
          </div>

          <div className="w-full mt-5">
            <input
              type="text"
              value={blog.image}
              onChange={(e) => setBlog({ ...blog, image: e.target.value })}
              placeholder="https://example.com/image.jpg"
              className="w-full mt-2 p-3 text-md rounded-full outline-none border"
            />
          </div>
        </div>

        <div data-color-mode="light" className="border  rounded-xl">
          <MDEditor value={value} onChange={handleChange} height={1000} />
        </div>
      </div>
    </div>
  );
};
