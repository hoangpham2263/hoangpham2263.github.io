// Telegram paper-plane mark, sized like the Radix icons (15px)
export default function TelegramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.94 4.3a1 1 0 0 0-1.36-1.1L2.66 10.1a1 1 0 0 0 .06 1.88l4.5 1.43 1.73 5.42a1 1 0 0 0 1.66.4l2.5-2.45 4.4 3.24a1 1 0 0 0 1.57-.6l2.86-15.12ZM9.5 13.8l-.6 3.17-1.1-3.45 9.62-6.05L9.5 13.8Z" />
    </svg>
  );
}
