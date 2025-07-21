'use client';

export default function InteractiveButton({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}