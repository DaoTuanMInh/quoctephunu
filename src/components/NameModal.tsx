"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Sparkles, Check } from "lucide-react";

interface NameModalProps {
  isOpen: boolean;
  currentMother: string;
  currentSister: string;
  onClose: () => void;
  onSave: (mother: string, sister: string) => void;
}

export default function NameModal({
  isOpen,
  currentMother,
  currentSister,
  onClose,
  onSave,
}: NameModalProps) {
  const [mother, setMother] = useState(currentMother);
  const [sister, setSister] = useState(currentSister);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(mother.trim() || "Mít Thỏa Trần", sister.trim() || "Dung Hấp");
    onClose();
  };

  const handleResetDefault = () => {
    setMother("Mít Thỏa Trần");
    setSister("Dung Hấp");
    onSave("Mít Thỏa Trần", "Dung Hấp");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-md rounded-3xl bg-slate-900/95 p-6 shadow-2xl border border-pink-500/40 backdrop-blur-xl z-10 text-white"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Đóng hộp thoại"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-5">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 text-pink-400 mb-2 border border-pink-400/40">
                <Heart className="w-6 h-6 fill-pink-500 text-pink-500 animate-pulse" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pink-200">
                Chỉnh Sửa Lời Chúc 20/10
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Tùy biến tên người thân yêu xuất hiện trên giao diện
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="mother-input"
                  className="text-xs font-semibold text-pink-300 uppercase tracking-wider mb-1 block"
                >
                  Tên Mẹ:
                </label>
                <input
                  id="mother-input"
                  type="text"
                  value={mother}
                  onChange={(e) => setMother(e.target.value)}
                  placeholder="Mít Thỏa Trần / Mẹ yêu..."
                  maxLength={30}
                  className="w-full px-4 py-2.5 rounded-xl border border-pink-400/50 bg-black/40 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="sister-input"
                  className="text-xs font-semibold text-pink-300 uppercase tracking-wider mb-1 block"
                >
                  Tên Em gái / Người thương:
                </label>
                <input
                  id="sister-input"
                  type="text"
                  value={sister}
                  onChange={(e) => setSister(e.target.value)}
                  placeholder="Dung Hấp / Em yêu / Chị gái..."
                  maxLength={30}
                  className="w-full px-4 py-2.5 rounded-xl border border-pink-400/50 bg-black/40 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                />
              </div>

              {/* Quick Presets */}
              <div>
                <span className="text-[11px] text-slate-400 block mb-1.5">Gợi ý nhanh cho Mẹ:</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Mẹ yêu", "Mẹ Mai", "Mít Thỏa Trần", "Mẹ kính yêu"].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setMother(p)}
                      className="px-2.5 py-1 rounded-full text-[11px] bg-pink-950/60 border border-pink-500/30 text-pink-200 hover:bg-pink-800/40"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-3">
                <button
                  type="button"
                  onClick={handleResetDefault}
                  className="flex-1 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-medium transition-colors"
                >
                  Về mặc định
                </button>
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-xs font-medium shadow-lg shadow-pink-900/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Check className="w-4 h-4" />
                  <span>Xác nhận</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
