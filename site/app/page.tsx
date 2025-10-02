import { Bitcount } from 'next/font/google';

const _fontTitle = Bitcount({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <main>
        <section className="monitor-screen-title">
          <h1>Victor Hugo Batista</h1>
          <hr />
        </section>
      </main>
    </div>
  );
}
