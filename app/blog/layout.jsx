export default function BlogLayout({ children }) {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-3xl px-4">
        <article className="prose prose-neutral max-w-none">
          {children}
        </article>
      </div>
    </section>
  );
}