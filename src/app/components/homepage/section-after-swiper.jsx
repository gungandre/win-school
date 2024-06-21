const SectionAfterSwiper = () => {
  return (
    <section className="h-[20vh]  overflow-hidden relative bg-white-ivory section">
      <div
        className="w-[1050vh] h-[1050vh] bg-soft-tosca absolute top-[-1038vh] left-1/2 -translate-x-1/2"
        style={{ clipPath: "circle(50% at 50% 50%)" }}
      ></div>
    </section>
  );
};

export default SectionAfterSwiper;
