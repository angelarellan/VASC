"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  /** "center" = modal clásico, "right" = drawer lateral. */
  variant?: "center" | "right";
  label: string;
  className?: string;
}

/**
 * Modal / Drawer accesible: cierra con Escape o clic en el fondo,
 * bloquea el scroll del body y devuelve el foco al cerrar.
 */
export function Modal({ open, onClose, children, variant = "center", label, className = "" }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  const isDrawer = variant === "right";

  return (
    <div
      className={`fixed inset-0 z-[100] transition-[opacity,visibility] duration-300 ${open ? "visible opacity-100" : "pointer-events-none invisible opacity-0"}`}
      inert={!open}
    >
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={onClose} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        className={
          isDrawer
            ? `absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-white shadow-2xl outline-none transition-transform duration-300 ease-out ${
                open ? "translate-x-0" : "translate-x-full"
              } ${className}`
            : `absolute left-1/2 top-1/2 max-h-[92vh] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 overflow-auto rounded-3xl outline-none transition-all duration-300 ${
                open ? "-translate-y-1/2 scale-100" : "-translate-y-[45%] scale-95"
              } ${className}`
        }
      >
        <button
          onClick={onClose}
          className={`absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full transition ${
            isDrawer ? "bg-ink/5 text-ink hover:bg-vasc-500 hover:text-white" : "bg-white/90 text-ink hover:bg-vasc-500 hover:text-white"
          }`}
          aria-label="Cerrar"
        >
          <X className="size-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
