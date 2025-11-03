export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 text-center text-gray-600 dark:text-gray-400 text-sm bg-white dark:bg-gray-900 shadow-inner">
      © {currentYear} Fadhil. All Rights Reserved.
    </footer>
  );
}
