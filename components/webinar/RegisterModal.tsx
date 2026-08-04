"use client";

import { WEBINAR_PAGE } from "@/constants/webinar-content";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import WebinarRegisterForm from "./WebinarRegisterForm";

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
  source: string;
}

export default function RegisterModal({ open, onClose, source }: RegisterModalProps) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="register-modal-title"
            className="relative w-full max-w-md bg-white rounded-lg shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-veryLightBg transition-colors"
            >
              <X className="w-5 h-5 text-textPrimary" aria-hidden="true" />
            </button>

            <h3 id="register-modal-title" className="text-2xl font-semibold text-textPrimary mb-2 pr-8">
              {WEBINAR_PAGE.reserveSeat.title}
            </h3>
            <p className="text-textSecondary mb-6">
              {WEBINAR_PAGE.reserveSeat.description}
            </p>

            <WebinarRegisterForm source={source} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
