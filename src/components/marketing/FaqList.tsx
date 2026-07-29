export default function FaqList({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  const toFaqId = (question: string) =>
    `frage-${question
      .toLocaleLowerCase("de-DE")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replaceAll("ß", "ss")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}`;

  return (
    <div className="editorial-rule mt-10">
      {items.map((faq) => {
        const faqId = toFaqId(faq.question);

        return (
          <details
            key={faq.question}
            id={faqId}
            className="group scroll-mt-24 border-b border-black/[0.10]"
          >
            <summary
              aria-controls={`${faqId}-answer`}
              className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-semibold tracking-[-0.02em] text-text-primary-light marker:content-none md:text-xl"
            >
              {faq.question}
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-xl font-light transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p
              id={`${faqId}-answer`}
              className="max-w-3xl pb-7 pr-12 leading-relaxed text-text-muted-light"
            >
              {faq.answer}
            </p>
          </details>
        );
      })}
    </div>
  );
}
