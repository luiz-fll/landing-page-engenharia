function ProfileIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-8a3 3 0 1 1 0 0 3 3 0 0 1 0-6Zm0 10c-5.52 0-10 2.69-10 6v2h20v-2c0-3.31-4.48-6-10-6Zm-7.93 6C4.65 18.27 7.76 16 12 16s7.35 2.27 7.93 4H4.07Z" />
    </svg>
  );
}

export default ProfileIcon;