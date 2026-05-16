/*
  Edit daftar portfolio di file ini.

  Cara pakai:
  - Jika project sudah punya link demo, isi demoUrl.
  - Jika belum ada link demo, kosongkan demoUrl atau hapus field demoUrl.
    Tombol akan otomatis mengarah ke WhatsApp untuk request demo sesuai nama sistem.
*/
window.PORTFOLIO_ITEMS = [
  {
    title: 'Employee Performance Management System',
    category: 'Business System',
    description: 'Sistem penilaian kinerja karyawan berbasis web untuk mengelola KPI, skor penilaian, feedback, dan laporan performa tim.',
    tags: ['PHP', 'Laravel', 'PostgreSQL'],
    image: '/foto/portfolios/penilaian.jpeg',
  },
  {
    title: 'Academy Konveksi Indonesia',
    category: 'Learning System',
    description: 'Website academy untuk menampilkan program belajar, membangun komunitas, dan mengarahkan calon peserta agar mudah bergabung.',
    tags: ['Website', 'Academy', 'Community'],
    image: '/foto/portfolios/academy.png',
    demoUrl: 'https://akademikonveksiindonesia.com/',
  },
  {
    title: 'Coffee Shop Mobile Ordering',
    category: 'Landing Page',
    description: 'Konsep sistem pemesanan kopi digital untuk melihat menu, promo, estimasi siap ambil, dan alur order tanpa antre.',
    tags: ['Mobile UI', 'Ordering', 'Coffee'],
    image: '/foto/portfolios/coffeeshop.png',
    demoUrl: 'https://yourcoffee-premium.vercel.app/',
  },
  // {
  //   title: 'Fashion E-Commerce Website',
  //   category: 'E-Commerce',
  //   description: 'Website toko online untuk menampilkan produk fashion, katalog item, halaman promosi, dan alur pembelian yang lebih rapi.',
  //   tags: ['E-Commerce', 'Catalog', 'Fashion'],
  //   image: '/foto/portfolios/ecommerce.jpg',
  // },
  {
    title: 'Kost Pak Suparman',
    category: 'Landing Page',
    description: 'Landing page kost dengan informasi fasilitas, galeri, testimoni, dan tombol WhatsApp agar calon penghuni mudah menghubungi pemilik.',
    tags: ['Landing Page', 'Property', 'WhatsApp'],
    demoUrl: 'https://kost-pakman.vercel.app/',
    image: '/foto/portfolios/kost.png',
  },
  {
    title: 'Finance & Inventory Dashboard',
    category: 'Business System',
    description: 'Dashboard bisnis untuk mengelola produk, bahan baku, transaksi, pengeluaran, laporan, stock log, dan arus kas.',
    tags: ['Dashboard', 'Finance', 'Inventory'],
    image: '/foto/portfolios/payment.png',
  },
  {
    title: 'TRASPAC Web Profile',
    category: 'Company Profile',
    description: 'Website profil perusahaan teknologi untuk memperkenalkan layanan, aktivitas, karier, partnership, dan informasi perusahaan.',
    tags: ['Company Profile', 'Career', 'Corporate'],
    image: '/foto/portfolios/webprofile.png',
  },
];

