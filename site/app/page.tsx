import { Bitcount, Bitcount_Single } from 'next/font/google';

const _fontTitle = Bitcount({
  subsets: ['latin'],
});

const _fontPage = Bitcount_Single({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <main>
        <header className="monitor-screen-title">
          <h1>Victor Hugo Batista</h1>
        </header>
        <section className="monitor-screen-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero pariatur dolor maiores a nesciunt autem reprehenderit maxime voluptates quidem id deserunt odio, ipsum officiis fuga, aperiam nobis aliquid repudiandae officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero pariatur dolor maiores a nesciunt autem reprehenderit maxime voluptates quidem id deserunt odio, ipsum officiis fuga, aperiam nobis aliquid repudiandae officia.
          </p>
        </section>
        <footer className="monitor-screen-footer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero pariatur dolor maiores a nesciunt autem reprehenderit maxime voluptates quidem id deserunt odio, ipsum officiis fuga, aperiam nobis aliquid repudiandae officia.
        </footer>
      </main>
    </div>
  );
}
