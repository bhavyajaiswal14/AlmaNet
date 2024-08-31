"use client";

import { SingleImageDropzone } from "../../../components/single-image-dropzone";
import { useEdgeStore } from "../../../lib/edgestore";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from Next.js
import { useState } from "react";
import { IdCard } from "lucide-react";

// Path to the image you provided
const studentIDImage = "/Images/idCard.png";

export default function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [urls, setUrls] = useState<{ url: string; thumbnailUrl: string | null } | null>(null);
  const { edgestore } = useEdgeStore();

  const handleUpload = async () => {
    if (file) {
      try {
        const res = await edgestore.myPublicImages.upload({
          file,
          input: { type: "post" },
          onProgressChange: (progress) => {
            setProgress(progress);
          },
        });
        setUrls({
          url: res.url,
          thumbnailUrl: res.thumbnailUrl,
        });
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 gap-8 bg-gray-100">
      {/* Text Section */}
      <div className="text-center">
        <p className="text-sm text-gray-600">Upload proof</p>
        <h1 className="text-2xl font-semibold text-gray-800">Upload proof of your academic status</h1>
        <p className="text-gray-600 mt-2">
          We need a little more proof to verify your academic status.
          <br />
          What we need to see:
        </p>
      </div>

      {/* Image and Description inside a Dotted Box */}
      <div className="border-2 border-dashed border-gray-300 p-4 rounded-md">
        <div className="flex flex-col items-center gap-4">
          <Image src={studentIDImage} alt="Student ID" width={500} height={500} /> {/* Adjust width/height as needed */}
          <p className="text-center text-gray-600">
            <strong>Your student ID</strong>
            <br />
            Your ID should <strong>include a date</strong> that verifies your current enrollment.
             <br />
            Make sure the image is clear and easy to read;
             <br />
            if it looks blurry, please take a new photo and upload it again.
          </p>

        </div>
      </div>

      {/* Upload Section */}
      <div className="flex flex-col items-center gap-4">
        <SingleImageDropzone
          width={300}
          height={300}
          value={file}
          dropzoneOptions={{
            maxSize: 1024 * 1024 * 1, // 1MB
          }}
          onChange={(file) => {
            setFile(file);
          }}
        />
        <div className="h-1 w-44 border rounded overflow-hidden bg-gray-200">
          <div
            className="h-full bg-blue-500 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
          onClick={handleUpload}
        >
          Upload
        </button>
        {urls?.url && (
          <Link href={urls.url} target="_blank" className="text-blue-500 hover:underline">
            URL
          </Link>
        )}
        {urls?.thumbnailUrl && (
          <Link href={urls.thumbnailUrl} target="_blank" className="text-blue-500 hover:underline">
            THUMBNAIL
          </Link>
        )}
      </div>
    </div>
  );
}
