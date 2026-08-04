import { LinkButton } from "@/components/ui/LinkButton";

/** Promotes the free webinar at the end of every article — the main conversion point for blog traffic. */
export function ArticleWebinarCTA() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-[162px]">
      <div className="max-w-[900px] mx-auto bg-light-blue border border-very-light-blue rounded-xl flex flex-col items-center justify-center gap-4 md:gap-6 px-6 py-10 md:p-12 text-center">
        <p className="text-sm md:text-base font-medium text-text-primary uppercase">
          Free Live Webinar
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-[1.4em]">
          Ready to put this into practice?
        </h2>
        <p className="text-sm md:text-base font-medium text-text-secondary max-w-lg">
          Join Amit Sarvaiya&apos;s free live webinar to learn the complete, step-by-step lifestyle framework — no crash diets, no extreme workouts.
        </p>
        <LinkButton
          href="/weight-loss-webinar"
          variant="primary"
          size="lg"
          className="px-6 h-[53px] flex items-center justify-center text-sm md:text-base mt-2"
        >
          Reserve Your Free Seat
        </LinkButton>
      </div>
    </section>
  );
}
