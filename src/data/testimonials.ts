export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  linkedinUrl?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ari Rantanen",
    role: "Data-Driven Leadership & AI Implementation | 20+ Years in Data & AI | Entrepreneurial Spirit | Result-Oriented Leader",
    quote:
      "I collaborated with Elias through AI Roots between 2021 and 2026, and he was one of our most trusted consultants throughout that time. Elias possesses a truly unique combination of strategic thinking, architectural strength, and hands-on development skills with a high level of professionalism and adaptability. He has consistently delivered significant value across a wide range of client cases and industries. I can recommend him warmly to any case and assignment were exceptional talent is required.",
  },
  {
    name: "Markus Ojala",
    role: "PhD, Principal Data Scientist / Machine Learning Engineer - Supercell | ML & AI",
    quote:
      "I had the pleasure of working closely with Elias for over a year, building an ML product from the ground up in a challenging environment. What sets Elias apart is a rare combination of deep MLOps expertise and exceptional people skills. On the technical side, he was the driving force behind getting us to production smoothly. On the team side, he brings infectious energy, keeps everyone accountable, and has a talent for making even high-pressure work genuinely fun.\n\nElias is the kind of colleague who raises the bar for everyone around him — not by pushing, but by inspiring. Some of my best teamwork moments have been during our collaboration, and I'd jump at the chance to work with him again.",
  },
  {
    name: "Machine Learning Team Lead",
    role: "Finnish mobile gaming company",
    quote:
      "Working with Elias has been a pleasure. He played a key role in building and scaling our ML solutions while strengthening our MLOps practices, consistently delivering high-quality outcomes. He brings strong machine learning expertise and a deep understanding of the field, combined with great energy and a team-first attitude. He's an exceptional collaborator and someone you can always count on.",
  },
];