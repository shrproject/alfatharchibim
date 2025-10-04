import { CheckCircle, Building, Award } from "lucide-react";

const About = () => {
  // Array untuk kolom KIRI
  const designServices = [
    {
      icon: Building,
      iconType: 'main', 
      title: "Design Arsitektur & Konstruksi",
      description: "Desain inovatif dan fungsional yang disesuaikan dengan kebutuhan anda. "
    },
    {
      icon: CheckCircle,
      iconType: 'checklist',
      // title: "Konstruksi Berkualitas",
      description: "Desain Arsitektur Kreatif & Modern → rumah tinggal, perumahan, café, restoran, kantor, hingga instansi publik"
    },
    {
      icon: CheckCircle,
      iconType: 'checklist',
      // title: "Manajemen Proyek",
      description: "Konstruksi Berkualitas → dikerjakan dengan standar profesional, material terjamin, dan tenaga ahli berpengalaman."
    },
    {
      icon: CheckCircle,
      iconType: 'checklist',
      // title: "Visualisasi 3D",
      description: "One-Stop Solution → dari sketsa konsep, gambar kerja, RAB, hingga bangunan berdiri siap pakai."
    },
    {
      icon: CheckCircle,
      iconType: 'checklist',
      // title: "Visualisasi 3D",
      description: " Efisiensi & Transparansi → timeline jelas, progress terdokumentasi, biaya sesuai kesepakatan."
    },
  ];

  // Array untuk kolom KANAN
  const bimServices = [
    {
      icon: Award,
      iconType: 'main',
      title: "BIM Consultant & Services",
      description: "Teknologi permodelan 3D canggih dan Building Information Modeling"
    },
    {
      icon: CheckCircle,
      iconType: 'checklist',
      // title: "Desain Interior",
      description: "3D Modeling & Visualization → melihat bangunan secara detail sebelum dibangun."
    },
    {
      icon: CheckCircle,
      iconType: 'checklist',
      // title: "Konsultasi RAB",
      description: "Clash Detection → identifikasi potensi masalah (tabrakan struktur, MEP, dll.) sejak awal."
    },
    {
      icon: CheckCircle,
      iconType: 'checklist',
      // title: "Studi Kelayakan",
      description: "Project Simulation → analisis waktu (4D), biaya (5D), dan sustainability (6D)."
    },
    {
      icon: CheckCircle,
      iconType: 'checklist',
      // title: "Studi Kelayakan",
      description: "Data Management → semua dokumen proyek terintegrasi, mudah diakses, dan akurat."
    },
    {
      icon: CheckCircle,
      iconType: 'checklist',
      // title: "Studi Kelayakan",
      description: "Konsultasi & Training → mendampingi tim developer, kontraktor, atau arsitek dalam implementasi BIM."
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        <div className="text-center">
          {/* <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Layanan <span className="text-yellow-400">BIM </span>, Design Arsitektur &  
          </h2> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            Layanan <span className="text-brand-gold">BIM</span>, Design Arsitektur &  
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            <span className="text-brand-gold">Konstruksi Bangunan</span>
          </h2>
          {/* <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            <span className="text-yellow-400">Konstruksi Bangunan</span>
          </h2> */}
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto mb-5">
            Alfath Archibim, menghadirkan solusi arsitektur dan konstruksi yang menyatukan desain inovatif dengan fungsi yang benar-benar Anda butuhkan. Dengan dukungan teknologi BIM terbaru dan tim arsitek berpengalaman , kami memastikan setiap detail bangunan dari konsep hingga berdiri tepat , efisien dan sesuai impian anda . 
          </p>
          {/* <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-5">
          Alfath Archibim mengkhususkan diri
          </p> */}
        </div>

        {/* --- STRUKTUR UTAMA GRID 2 KOLOM --- */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* === KARTU KIRI ("Halaman Buku Kiri") === */}
          <div className="bg-white rounded-xl shadow-2xl p-5 flex flex-col space-y-3">
            {designServices.map((service, index) => (
              // Item di dalamnya tidak lagi punya background/shadow sendiri
              <div key={index} className="flex items-start space-x-5">
                <div className="flex-shrink-0 mt-1">
                  {service.iconType === 'main' ? (
                    <service.icon className="h-10 w-10 text-gray-700" />
                  ) : (
                    <div className="bg-yellow-400 text-white rounded-full h-7 w-7 flex items-center justify-center">
                      <service.icon size={20} />
                    </div>
                  )}  
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* === KARTU KANAN ("Halaman Buku Kanan") === */}
          <div className="bg-white rounded-xl shadow-2xl p-5 flex flex-col space-y-3">
            {bimServices.map((service, index) => (
              // Item di dalamnya tidak lagi punya background/shadow sendiri
              <div key={index} className="flex items-start space-x-5">
                <div className="flex-shrink-0 mt-1">
                  {service.iconType === 'main' ? (
                    <service.icon className="h-10 w-10 text-gray-700" />
                  ) : (
                    <div className="bg-yellow-400 text-white rounded-full h-7 w-7 flex items-center justify-center">
                      <service.icon size={20} />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{service.title}</h3>
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