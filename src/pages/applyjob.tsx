import React, { useState, useRef } from "react";
import UiInput from "../components/inputs/input";
import UiTextarea from "../components/inputs/textarea";
import UiButton from "../components/buttons/button";
import type { ChangeEvent, DragEvent } from "react";
import glogo from "../assets/image/google_logo.png";
interface FileUploadZoneProps {
  uploadedFile: File | null;
  onFileSelect: (file: File | null) => void;
}
const FileUploadZone: React.FC<FileUploadZoneProps> = ({
  uploadedFile,
  onFileSelect,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type === "application/pdf") {
        onFileSelect(file);
      } else {
        // IMPORTANT: Using console.error instead of non-compliant alert()
        console.error("File drop error: Only PDF files are accepted.");
        onFileSelect(null);
      }
      e.dataTransfer.clearData();
    }
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type === "application/pdf") {
        onFileSelect(file);
      } else {
        // IMPORTANT: Using console.error instead of non-compliant alert()
        console.error("File selection error: Only PDF files are accepted.");
        e.target.value = "";
      }
    }
  };

  const handleClearFile = () => {
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full mt-5">
      {/* <label className="text-sm text-gray-700 font-medium block mb-1">
                Add your CV/Resume to apply for a job
            </label> */}
      <div
        className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg transition duration-200 cursor-pointer 
                            ${
                              isDragging
                                ? "border-indigo-600 bg-indigo-50"
                                : "border-gray-300 hover:border-indigo-400 hover:bg-gray-50"
                            }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInputChange}
          accept=".pdf"
          className="hidden"
        />

        {uploadedFile ? (
          <div className="text-center w-full">
            <p className="text-indigo-600 font-semibold flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618 4.618A9.955 9.955 0 0112 21.5c-4.419 0-8-3.582-8-8 0-1.748.599-3.397 1.632-4.747m0 0L4 11m4.368-4.368l-.893-.893M9 11l4 4m6.368 4.368l.893.893"
                ></path>
              </svg>
              {uploadedFile.name}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleClearFile();
              }}
              className="text-xs text-red-500 hover:text-red-700 mt-2"
            >
              Remove File
            </button>
          </div>
        ) : (
          <div className="text-center">
            <svg
              className="w-8 h-8 text-gray-400 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              ></path>
            </svg>
            <p className="text-sm text-gray-600">
              <span className="font-semibold ">Upload CV/Resume</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const ApplyJobScreen = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
  });
  // TypeScript generics used here
  const [uploadedCV, setUploadedCV] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("idle");

    if (!uploadedCV) {
      setSubmissionStatus("error");
      console.error("CV upload is missing.");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      console.log("--- Submitting Application ---");
      console.log("Form Data:", formData);
      console.log("CV File:", uploadedCV?.name, uploadedCV?.type);

      // Reset form and show success
      setSubmissionStatus("success");
      setIsSubmitting(false);
      setFormData({ fullName: "", email: "", phone: "", coverLetter: "" });
      setUploadedCV(null);

      // Clear status after a brief moment
      setTimeout(() => setSubmissionStatus("idle"), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* header */}
      <section className="w-full">
        <section className="w-full h-[140px] bg-white flex flex-col items-center justify-end">
          <div className="p-4 rounded-full bg-logo-bg-blue -mb-7">
            <img
              src={glogo}
              alt="Google Logo"
              className="w-16 object-contain"
            />
          </div>
        </section>
        <section className="w-full pb-5">
          <h4 className="text-center text-lg font-bold mt-12 text-txt-primary">
            UI/UX Designer
          </h4>
          <div className="w-full flex items-center mt-3">
            <div className="flex-1 text-center text-txt-primary">Google</div>
            <div className="w-2 h-2 rounded-full bg-btn-primary"></div>
            <div className="flex-1 text-center text-txt-primary">California</div>
            <div className="w-2 h-2 rounded-full bg-btn-primary"></div>
            <div className="flex-1 text-center text-txt-primary">1 day ago</div>
          </div>
        </section>
      </section>
      <div className="w-full">
        <div className="bg-white p-6 sm:p-10">
          <header className="mb-8 pb-4">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Upload CV
            </h1>
            <p className="mt-2">Add your CV/Resume to apply for a job</p>
          </header>

          <form onSubmit={handleSubmit}>
            <section className="mt-8">
              {/* CV Upload Section */}

              <FileUploadZone
                uploadedFile={uploadedCV}
                onFileSelect={setUploadedCV}
              />
            </section>
            <section>
              <UiTextarea
                label="Information"
                placeholder="Explain why you are the right person for this job"
                isShadow
              />
            </section>

            <div className="mt-10 pt-6 flex justify-end items-center">
              {submissionStatus === "success" && (
                <p className="text-green-600 font-semibold mr-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Application Submitted Successfully!
                </p>
              )}
              {submissionStatus === "error" && (
                <p className="text-red-600 font-semibold mr-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Please upload your CV before submitting.
                </p>
              )}

              <UiButton label="APPLY NOW" textClassName="text-white" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJobScreen;
