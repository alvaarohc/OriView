export default function Cta() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 mb-50 px-20">
      <h1 className="text-4xl text-center font-bold">
        Join Our Astronomy Community
      </h1>
      <p className="text-lg text-center">
        Share your observations in the community, and never miss an astronomical
        event.
      </p>
      <button
        type="button"
        className="bg-secondary-dark hover:bg-secondary-light transition-all font-medium rounded-lg px-4 py-2 cursor-pointer"
      >
        Sign up now
      </button>
    </section>
  );
}
