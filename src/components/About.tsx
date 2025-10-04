import { CheckCircle, Users, Award, Building } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Building,
      title: "Architectural design and Construction",
      description: "Desain inovatif dan fungsional yang disesuaikan dengan kebutuhan Anda",
      list: [
        {title: "Desain Arsitektur Kreatif & Modern", description: "untuk rumah tinggal, perumahan, café, restoran, kantor, hingga instansi publik."},
        {title: "Konstruksi Berkualitas", description: "yang dikerjakan dengan standar profesional, material terjamin, dan tenaga ahli berpengalaman."},
        {title: "One-Stop Solution ", description: "dari sketsa konsep, gambar kerja, RAB, hingga bangunan berdiri siap pakai."},
      ]
    },
    {
      icon: Award,
      title: "BIM consultant & Services",
      description: "Teknologi pemodelan 3D canggih dan Building Information Modeling",
      list: [
        {title: "3D Modeling & Visualization", description: "melihat bangunan secara detail sebelum dibangun."},
        {title: "Clash Detection", description: "identifikasi potensi masalah (tabrakan struktur, MEP, dll.) sejak awal."},
        {title: "Project Simulation", description: "analisis waktu (4D), biaya (5D), dan sustainability (6D)."},
        {title: "Data Management", description: "semua dokumen proyek terintegrasi, mudah diakses, dan akurat."},
        {title: "Konsultasi & Training ", description: "mendampingi tim developer, kontraktor, atau arsitek dalam implementasi BIM."},
      ]
    },
    // {
    //   icon: Users,
    //   title: "Manajemen Konstruksi",
    //   description: "Manajemen proyek menyeluruh dari konsep hingga penyelesaian"
    // }
  ];

  // const expertise = [
  //   {title: "Desain Arsitektur Kreatif & Modern", description: "untuk rumah tinggal, perumahan, café, restoran, kantor, hingga instansi publik."},
  //   {title: "Konstruksi Berkualitas", description: "yang dikerjakan dengan standar profesional, material terjamin, dan tenaga ahli berpengalaman."},
  //   {title: "One-Stop Solution ", description: "dari sketsa konsep, gambar kerja, RAB, hingga bangunan berdiri siap pakai."},
  // ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
             Layanan BIM, Design Arsitektur &
              <span className="text-brand-gold"> Konstruksi Bangunan</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
             Di Alfath Archibim, kami menghadirkan solusi arsitektur dan konstruksi yang menyatukan desain inovatif dengan fungsi yang benar-benar Anda butuhkan. Dengan dukungan teknologi BIM terbaru dan tim arsitek berpengalaman, kami memastikan setiap detail bangunan dari konsep hingga berdiri tepat, efisien dan sesuai impian Anda.
            </p>

            {/* Expertise List */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {expertise.map((item, index) => (
                <div key={index} className="flex flex-col space-x-3">
                  <div className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-gold flex-shrink-0" />
                    <span className="text-foreground font-medium">{item.title}</span>
                  </div>
                  <span className="text-start text-muted-foreground">{item.description}</span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Features Grid */}
          <div className="flex flex-col md:flex-row items-stretch gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-gradient p-6 rounded-lg shadow-elegant hover:shadow-gold transition-smooth flex-1"
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="bg-brand-gold/10 p-3 rounded-lg w-fit">
                      <feature.icon className="h-6 w-6 text-brand-gold" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-brand-dark">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-start">
                    {feature.description}
                  </p>
                  <div className="flex flex-col gap-4 mb-8 text-start">
                    {feature.list.map((item, index) => (
                      <div key={index} className="flex flex-col space-x-3">
                        <div className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-brand-gold flex-shrink-0" />
                          <span className="text-foreground font-medium">{item.title}</span>
                        </div>
                        <span className="text-start text-muted-foreground">{item.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;