"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { UploadCloud, ExternalLink, Code2 } from "lucide-react";

const AddProject = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    image: "",
    githubUrl: "",
    liveUrl: "",
    description: "",
    technology: "",
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const token = localStorage.getItem("accessToken");
    console.log(localStorage.getItem("accessToken"));

    const payload = {
      title: form.title,
      slug: form.slug,
      image: form.image,
      githubUrl: form.githubUrl,
      liveUrl: form.liveUrl,
      description: form.description,
      technology: form.technology
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      featured: form.featured,
    };

    const res = await axios.post(
      "https://portfolio-server-mpeo.onrender.com/api/projects/create",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (res.data.success) {
      toast.success("Project Added Successfully");

      setForm({
        title: "",
        slug: "",
        image: "",
        githubUrl: "",
        liveUrl: "",
        description: "",
        technology: "",
        featured: false,
      });

      router.push("/dashboard/projects");
    }
  } catch (err) {
    console.error(err.response?.data);

    toast.error(
      err.response?.data?.message || "Failed to add project"
    );
  } finally {
    setLoading(false);
  }
};



  return (
    <div
      className="
      min-h-screen 
      bg-gray-50 
      dark:bg-gray-950 
      p-6
    "
    >
      <div
        className="
        max-w-5xl 
        mx-auto
      "
      >
        {/* Header */}

        <div className="mb-8">
          <h1
            className="
            text-4xl
            font-bold
            text-gray-800
            dark:text-white
          "
          >
            Add New Project 🚀
          </h1>

          <p
            className="
            text-gray-500
            dark:text-gray-400
            mt-2
          "
          >
            Create a new portfolio project.
          </p>
        </div>

        {/* Card */}

        <div
          className="
          bg-white
          dark:bg-gray-900
          rounded-2xl
          shadow-xl
          border
          border-gray-200
          dark:border-gray-800
          p-8
        "
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div
              className="
              grid
              md:grid-cols-2
              gap-6
            "
            >
              {/* Title */}

              <div>
                <label
                  className="
                  font-semibold
                  text-gray-700
                  dark:text-gray-200
                "
                >
                  Project Title
                </label>

                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Project Name"
                  className="
                    w-full
                    mt-2
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-300
                    dark:border-gray-700
                    bg-white
                    dark:bg-gray-800
                    text-gray-800
                    dark:text-white
                    placeholder:text-gray-400
                    outline-none
                    focus:ring-2
                    focus:ring-cyan-500
                  "
                  required
                />
              </div>

              {/* Slug */}

              <div>
                <label
                  className="
                  font-semibold
                  text-gray-700
                  dark:text-gray-200
                "
                >
                  Slug
                </label>

                <input
                  name="slug"
                  value={form.slug}
                  onChange={handleChange}
                  placeholder="Project Name Small Letter"
                  className="
                    w-full
                    mt-2
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-300
                    dark:border-gray-700
                    bg-white
                    dark:bg-gray-800
                    text-gray-800
                    dark:text-white
                    outline-none
                    focus:ring-2
                    focus:ring-cyan-500
                  "
                  required
                />
              </div>
            </div>

            {/* Image */}

            <div>
              <label
                className="
                font-semibold
                text-gray-700
                dark:text-gray-200
              "
              >
                Image URL
              </label>

              <div className="relative">
                <UploadCloud
                  className="
                    absolute
                    left-3
                    top-3.5
                    text-gray-400
                  "
                  size={20}
                />

                <input
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://image-url.com"
                  className="
                    w-full
                    pl-10
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-300
                    dark:border-gray-700
                    bg-white
                    dark:bg-gray-800
                    text-gray-800
                    dark:text-white
                    outline-none
                  "
                  required
                />
              </div>
            </div>

            {/* Github + Live */}

            <div
              className="
              grid
              md:grid-cols-2
              gap-6
            "
            >
              <div>
                <label
                  className="
                  font-semibold
                  text-gray-700
                  dark:text-gray-200
                "
                >
                  Github URL
                </label>

                <div className="relative">
                  <Code2
                    className="
                    absolute
                    left-3
                    top-3.5
                    text-gray-400
                    "
                    size={20}
                  />

                  <input
                    name="githubUrl"
                    value={form.githubUrl}
                    onChange={handleChange}
                    placeholder="Github Link"
                    className="
                    w-full
                    pl-10
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-300
                    dark:border-gray-700
                    bg-white
                    dark:bg-gray-800
                    text-gray-800
                    dark:text-white
                    outline-none
                    "
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className="
                  font-semibold
                  text-gray-700
                  dark:text-gray-200
                "
                >
                  Live URL
                </label>

                <div className="relative">
                  <ExternalLink
                    className="
                    absolute
                    left-3
                    top-3.5
                    text-gray-400
                    "
                    size={20}
                  />

                  <input
                    name="liveUrl"
                    value={form.liveUrl}
                    onChange={handleChange}
                    placeholder="Live Website"
                    className="
                    w-full
                    pl-10
                    px-4
                    py-3
                    rounded-xl
                    border
                    border-gray-300
                    dark:border-gray-700
                    bg-white
                    dark:bg-gray-800
                    text-gray-800
                    dark:text-white
                    outline-none
                    "
                    required
                  />
                </div>
              </div>
            </div>

            {/* Description */}

            <div>
              <label
                className="
                font-semibold
                text-gray-700
                dark:text-gray-200
              "
              >
                Description
              </label>

              <textarea
                rows="6"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Project description..."
                className="
                w-full
                mt-2
                px-4
                py-3
                rounded-xl
                border
                border-gray-300
                dark:border-gray-700
                bg-white
                dark:bg-gray-800
                text-gray-800
                dark:text-white
                resize-none
                outline-none
                "
                required
              />
            </div>

            {/* Technology */}

            <div>
              <label
                className="
                font-semibold
                text-gray-700
                dark:text-gray-200
              "
              >
                Technologies
              </label>

              <input
                name="technology"
                value={form.technology}
                onChange={handleChange}
                placeholder="React, Firebase, Tailwind"
                className="
                w-full
                mt-2
                px-4
                py-3
                rounded-xl
                border
                border-gray-300
                dark:border-gray-700
                bg-white
                dark:bg-gray-800
                text-gray-800
                dark:text-white
                outline-none
                "
                required
              />
            </div>

            {/* Featured */}

            <label
              className="
              flex
              items-center
              gap-3
              text-gray-700
              dark:text-gray-200
            "
            >
              <input
                type="checkbox"
                name="featured"
                checked={form.featured}
                onChange={handleChange}
                className="checkbox checkbox-info"
              />
              Featured Project
            </label>

            {/* Button */}

            <button
              disabled={loading}
              className="
              w-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              py-3
              rounded-xl
              font-semibold
              shadow-lg
              hover:scale-[1.02]
              transition
              disabled:opacity-50
              "
            >
              {loading ? "Adding Project..." : "Add Project 🚀"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
