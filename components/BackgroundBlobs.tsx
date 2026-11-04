export default function BackgroundBlobs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[-1] h-full w-full overflow-hidden"
    >
      <div
        className="absolute -left-4 top-0 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-70 blur-xl mix-blend-multiply dark:opacity-20 dark:mix-blend-screen"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute -right-4 top-0 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-70 blur-xl mix-blend-multiply dark:opacity-20 dark:mix-blend-screen"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-70 blur-xl mix-blend-multiply dark:opacity-20 dark:mix-blend-screen"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}