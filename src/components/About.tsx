import { CheckCircle, Building, Award } from "lucide-react";

const About = () => {
  // Array untuk kolom KIRI
  const designServices = [
    {
      icon: Building,
      iconType: 'main', 
      title: "1. Desain Arsitektur & Konstruksi",
      // description: "Desain inovatif dan fungsional yang disesuaikan dengan kebutuhan anda. "
    },
    {
      icon: CheckCircle,
      iconType: 'checklist',
      // title: "Konstruksi Berkualitas",
      description: "Mewujudkan ruang impian Anda dengan pendekatan desain yang fungsional, estetis, dan efisien."
    },
    {
      icon: CheckCircle,
      iconType: 'checklist',
      // title: "Manajemen Proyek",
      description: "Kami melayani perencanaan dan pembangunan rumah tinggal, small office, tempat usaha, serta berbagai proyek skala menengah lainnya dengan standar profesional."
    },
    // {
    //   icon: CheckCircle,
    //   iconType: 'checklist',
    //   // title: "Visualisasi 3D",
    //   description: "One-Stop Solution → dari sketsa konsep, gambar kerja, RAB, hingga bangunan berdiri siap pakai."
    // },
    // {
    //   icon: CheckCircle,
    //   iconType: 'checklist',
    //   // title: "Visualisasi 3D",
    //   description: " Efisiensi & Transparansi → timeline jelas, progress terdokumentasi, biaya sesuai kesepakatan."
    // },
  ];

  // Array untuk kolom KANAN
  const bimServices = [
    {
      icon: Award,
      iconType: 'main',
      title: " 2. BIM Modeling & BIM Service",
      // description: "Kami menyediakan layanan pemodelan dan koordinasi BIM (Building Information Modeling) untuk mendukung proyek yang melibatkan berbagai stakeholder — mulai dari arsitek, struktur, MEP, hingga kontraktor."
    },
    {
      icon: CheckCircle,
      iconType: 'checklist',
      // title: "Desain Interior",
      description: "Kami menyediakan layanan pemodelan dan koordinasi BIM (Building Information Modeling) untuk mendukung proyek yang melibatkan berbagai stakeholder — mulai dari arsitek, struktur, MEP, hingga kontraktor."
    },
    {
      icon: CheckCircle,
      iconType: 'checklist',
      // title: "Desain Interior",
      description: "Dengan BIM, proses desain dan konstruksi menjadi lebih terintegrasi, akurat, dan efisien."
    },
    // {
    //   icon: CheckCircle,
    //   iconType: 'checklist',
    //   // title: "Konsultasi RAB",
    //   description: "Clash Detection → identifikasi potensi masalah (tabrakan struktur, MEP, dll.) sejak awal."
    // },
    // {
    //   icon: CheckCircle,
    //   iconType: 'checklist',
    //   // title: "Studi Kelayakan",
    //   description: "Project Simulation → analisis waktu (4D), biaya (5D), dan sustainability (6D)."
    // },
    // {
    //   icon: CheckCircle,
    //   iconType: 'checklist',
    //   // title: "Studi Kelayakan",
    //   description: "Data Management → semua dokumen proyek terintegrasi, mudah diakses, dan akurat."
    // },
    // {
    //   icon: CheckCircle,
    //   iconType: 'checklist',
    //   // title: "Studi Kelayakan",
    //   description: "Konsultasi & Training → mendampingi tim developer, kontraktor, atau arsitek dalam implementasi BIM."
    // },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        <div className="text-center">
          {/* <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Layanan <span className="text-yellow-400">BIM </span>, Design Arsitektur &  
          </h2> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            Layanan <span className="text-brand-gold"> Kami </span> 
          </h2>
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            <span className="text-brand-gold">Konstruksi Bangunan</span>
          </h2> */}
          {/* <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            <span className="text-yellow-400">Konstruksi Bangunan</span>
          </h2> */}
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto mb-1">
            Alfath ArchiBIM hadir sebagai mitra tepercaya dalam mewujudkan proyek Anda — dari konsep desain hingga implementasi digital melalui teknologi BIM.
          </p>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto mb-5">
            Kami menghadirkan dua layanan utama yang saling melengkapi:
          </p>
        </div>

        {/* --- STRUKTUR UTAMA GRID 2 KOLOM --- */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* === KARTU KIRI ("Halaman Buku Kiri") === */}
          <div className="bg-white rounded-xl shadow-2xl p-5 flex flex-col space-y-5">
            {designServices.map((service, index) => (
              // Item di dalamnya tidak lagi punya background/shadow sendiri
              <div key={index} className="flex items-start space-x-5">
                <div className="flex-shrink-0 mt-1">
                  {service.iconType === 'main' ? (
                    <service.icon className="h-10 w-10 text-gray-700" />
                  ) : (
                    <div className="bg-yellow-400 text-white rounded-full mt-1 h-7 w-7 flex items-center justify-center">
                      <service.icon size={20} />
                    </div>
                  )}  
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-0 mt-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* === KARTU KANAN ("Halaman Buku Kanan") === */}
          <div className="bg-white rounded-xl shadow-2xl p-5 flex flex-col space-y-5">
            {bimServices.map((service, index) => (
              // Item di dalamnya tidak lagi punya background/shadow sendiri
              <div key={index} className="flex items-start space-x-5">
                <div className="flex-shrink-0 mt-1">
                  {service.iconType === 'main' ? (
                    <service.icon className="h-10 w-10 text-gray-700" />
                  ) : (
                    <div className="bg-yellow-400 text-white rounded-full mt-1 h-7 w-7 flex items-center justify-center">
                      <service.icon size={20} />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-0 mt-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
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