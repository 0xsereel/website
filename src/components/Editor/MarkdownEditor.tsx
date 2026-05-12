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
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleChange = (val?: string) => {
    if (val !== undefined) setValue(val);
  };

  const generateId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const generateSummary = (content: string) => {
    return content.substring(0, 100).trim().replace(/[^\w\s]/g, "");
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
    <div style={{ width: "100%", padding: "40px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <h1
          style={{
            fontFamily: "var(--display)",
            fontSize: 32,
            textTransform: "uppercase",
          }}
        >
          Markdown Editor
        </h1>
      </div>
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}
      >
        <button
          onClick={handleSave}
          style={{
            background: "var(--accent)",
            color: "#001A0C",
            border: "none",
            borderRadius: 999,
            padding: "10px 24px",
            fontFamily: "var(--mono)",
            fontSize: 12,
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginBottom: 24,
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          style={{
            width: "100%",
            padding: "14px 16px",
            background: "rgba(111,229,165,0.03)",
            border: "1px solid var(--rule-2)",
            borderRadius: 10,
            color: "var(--ink)",
            fontFamily: "var(--sans)",
            fontSize: 15,
            outline: "none",
          }}
        />
        <input
          type="text"
          placeholder="https://example.com/image.jpg"
          value={blog.image}
          onChange={(e) => setBlog({ ...blog, image: e.target.value })}
          style={{
            width: "100%",
            padding: "14px 16px",
            background: "rgba(111,229,165,0.03)",
            border: "1px solid var(--rule-2)",
            borderRadius: 10,
            color: "var(--ink)",
            fontFamily: "var(--sans)",
            fontSize: 15,
            outline: "none",
          }}
        />
      </div>
      <div
        data-color-mode="light"
        style={{
          border: "1px solid var(--rule-2)",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <MDEditor value={value} onChange={handleChange} height={600} />
      </div>
    </div>
  );
};
