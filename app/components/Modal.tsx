"use client";

import { ReactNode, useEffect } from 'react';
import type { MouseEventHandler } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  // Ensure this only renders on the client and when open
  const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
  if (!isBrowser || !isOpen) return null;

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const handleOverlayClick = () => onClose();
  const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation();

  return createPortal(
    (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center modal-overlay"
        onClick={handleOverlayClick}
        role="presentation"
      >
        <div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full modal-content themed-card"
          role="dialog"
          aria-modal="true"
          aria-label="Glossary details"
          onClick={stopPropagation}
        >
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
              aria-label="Close dialog"
            >
              &times;
            </button>
          </div>
          <div className="mt-2">
            {children}
          </div>
        </div>
      </div>
    ),
    document.body
  );
}
