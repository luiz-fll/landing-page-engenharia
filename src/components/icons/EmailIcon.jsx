function EmailIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.24-8 5.33-8-5.33V6l8 5.33L20 6v2.24ZM4 18V10.64l7.45 4.97a1 1 0 0 0 1.1 0L20 10.64V18H4Z" />
    </svg>
  );
}

export default EmailIcon;