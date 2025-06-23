import { toast, ToastOptions } from "react-toastify";

type ToastType = "success" | "error" | "info" | "warning"; // exclude "default"

/**
 * Menampilkan toast berdasarkan tipe dan daftar pesan.
 *
 * @param messages - Daftar pesan yang akan ditampilkan. Bisa berupa array atau objek.
 * @param type - Tipe toast, seperti 'success' atau 'error'.
 */
const displayToasts = (
  messages: string[] | Record<string, string>,
  type: ToastType,
  options?: ToastOptions
) => {
  const values = Array.isArray(messages) ? messages : Object.values(messages);
  values.forEach((message) => {
    switch (type) {
      case "success":
        toast.success(message, options);
        break;
      case "error":
        toast.error(message, options);
        break;
      case "info":
        toast.info(message, options);
        break;
      case "warning":
        toast.warning(message, options);
        break;
    }
  });
};

/**
 * Objek utilitas untuk menampilkan toast dengan tipe yang berbeda.
 */
const toastUtils = {
  showSuccess: (messages: string[] | Record<string, string>, options?: ToastOptions) => {
    displayToasts(messages, "success", options);
  },
  showError: (messages: string[] | Record<string, string>, options?: ToastOptions) => {
    displayToasts(messages, "error", options);
  },
  showInfo: (messages: string[] | Record<string, string>, options?: ToastOptions) => {
    displayToasts(messages, "info", options);
  },
  showWarning: (messages: string[] | Record<string, string>, options?: ToastOptions) => {
    displayToasts(messages, "warning", options);
  },
};

export default toastUtils;
