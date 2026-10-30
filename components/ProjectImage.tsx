"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";

export default function ProjectImage({ src, title }: { src: string; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const captionId = useId();
  const previousOverflow = useRef<string | null>(null);

  function restoreScroll() {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }

  useEffect(() => () => restoreScroll(), []);

  function openPreview() {
    dialog.current?.showModal();
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <button className="project-thumbnail" type="button" onClick={openPreview} aria-label={`Enlarge ${title} screenshot`} aria-haspopup="dialog">
        <Image src={src} alt={`${title} application screenshot`} width={280} height={180} sizes="(max-width: 520px) 35vw, 130px" />
      </button>
      <dialog ref={dialog} className="image-modal" aria-labelledby={captionId} onClose={restoreScroll} onClick={event => {
        if (event.target === event.currentTarget) dialog.current?.close();
      }}>
        <div className="image-modal-content">
          <header className="image-modal-header">
            <h2 id={captionId}>{title}</h2>
            <button className="image-modal-close" type="button" onClick={() => dialog.current?.close()} aria-label="Close image preview" autoFocus>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
          </header>
          <Image className="image-modal-preview" src={src} alt={`${title} application screenshot`} width={1600} height={1000} sizes="95vw" />
        </div>
      </dialog>
    </>
  );
}
