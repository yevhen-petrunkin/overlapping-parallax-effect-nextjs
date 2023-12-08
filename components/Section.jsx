"use server";

import cn from "classnames";

const Section = ({ number }) => {
  return (
    <section className="section">
      <div className="container">
        <div
          className={cn("p-16 rounded-2xl ", {
            "bg-yellow-700 h-[120vh] ": number === 1,
            "bg-lime-700 h-[96vh] ": number === 2,
            "bg-cyan-700 h-[100vh] ": number === 3,
            "bg-purple-700 h-[80vh] ": number === 4,
            "bg-pink-700 h-[130vh] ": number === 5,
            "bg-stone-700 h-[90vh] ": number === 6,
            "bg-teal-700 h-[70vh] ": number === 7,
            "bg-red-700 h-[110vh] ": number >= 8,
          })}
        >
          <p className="h-full rounded-2xl border-white border-2 flex items-center justify-center ">
            SECTION {number}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
