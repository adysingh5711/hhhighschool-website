export const storyParagraphs = [
  "Nestled in the quiet village of Brambe in Jharkhand, Hamid Hassan High School (H. H. High School) began as a dream—born not in boardrooms, but in the hearts of a family determined to light the path of education for children who had none. Dr. S. Shadab Hassan, fresh out of Birla Institute of Technology, Mesra, chose not a corporate career, but a calling—to return to his roots and build a school where learning would be a right, not a privilege.",
  "Alongside him stood his parents—Mrs. Roshan Ara, the school's first principal, and Prof. Shahid Hassan. It was Prof. Hassan's journey from selling balloons as a child to becoming a professor that became the inspiration behind it all. It was Mrs. Ara's strength and nurturing guidance that helped shape the school in its formative years. Together, they knocked on doors, rallied communities, and built not just a school, but a sanctuary of hope.",
  "H. H. High School was formally inaugurated on January 16, 2010, by Mrs. Habiba Hassan, marking the beginning of what would become a transformative journey in rural education. The school was named in honour of Dr. Hassan's grandfather, Mr. Hamid Hassan, a freedom fighter of immense grit and integrity, who played an active role in India's struggle for independence. His life continues to inspire our commitment to courage, character, and service. Equally guiding our journey is the legacy of Haji Imam Ali, another son of the soil, a fellow freedom fighter and a close associate of Maulana Abul Kalam Azad and Dr. Rajendra Prasad. A man of foresight and compassion, Haji Imam Ali believed deeply in the transformative power of education. It is in his memory that the Haji Imam Ali Educational Trust was established—the institution that now runs and manages H. H. High School, Brambe.",
  "Along this journey, there have been quiet but constant pillars of support: Dr. Neha Kaur, Mrs. Sheeba Nikhar and Mr. Asad Iqbal, who have been the school's invisible strength—steadfast in their belief, encouragement, and silent contributions through every season of challenge and growth.",
  "What began with 80 children and six teachers has grown into a movement—shaped by resilience, love, and the timeless values of those who came before us. This is not just our story; it's the story of every child who walks through our gates and dares to dream a little bigger.",
];

export const storyPortraits = [
  { name: "Late Mr. Hamid Hassan", image: "/images/our-story/01-hamid-hassan.png" },
  { name: "Late Mrs. Habiba Hassan", image: "/images/our-story/02-habiba-hassan.jpg" },
  { name: "Mrs. Roshan Ara", image: "/images/our-story/03-roshan-ara.jpg" },
  { name: "Dr. Shahid Shadab Hassan", image: "/images/our-story/04-shadab-hassan.png" },
  { name: "Mrs. Sheeba Nikhar", image: "/images/our-story/05-sheeba-nikhar.jpg" },
  { name: "Dr. Asad Iqbal", image: "/images/our-story/06-asad-iqbal.jpg" },
  { name: "Prof. Shahid Hassan", image: "/images/our-story/07-shahid-hassan.jpg" },
  { name: "Dr. Neha Kaur", image: "/images/our-story/08-neha-kaur.jpg" },
];

export const foundationsBanner = "/images/home/students-award-photo.jpg";

export const foundations = [
  {
    title: "Child-Centered Learning",
    description: "Every child is nurtured with personal attention, curiosity-driven teaching, and a joyful classroom experience.",
    color: "gallery",
  },
  {
    title: "Community Engagement",
    description: "Built with the support of the local community, the school works hand-in-hand with families to create lasting impact.",
    color: "story",
  },
  {
    title: "Affordable",
    description: "We believe quality education should never be out of reach—our fee structure is modest and transparent.",
    color: "accolades",
  },
  {
    title: "Values-Based Education",
    description: "We instill empathy, discipline, and integrity to shape not just minds, but character.",
    color: "gallery",
  },
  {
    title: "Extended Exposure",
    description: "Interactive sessions with professionals from around the world broaden our students' horizons beyond textbooks.",
    color: "story",
  },
  {
    title: "Inclusive",
    description: "Our doors are open to all children, regardless of background, with special support for those who need it most.",
    color: "accolades",
  },
] as const;

// Real UN SDG goal badges from the live site — a school photo background
// with the official SDG icon overlaid. Confirmed by opening each icon file;
// order matches the source DOM.
export const sdgGoals = [
  { number: 1, name: "No Poverty", bg: "/images/home/sdg/1-no-poverty-bg.jpg", icon: "/images/home/sdg/1-no-poverty-icon.jpg" },
  { number: 3, name: "Good Health and Well-Being", bg: "/images/home/sdg/3-good-health-bg.jpg", icon: "/images/home/sdg/3-good-health-icon.jpg" },
  { number: 4, name: "Quality Education", bg: "/images/home/sdg/4-quality-education-bg.jpg", icon: "/images/home/sdg/4-quality-education-icon.jpg" },
  { number: 5, name: "Gender Equality", bg: "/images/home/sdg/5-gender-equality-bg.jpg", icon: "/images/home/sdg/5-gender-equality-icon.jpg" },
  { number: 6, name: "Clean Water and Sanitation", bg: "/images/home/sdg/6-clean-water-bg.jpg", icon: "/images/home/sdg/6-clean-water-icon.jpg" },
  { number: 10, name: "Reduced Inequalities", bg: "/images/home/sdg/10-reduced-inequalities-bg.jpg", icon: "/images/home/sdg/10-reduced-inequalities-icon.jpg" },
] as const;
