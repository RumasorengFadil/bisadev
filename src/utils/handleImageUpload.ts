"use client";
import { showToasts } from "./showToasts";
import axiosClient from "./axiosClient";

export const MAX_FILE_SIZE = 3 * 1024 * 1024;

export const handleImageUpload = async (
  file: File,
  onProgress?: (event: { progress: number }) => void,
  abortSignal?: AbortSignal
): Promise<string> => {
  if (!file) {
    showToasts(["No file provided"], { type: "error" });
    throw new Error("No file provided");
  }

  if (file.size > MAX_FILE_SIZE) {
    showToasts(
      [`File size exceeds maximum (${MAX_FILE_SIZE / (1024 * 1024)}MB)`],
      { type: "error" }
    );
    throw new Error(
      `File size exceeds maximum (${MAX_FILE_SIZE / (1024 * 1024)}MB)`
    );
  }
  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await axiosClient("api/blog/upload-image", {
      data: formData,
      method: "POST",
      signal: abortSignal,
      onUploadProgress: (progressEvent) => {
        const progress = Math.round(
          (progressEvent.loaded * 100) / (progressEvent.total || 1)
        );
        onProgress?.({ progress });
      },
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res.data.url;
  } catch (err: unknown) {
    console.log(err);
    // showToasts(err.response.data.errors.image, { type: "error" });
    throw new Error("Upload failed");
  }
};
