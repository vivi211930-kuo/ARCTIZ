import React, { useState } from 'react';
import { Menu, ArrowRight, ArrowLeft, Quote, Facebook, Instagram, Twitter, Phone, Mail } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-stone-900 bg-white selection:bg-stone-200">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-8 md:px-16 border-b border-stone-100">
        <a href="#" className="flex items-center gap-4">
          <span className="text-3xl font-serif font-semibold tracking-tighter">ARCTIZ</span>
          <img src="./images/ARCTIZ.jpg" alt="ARCTIZ" className="h-[60px] md:h-[80px] w-auto mix-blend-multiply" />
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <a href="#" className="hover:text-stone-500 border-b border-stone-900 pb-1">首頁</a>
          <a href="#" className="hover:text-stone-500">關於我們</a>
          <a href="#" className="hover:text-stone-500">作品集</a>
          <a href="#" className="hover:text-stone-500">畫廊</a>
          <a href="#" className="hover:text-stone-500">展示間</a>
          <a href="#" className="hover:text-stone-500">工作坊</a>
          <a href="#" className="hover:text-stone-500">聯絡我們</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center py-4 space-y-4 border-b border-stone-100 text-sm tracking-wide">
          <a href="#" className="hover:text-stone-500">首頁</a>
          <a href="#" className="hover:text-stone-500">關於我們</a>
          <a href="#" className="hover:text-stone-500">作品集</a>
          <a href="#" className="hover:text-stone-500">展示間</a>
          <a href="#" className="hover:text-stone-500">工作坊</a>
          <a href="#" className="hover:text-stone-500">聯絡我們</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row min-h-[85vh]">
        <div className="w-full md:w-5/12 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-16 md:py-0">
          <span className="text-xs tracking-[0.2em] text-stone-500 mb-6 uppercase">
            Collaborate. Craft. Create
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight tracking-widest">
            板材大師：定義居家裝修的底層美學
          </h1>
          <p className="text-stone-600 text-sm leading-relaxed mb-10 max-w-sm">
            「ARCTIZ 板材大師」是高端家具板材與室內裝飾材料的領先品牌。品牌致力於將「極致工藝」與「永續環保」結合，為現代室內設計提供兼具耐用性與視覺美感的板材解決方案。
          </p>
          <div>
            <a href="#" className="inline-block border border-stone-900 px-8 py-3 text-xs tracking-widest font-medium hover:bg-stone-900 hover:text-white transition-colors">
              了解更多
            </a>
          </div>
        </div>
        <div className="w-full md:w-7/12 h-[50vh] md:h-auto">
          <img 
            src="./images/Cabinetry/small-kitchen-space-with-modern-design 1.png" 
            alt="Modern Wood Kitchen" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Room Categories */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Category 1 */}
        <div className="relative group h-[400px] md:h-[500px] overflow-hidden cursor-pointer">
          <img src="./images/Cabinetry/1.png" alt="Dining Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        </div>

        {/* Category 2 */}
        <div className="relative group h-[400px] md:h-[500px] overflow-hidden cursor-pointer">
          <img src="./images/Cabinetry/3.png" alt="Bedroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        </div>

        {/* Category 3 */}
        <div className="relative group h-[400px] md:h-[500px] overflow-hidden cursor-pointer">
          <img src="./images/Cabinetry/6.png" alt="Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        </div>

        {/* Category 4 */}
        <div className="relative group h-[400px] md:h-[500px] overflow-hidden cursor-pointer">
          <img src="./images/Cabinetry/7.png" alt="Bathroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        </div>
      </section>

      {/* Our Projects Gallery */}
      <section className="py-24 px-6 md:px-16 container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl tracking-widest mb-2">我們的專案</h2>
            <p className="text-sm font-light text-stone-500">個人化設計，傳統工藝打造</p>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-0">
            <button className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center hover:bg-stone-700 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-stone-200 text-stone-800 flex items-center justify-center hover:bg-stone-300 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-end">
          <div className="relative group aspect-[4/5] overflow-hidden">
            <img src="./images/138cea.jpg" alt="Classic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
          </div>
          <div className="relative group aspect-square overflow-hidden md:-mb-10">
            <img src="./images/882faa.jpg" alt="Transitional" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
          </div>
          <div className="relative group aspect-[4/5] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" alt="Soft Modern" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
          </div>
        </div>

        <div className="flex justify-center mt-16 md:mt-24">
          <a href="#" className="inline-block border border-stone-900 px-10 py-3 text-xs tracking-widest font-medium hover:bg-stone-900 hover:text-white transition-colors uppercase">
            查看更多
          </a>
        </div>
      </section>

      {/* About Us & Materials */}
      <section className="py-24 px-6 md:px-16 container mx-auto border-t border-stone-100">
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <div className="flex-1">
            <span className="text-xs tracking-widest text-stone-500 mb-6 uppercase block">關於我們</span>
            <h2 className="text-3xl lg:text-4xl leading-tight font-serif uppercase tracking-wide">
              ARCTIZ 的品牌命名結合了 Arctic (北極) 與 Zenith (頂峰) 的意象，象徵著純淨、堅韌與對卓越品質的追求。
            </h2>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-stone-600 text-sm leading-relaxed mb-8">
              環保承諾： 嚴格遵循國際環保標準（如歐盟 E1/E0 級或更高級別），確保低甲醛排放，守護居住者的健康。
              <br /><br />
              工藝研發： 持續投入表面處理技術，力求還原自然材質的真實觸感。
            </p>
            <div>
              <a href="#" className="inline-flex items-center space-x-2 text-xs tracking-widest font-medium hover:text-stone-500 transition-colors uppercase">
                <span>閱讀更多</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Materials */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center text-sm font-medium">
          <div className="flex flex-col items-center gap-4">
            <img src="./images/group/Group 2.png" alt="Natural Birch" className="w-32 h-32 object-cover rounded-sm shadow-sm" />
            <span>天然樺木</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="./images/group/Group 3.png" alt="Natural Oak" className="w-32 h-32 object-cover rounded-sm shadow-sm" />
            <span>天然橡木</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="./images/group/Group 4.png" alt="Smoked Oak" className="w-32 h-32 object-cover rounded-sm shadow-sm" />
            <span>煙燻橡木</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="./images/group/Group 5.png" alt="Bog Oak" className="w-32 h-32 object-cover rounded-sm shadow-sm" />
            <span>沼澤橡木</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src="./images/group/Group 6.png" alt="American Walnut" className="w-32 h-32 object-cover rounded-sm shadow-sm" />
            <span>美國核桃木</span>
          </div>
        </div>
      </section>

      {/* Testimonials & Partners */}
      <section className="bg-stone-50 py-24 px-6 md:px-16 border-y border-stone-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left pr-0 md:pr-16">
            <Quote className="w-12 h-12 text-stone-300 mx-auto md:mx-0 mb-6" />
            <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-stone-700 mb-8">
              如果您追求的是家具的細節質感，且對居住環境的環保與耐用性有高度要求，ARCTIZ 板材大師無疑是現代室內裝修中的理想首選。它讓板材不再只是配角，而是定義空間性格的關鍵。
            </p>
            <p className="text-xs tracking-widest font-bold uppercase">— JOHN DOE</p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 items-center justify-items-center opacity-70">
            {/* Logos / placeholders */}
            <h3 className="font-serif font-bold tracking-widest text-3xl">Forbes</h3>
            <div className="font-sans font-bold tracking-tighter text-2xl flex items-center">
               <span className="text-4xl mr-1">&#x2302;</span> Houzz
            </div>
            <h3 className="font-serif text-4xl italic">luxe</h3>
            <h3 className="font-sans font-semibold text-xl tracking-tight text-center leading-tight">Better<br/>Homes<br/><span className="text-xs font-light tracking-wide">and Gardens</span></h3>
            <h3 className="font-serif text-2xl tracking-widest">Galerie</h3>
            <h3 className="font-sans font-medium tracking-[0.3em] text-xl">ASPIRE</h3>
          </div>
        </div>
      </section>

      {/* Blog/Articles */}
      <section className="py-24 px-6 md:px-16 container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <h2 className="text-3xl md:text-4xl tracking-widest">三大核心技術優勢</h2>
          <a href="#" className="mt-6 md:mt-0 inline-block border border-stone-900 px-8 py-2 text-xs tracking-widest hover:bg-stone-900 hover:text-white transition-colors uppercase">
            查看更多
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <article className="flex flex-col group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden mb-6">
              <img 
                src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop`} 
                alt="Project thumbnail" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-lg tracking-wide uppercase mb-3">
              A. 擬真同步壓紋 (Synchronized Texture)
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              ARCTIZ 最引以為傲的技術，能精準對位木紋紋理與凹凸觸感。當視覺看到木節時，指尖觸摸到的也是相對應的起伏，達到「視觸一體」的感官體驗。
            </p>
            <a href="#" className="inline-flex items-center space-x-2 text-xs tracking-widest font-medium group-hover:text-stone-500 transition-colors uppercase mt-auto">
              <span>閱讀更多</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </article>
          
          <article className="flex flex-col group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden mb-6">
              <img 
                src={`https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop`} 
                alt="Project thumbnail" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-lg tracking-wide uppercase mb-3">
              B. 高性能表面防護
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              抗刮耐磨： 表面採用高硬度保護層，能抵抗日常生活中的輕微刮擦。
              <br /><br />
              防潮穩定： 針對潮濕氣候優化基材結構，降低板材膨脹率，延長家具使用壽命。
              <br /><br />
              易潔抗汙： 具備優異的抗油汙性能，指紋不易殘留，清潔維護簡單。
            </p>
            <a href="#" className="inline-flex items-center space-x-2 text-xs tracking-widest font-medium group-hover:text-stone-500 transition-colors uppercase mt-auto">
              <span>閱讀更多</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </article>

          <article className="flex flex-col group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden mb-6">
              <img 
                src={`https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop`} 
                alt="Project thumbnail" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-serif text-lg tracking-wide uppercase mb-3">
              C. 多元的美學表現
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              除了經典木紋，ARCTIZ 也涵蓋了：
              <br /><br />
              石材系列： 模擬大理石、清水模與板岩的冷冽質感。
              <br /><br />
              布紋系列： 賦予板材絲綢或棉麻般的溫潤觸感。
              <br /><br />
              純色絲絨面： 提供飽和度極高的霧面色彩，適合極簡或奶油風設計。
            </p>
            <a href="#" className="inline-flex items-center space-x-2 text-xs tracking-widest font-medium group-hover:text-stone-500 transition-colors uppercase mt-auto">
              <span>閱讀更多</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </article>
        </div>
      </section>

      {/* Stay in Touch */}
      <section className="relative py-32 px-6 md:px-16 flex items-center min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop" alt="Happy Couple" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stone-100/80 md:bg-gradient-to-r md:from-stone-100/90 md:via-stone-100/60 md:to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-lg">
          <h2 className="text-4xl md:text-5xl tracking-widest mb-6 font-light uppercase">保持聯繫</h2>
          <p className="text-stone-700 text-sm leading-relaxed mb-10">
            想了解最新的設計趨勢或獲取靈感？訂閱我們的電子報，我們將不定期發送精選的專案案例和產業資訊，讓您保持領先。
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="您的電子郵件地址" 
              className="flex-1 px-4 py-3 bg-white border border-stone-200 focus:outline-none focus:border-stone-500 text-sm placeholder:text-stone-400"
              required
            />
            <button type="submit" className="bg-stone-900 text-white px-8 py-3 text-xs tracking-widest font-medium hover:bg-stone-800 transition-colors uppercase">
              送出
            </button>
          </form>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-stone-800 text-white py-16 px-6 md:px-16 relative overflow-hidden">
        {/* Subtle background texture overlay */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-fish-skin.png")'}}/>
        
        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl tracking-widest mb-2 font-light uppercase">ARCTIZ主要應用場景：</h2>
            <p className="text-stone-400 text-sm font-light">
              系統廚櫃： 憑藉其耐高溫與抗油煙特性。
              <br /><br />
              臥室衣帽間： 提供優雅且安全的收納空間。
              <br /><br />
              商業空間： 適用於辦公室、精品店等高頻率使用場所。
            </p>
          </div>
          <a href="#" className="shrink-0 bg-white text-stone-900 px-10 py-4 text-xs tracking-widest font-semibold hover:bg-stone-200 transition-colors uppercase">
            聯絡我們
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-8 px-6 md:px-16 text-sm border-t border-stone-200">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold tracking-widest mb-6 uppercase">關於我們</h4>
            <p className="text-stone-500 leading-relaxed max-w-xs">
              ARCTIZ 不僅僅是提供板材，更是希望成為室內設計師與屋主之間的橋樑，透過更高質感的材料，讓「輕裝修」也能展現出「重工藝」的深度與層次。
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row gap-12 sm:gap-24">
            <div>
              <h4 className="font-bold tracking-widest mb-6 uppercase">導覽</h4>
              <ul className="space-y-3 text-stone-500">
                <li><a href="#" className="hover:text-stone-900 transition-colors">首頁</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">關於我們</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">作品集</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">畫廊</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold tracking-widest mb-6 uppercase invisible">導覽 2</h4>
              <ul className="space-y-3 text-stone-500">
                <li><a href="#" className="hover:text-stone-900 transition-colors">展示間</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">工作坊</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">流程</a></li>
                <li><a href="#" className="hover:text-stone-900 transition-colors">聯絡資訊</a></li>
              </ul>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold tracking-widest mb-6 uppercase">聯絡資訊</h4>
            <ul className="space-y-4 text-stone-500">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 shrink-0" />
                <span>(02) 2295 3697</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 shrink-0" />
                <span>gf95458463@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="container mx-auto pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-400 text-xs">
          <p>版權所有 @ 2026 ARCTIZ 板材大師</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-stone-900 transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-stone-900 transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-stone-900 transition-colors"><Twitter className="w-4 h-4" /></a>
          </div>
          <p>由 Excelyte 提供技術支援</p>
        </div>
      </footer>
    </div>
  );
}
