export type Initiative = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: "story" | "initiatives" | "accolades" | "gallery" | "sky" | "cta";
};

export const initiatives: Initiative[] = [
  {
    slug: "reach2teach",
    title: "REACH2teach",
    subtitle: "Bridging Distances, Inspiring Change",
    description:
      "REACH2Teach is our flagship outreach initiative that connects with families in villages within a 10–12 km radius of the school. The goal is simple yet powerful—to raise awareness about the importance of education and encourage parents to send their children to school. By engaging directly with parents and guardians, we strive to shift mindsets, address concerns, and inspire hope and ensure that no child is left behind simply because they were never asked to dream.",
    image: "/images/initiatives/01-reach2teach.png",
    color: "story",
  },
  {
    slug: "live-classroom",
    title: "LIVE Classroom",
    subtitle: "LIVE Classroom: Learning Beyond Borders",
    description:
      "The LIVE Classroom initiative at H.H. High School connects our students with teachers and experts from around the world through real-time online sessions. As one of the first schools in Jharkhand to pioneer this model, we aim to bring global learning directly into our rural classrooms—making quality education accessible and inspiring. The continued support from volunteers worldwide has been deeply encouraging, and we warmly welcome those who wish to teach and uplift our children from wherever they are.",
    image: "/images/initiatives/02-live-classroom.jpg",
    color: "initiatives",
  },
  {
    slug: "volunteer2teach",
    title: "VOLUNTEER2teach",
    subtitle: "Share Knowledge, Shape Lives",
    description:
      "VOLUNTEER2teach is an open platform for individuals passionate about making a difference. Whether it's teaching academic subjects, sharing skills in sports, arts, or technology, or simply offering personal attention and mentorship—every contribution counts. Volunteers play a vital role in nurturing the potential of our students, supporting not just their education but their overall growth and well-being. It's a chance to give back, inspire, and be inspired.",
    image: "/images/initiatives/03-volunteer2teach.jpg",
    color: "accolades",
  },
  {
    slug: "volunteer2teach-global",
    title: "VOLUNTEER2teach Global",
    subtitle: "Bringing the World to Our Classroom",
    description:
      "An extension of our VOLUNTEER2teach initiative, this program welcomes international volunteers who spend 6–8 weeks living on campus and teaching our students. More than just classroom sessions, it's a vibrant cultural exchange—giving our children the rare opportunity to engage with global perspectives, languages, and traditions. So far, we've had volunteers from Russia, China, Bulgaria, and Spain, each leaving behind a piece of their world and taking a piece of ours. Through shared learning and meaningful bonds, our students gain exposure that extends far beyond textbooks.",
    image: "/images/initiatives/04-volunteer2teach-global.jpg",
    color: "gallery",
  },
  {
    slug: "echoes-of-experience",
    title: "Echoes of Experience",
    subtitle: "Learning from the Lives of Others",
    description:
      "A unique platform where professionals across fields interact with our students, leaving behind impressions that books alone can't offer. These sessions spark curiosity, inspire ambition, and help students relate classroom learning to the world beyond. So far, we've been privileged to host changemakers from diverse walks of life—administration, politics, cinema, sports, the armed forces, art, and more. Each interaction plants a seed of curiosity, inspiring students to dream beyond boundaries and explore paths they never knew existed.",
    image: "/images/initiatives/05-echoes-of-experience.jpg",
    color: "story",
  },
  {
    slug: "happy-periods",
    title: "Happy Periods",
    subtitle: "Breaking Silence, Building Dignity",
    description:
      "'HappyPeriods' is a menstrual hygiene awareness initiative conducted at H.H. High School, Brambe. Designed to break taboos and encourage open dialogue, the program creates a safe space for adolescent girls to ask questions, share concerns, and learn about menstrual health without shame or fear. In addition to awareness-building, free sanitary pads are distributed to ensure that lack of access to menstrual products does not become a barrier to education or self-esteem. 'HappyPeriods' strives to ensure that no girl is left behind—academically, emotionally, or socially—simply because of her period.",
    image: "/images/initiatives/06-happy-periods.jpg",
    color: "initiatives",
  },
  {
    slug: "maatri",
    title: "Maatri",
    subtitle: "Empowering Women. Enriching Generations",
    description:
      "Maatri is a community-driven initiative by H.H. High School, Brambe to bring basic literacy to the illiterate women of nearby villages. Beyond reading and writing, the initiative promotes awareness around health, sanitation, and responsible child-rearing. With plans to organize free health check-up camps in the future, Maatri envisions a future where every woman is informed, empowered, and confident enough to sign her name—not just leave a thumbprint.",
    image: "/images/initiatives/07-maatri.jpg",
    color: "accolades",
  },
  {
    slug: "pehel",
    title: "Pehel",
    subtitle: "Small Essentials. Big Impact",
    description:
      "'Pehel' is an initiative by H.H. High School, Brambe—supported by GOONJ, Delhi—to create a more enabling and dignified learning environment for children. Through this program, we provide students with essentials such as books, uniforms, shoes, educational toys, stationery, geometry boxes, water bottles, lunch boxes, woollens, and general clothing. These contributions not only improve how children look—but more importantly—how they feel, empowering them with confidence and self-worth.",
    image: "/images/initiatives/08-pehel.jpg",
    color: "gallery",
  },
  {
    slug: "free-health-checkup-camps",
    title: "Free Health Check-up Camps",
    subtitle: "Care Beyond Classrooms. Wellness for All.",
    description:
      "Our annual Free Health Check-up Camps provide medical care not just to our students, but also to their families—completely free of cost. The initiative includes general health screenings, basic diagnostics, and consultations. A key feature of the camp is a dedicated session with a gynecologist for adolescent girls and their mothers, offering them a safe, supportive space to ask questions and receive guidance on issues they often feel too hesitant to discuss at home.",
    image: "/images/initiatives/09-health-checkup.jpg",
    color: "story",
  },
  {
    slug: "share-your-laptop",
    title: "Share Your Laptop",
    subtitle: "Opening Digital Doors for Every Child",
    description:
      "This initiative invites volunteers to bring their personal laptops and teach children the basics of computers. Each volunteer is paired with up to four students, guided by structured handouts provided by the school. The session is split between teaching and hands-on practice—ensuring that every child learns by doing. By simply sharing a device and a little time, volunteers help bridge the digital divide.",
    image: "/images/initiatives/10-share-your-laptop.jpg",
    color: "initiatives",
  },
  {
    slug: "wonder-over-web",
    title: "Wonder Over Web (WOW)",
    subtitle: "Connecting classrooms across continents",
    description:
      "Building on the success of our online teaching efforts, Wonder Over Web connects our students in Brambe with children from around the world for cross-cultural exchange and learning. Through virtual interactions, students share stories, traditions, and ideas—broadening perspectives and building friendships beyond borders. The first such interaction was with Oklahoma Public School, USA, and it left both sides enriched and inspired.",
    image: "/images/initiatives/11-wow.jpg",
    color: "accolades",
  },
  {
    slug: "bless-a-child",
    title: "Bless a Child",
    subtitle: "Sponsor. Support. Uplift.",
    description:
      "This initiative offers individuals the opportunity to sponsor the education of an underprivileged or orphaned child for an entire year. A small act of kindness can open a world of possibilities for a child who otherwise may never see the inside of a classroom. Through Bless a Child, you don't just support a student—you nurture someone's future.",
    image: "/images/initiatives/12-bless-a-child.jpg",
    color: "gallery",
  },
  {
    slug: "gift-a-teacher",
    title: "Gift A Teacher",
    subtitle: "Empower Educators. Elevate Learning",
    description:
      "Through this initiative, individuals or organizations can fully or partially sponsor a teacher's salary, enabling us to attract and retain high-quality educators—many of whom we might not otherwise be able to afford. Your support not only uplifts a teacher but also transforms every child they reach.",
    image: "/images/initiatives/13-gift-a-teacher.jpg",
    color: "story",
  },
  {
    slug: "covid-19-relief-camp",
    title: "COVID-19 Relief Camp",
    subtitle: "Serving hope in uncertain times",
    description:
      "During the peak of the COVID-19 lockdown, H. H. High School, Brambe transformed one of its classrooms into a storage-cum-distribution centre, providing dry rations and essential supplies to over 150 families daily. It was a humble yet determined effort to ensure no one around our village went hungry.",
    image: "/images/initiatives/14-covid-relief.jpg",
    color: "initiatives",
  },
];