(function renderPortfolioItems() {
  const WA_NUMBER = '6285718102378';
  const items = window.PORTFOLIO_ITEMS || [];
  const containers = document.querySelectorAll('[data-portfolio-list]');
  if (!containers.length || !items.length) return;

  const escapeHtml = value => String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const getRequestDemoUrl = title => {
    const text = `Halo, saya mau request demo untuk ${title}.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const getVariantMarkup = item => {
    const category = escapeHtml(item.category);
    const title = escapeHtml(item.title);

    switch (item.variant) {
      case 'catalog':
        return `
          <div class="absolute inset-6 border border-white/10"></div>
          <div class="absolute left-8 right-8 top-8 h-20 rounded bg-white/10 border border-white/10"></div>
          <div class="absolute left-10 right-10 top-12 space-y-3">
            <div class="h-3 w-3/4 rounded bg-white/35"></div>
            <div class="h-3 w-1/2 rounded bg-cyan-300/70"></div>
          </div>
          <div class="absolute inset-x-8 bottom-8 bg-cyan-600/85 p-4 text-center text-white">
            <div class="font-extrabold text-lg">${title}</div>
            <div class="text-sm text-white/80">${category}</div>
          </div>
        `;
      case 'profile':
        return `
          <div class="absolute inset-0 opacity-40" style="background-image: linear-gradient(135deg, transparent 20%, rgba(255,255,255,.15) 21%, transparent 22%), linear-gradient(45deg, transparent 42%, rgba(255,255,255,.12) 43%, transparent 44%); background-size: 42px 42px;"></div>
          <div class="absolute right-8 top-8 w-24 h-24 rounded-full border-[12px] border-white/70"></div>
          <div class="absolute right-14 top-[72px] w-20 h-28 bg-white/20 rotate-12"></div>
        `;
      case 'course':
        return '<div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.35),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,.22),transparent_20%),radial-gradient(circle_at_45%_80%,rgba(255,255,255,.20),transparent_24%)]"></div>';
      case 'travel':
        return `
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-white/10"></div>
          <div class="absolute left-10 right-10 top-12 h-24 rounded-full bg-white/20 blur-sm"></div>
          <div class="absolute left-1/2 top-16 h-28 w-40 -translate-x-1/2 rounded-t-full border-t-[16px] border-white/60"></div>
        `;
      case 'dashboard':
        return `
          <div class="absolute inset-8 grid grid-cols-2 gap-3 rotate-[-8deg]">
            <div class="bg-white/75"></div>
            <div class="bg-white/30"></div>
            <div class="bg-white/25"></div>
            <div class="bg-white/70"></div>
          </div>
        `;
      default:
        return '';
    }
  };

  const getVisualTheme = item => {
    if (item.image) return 'bg-cover bg-center';
    const themes = {
      catalog: 'bg-gradient-to-br from-slate-800 via-slate-700 to-cyan-900',
      profile: 'bg-gradient-to-br from-zinc-900 via-zinc-800 to-slate-700',
      course: 'bg-gradient-to-br from-indigo-500 via-sky-500 to-violet-500',
      travel: 'bg-gradient-to-br from-orange-300 via-amber-500 to-slate-900',
      dashboard: 'bg-gradient-to-br from-slate-700 via-gray-800 to-black',
    };
    return themes[item.variant] || 'bg-gradient-to-br from-slate-800 via-slate-700 to-cyan-900';
  };

  const renderTags = tags => (tags || []).map(tag => `
    <span class="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">${escapeHtml(tag)}</span>
  `).join('');

  const renderCard = (item, mode) => {
    const isCarousel = mode === 'carousel';
    const sizeClass = isCarousel
      ? 'flex-none w-[82vw] sm:w-[420px] lg:w-[360px] snap-start'
      : 'h-full';
    const hasDemo = Boolean(item.demoUrl);
    const buttonUrl = hasDemo ? item.demoUrl : getRequestDemoUrl(item.title);
    const buttonText = hasDemo ? 'Live Demo' : 'Request Demo';
    const buttonTarget = hasDemo && item.demoUrl.startsWith('/') ? '' : ' target="_blank" rel="noopener"';
    const visualStyle = item.image ? ` style="background-image: url('${escapeHtml(item.image)}');"` : '';

    return `
      <article class="portfolio-card group flex ${sizeClass} min-h-[430px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
        <div class="relative h-44 overflow-hidden ${getVisualTheme(item)}"${visualStyle}>
          ${item.image ? '<div class="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"></div>' : getVariantMarkup(item)}
        </div>
        <div class="flex flex-1 flex-col p-6">
          <div class="mb-4 flex flex-wrap gap-2">${renderTags(item.tags)}</div>
          <h3 class="text-xl font-extrabold leading-snug text-slate-950">${escapeHtml(item.title)}</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-500">${escapeHtml(item.description)}</p>
          <div class="mt-5 border-t border-slate-200 pt-4">
            <div class="flex items-center justify-between gap-4">
              <a href="${escapeHtml(buttonUrl)}"${buttonTarget} class="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-cyan-400">${buttonText}</a>
              <span class="text-right text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">${escapeHtml(item.category)}</span>
            </div>
          </div>
        </div>
      </article>
    `;
  };

  containers.forEach(container => {
    const mode = container.getAttribute('data-portfolio-list') || 'grid';
    container.innerHTML = items.map(item => renderCard(item, mode)).join('');
  });
})();
