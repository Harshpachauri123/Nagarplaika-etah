import React from 'react';
import { 
  MapPin, Users, Milestone, TrendingUp, BookOpen, Building2, Calendar, CheckCircle, ArrowUpRight, ShieldCheck 
} from 'lucide-react';

export const AboutEtahSection: React.FC = () => {
  const stats = [
    { icon: <Users className="w-5 h-5 text-blue-600" />, label: "कुल जनसंख्या", value: "118k+", desc: "25 प्रशासनिक वार्डों में" },
    { icon: <TrendingUp className="w-5 h-5 text-emerald-600" />, label: "प्रशासनिक वार्ड", value: "25 वार्ड", desc: "शहरी स्थानीय निकाय" },
    { icon: <Milestone className="w-5 h-5 text-purple-600" />, label: "औसत ऊँचाई", value: "170 मीटर", desc: "समुद्र तल से" },
    { icon: <BookOpen className="w-5 h-5 text-amber-600" />, label: "साक्षरता दर", value: "81.28%", desc: "जिला मानक" },
  ];

  // Official Etawah / UP Urban local body placeholder image
  const localGraphicUrl = "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053023.png";

  return (
    <section className="relative w-full bg-linear-to-br from-sky-50/60 via-indigo-50/30 to-emerald-50/40 py-20 px-6 md:px-14 border-b border-sky-100 font-sans selection:bg-blue-600 selection:text-white antialiased overflow-hidden">
      
      {/* Colorful Light Background Ambient Glows */}
      <div className="absolute -top-20 right-10 w-[450px] h-[450px] bg-sky-300/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-300/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-amber-300/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="border-b border-sky-200/60 pb-8 mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-sky-500/10 text-sky-700 border border-sky-200 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> आधिकारिक दस्तावेज़ (Official Documentation)
            </span>
          </div>

          <nav className="text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">मुख्य पृष्ठ</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700">नगर पालिका परिषद एटा</span>
          </nav>
          
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-serif">
            नगर पालिका परिषद एटा के बारे में
          </h3>
          <p className="text-sm md:text-base text-slate-600 font-medium mt-3 max-w-3xl leading-relaxed">
            एटा शहर, जिला एटा, उत्तर प्रदेश की नागरिक, भौगोलिक और जनसांख्यिकीय प्रोफ़ाइल।
          </p>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview Card */}
            <div className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-sky-100 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 to-indigo-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h4 className="text-sm font-extrabold text-blue-900 uppercase tracking-wider mb-4 flex items-center gap-2.5">
                <span className="w-2 h-5 bg-blue-600 rounded-full shadow-xs" />
                अवलोकन एवं धरोहर (Overview & Heritage)
              </h4>
              
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-normal">
                <strong className="text-slate-900 font-semibold">नगर पालिका परिषद एटा</strong>, उत्तर प्रदेश के <strong className="text-slate-900 font-semibold">एटा जिले</strong> का प्रमुख शहरी स्थानीय निकाय है। राष्ट्रीय राजमार्ग नेटवर्क (NH-34 / कानपुर-दिल्ली कॉरिडोर) पर रणनीतिक रूप से स्थित, एटा शहर पश्चिमी उत्तर प्रदेश का एक महत्वपूर्ण व्यापारिक, कृषि उत्पाद वितरण और सांस्कृतिक केंद्र है।
              </p>
              
              <div className="bg-sky-50/50 border border-sky-100 rounded-2xl p-5 flex items-start gap-4 text-sm text-slate-700 transition-colors hover:bg-sky-50">
                <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-sm shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 block mb-1 text-sm tracking-tight font-bold">भौगोलिक स्थिति (Geographical Location)</strong>
                  <span className="text-slate-600 leading-relaxed">एटा शहर उत्तर प्रदेश के उपजाऊ मैदानी क्षेत्र में <strong className="text-slate-800">27.56°N 78.66°E</strong> पर स्थित है।</span>
                </div>
              </div>
            </div>

            {/* Infrastructure Card */}
            <div className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-emerald-100 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 to-teal-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <h4 className="text-sm font-extrabold text-emerald-900 uppercase tracking-wider mb-4 flex items-center gap-2.5">
                <span className="w-2 h-5 bg-emerald-600 rounded-full shadow-xs" />
                अवसंरचना एवं क्षेत्रीय अर्थव्यवस्था (Infrastructure & Economy)
              </h4>
              
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-normal">
                एटा अपने आसपास के ग्रामीण और कृषि क्षेत्रों के लिए एक प्रमुख मंडी केंद्र है। यहाँ खाद्यान्न, तिलहन और तंबाकू का प्रमुख व्यापार होता है। एटा रेलवे स्टेशन और उत्कृष्ट सड़क संपर्क के माध्यम से यह शहर आगरा, अलीगढ़, मथुरा और कानपुर से सीधे जुड़ा हुआ है।
              </p>
              
              <div className="flex flex-wrap gap-2.5 pt-1">
                {['NH-34 ट्रांजिट बेल्ट', 'एटा मुख्य कृषि मंडी', 'रेलवे कनेक्टिविटी', '25 नागरिक वार्ड', 'स्मार्ट स्ट्रीट लाइट व्यवस्था'].map((tag) => (
                  <div key={tag} className="flex items-center gap-1.5 text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-3.5 py-2 rounded-xl shadow-2xs transition-transform hover:scale-105">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Grid Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-purple-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mb-5 border border-purple-200 shadow-2xs">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h5 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-2">शिक्षा एवं प्रमुख स्थल</h5>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                    जवाहरलाल नेहरू स्नातकोत्तर महाविद्यालय (JLND College), राजकीय मेडिकल कॉलेज एटा और विभिन्न प्रमुख स्वास्थ्य केंद्र पूरे जिले की नागरिक आवश्यकताओं को पूरा करते हैं।
                  </p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-5 border border-amber-200 shadow-2xs">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h5 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-2">नागरिक प्रशासन</h5>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                    नगर पालिका परिषद एटा अपने <strong className="text-slate-900 font-semibold">25 वार्डों</strong> में पथ प्रकाश, स्वच्छता अभियान, पाइपलाइन पेयजल आपूर्ति, गृह कर एवं जन-शिकायत निवारण का प्रबंधन करती है।
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            
            {/* Visual Frame Box */}
            <div className="bg-white/90 backdrop-blur-md border border-sky-100 rounded-3xl p-5 shadow-sm">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-3 px-1">
                आधिकारिक प्रतीक (Official Emblem)
              </span>
              <div className="w-full h-52 rounded-2xl overflow-hidden bg-slate-100 relative shadow-inner group">
                <img 
                  src={localGraphicUrl} 
                  alt="Nagar Palika Parishad Etah Official Visual" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-semibold tracking-wide flex items-center gap-1">
                    सत्यापित शासकीय संपत्ति <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Enterprise Dashboard Box */}
            <div className="bg-linear-to-b from-slate-900 to-blue-950 text-white rounded-3xl p-6 shadow-2xl border border-blue-900/50 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-blue-900/50 pb-4 mb-5">
                <span className="text-xs uppercase font-black tracking-widest text-sky-300">
                  जनसंख्या एवं सांख्यिकी (Stats)
                </span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              
              <div className="space-y-3.5">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-3.5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all hover:bg-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-slate-900/80 border border-white/10 shadow-2xs">
                        {stat.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-200 block tracking-tight">{stat.label}</span>
                        <span className="text-[11px] font-medium text-slate-400 block mt-0.5">{stat.desc}</span>
                      </div>
                    </div>
                    <span className="text-sm font-black text-sky-300 bg-sky-950/60 px-3 py-1 rounded-xl border border-sky-800/40">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Sex Ratio Progress Container */}
              <div className="mt-6 pt-5 border-t border-blue-900/50">
                <div className="flex justify-between items-center text-xs mb-2.5">
                  <span className="font-bold text-slate-300">लिंगानुपात (Sex Ratio)</span>
                  <span className="font-extrabold text-sky-300 bg-white/10 px-2 py-0.5 rounded-md">894 ♀ / 1000 ♂</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden p-0.5 border border-white/10">
                  <div className="bg-linear-to-r from-sky-400 to-indigo-400 h-full rounded-full w-[89.4%] shadow-sm" />
                </div>
              </div>

              <div className="mt-5 p-4 bg-white/5 rounded-2xl text-center border border-white/10">
                <span className="text-[10px] uppercase font-black tracking-widest text-sky-300 block">जिला क्षेत्राधिकार</span>
                <span className="text-sm md:text-base font-extrabold text-white block mt-0.5 tracking-tight">एटा, उत्तर प्रदेश</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutEtahSection;
