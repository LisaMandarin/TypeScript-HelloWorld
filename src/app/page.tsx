type Greeting = string

export default function Home() {
  const greeting: Greeting = "Hello World"
  return (
    <div className="flex justify-center items-center h-screen font-extrabold text-4xl">{greeting}</div>
  );
}
