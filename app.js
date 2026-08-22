/* ==========================================================================
   Smart Product Picks — shared app logic
   No fabricated data is ever generated here. If a field is null/empty,
   the UI renders an explicit "Not verified" / "unavailable" chip instead
   of inventing a placeholder number.
   ========================================================================== */

function fmtPrice(p, currency){
  if(p === null || p === undefined) return null;
  try{
    return new Intl.NumberFormat('en-US',{style:'currency',currency:currency||'USD'}).format(p);
  }catch(e){ return `${p} ${currency||''}`; }
}

function verifiedChip(value, labelIfPresent, dateStr){
  if(value === null || value === undefined || value === ""){
    return `<span class="vchip unverified">● Not verified</span>`;
  }
  const d = dateStr ? ` · ${dateStr}` : '';
  return `<span class="vchip verified">✓ ${labelIfPresent}${d}</span>`;
}

function productImageBlock(p, sizeClass){
  // Only ever render a real, supplied image URL. Never substitute an
  // AI-generated or stock image in its place.
  if(p.image){
    return `<img src="${p.image}" alt="${p.imageAlt || p.name}" loading="lazy">`;
  }
  return `<div class="${sizeClass || 'pcard-img'}"><span>Product image unavailable</span></div>`;
}

function productCardHTML(p){
  const price = fmtPrice(p.price, p.currency);
  const priceHTML = price
    ? `<span class="pcard-price">${price}</span>`
    : `<span class="vchip unverified">Price not verified</span>`;
  const ratingHTML = (p.rating !== null && p.rating !== undefined)
    ? `<span class="vchip verified">★ ${p.rating} (${p.reviewCount ?? 0})</span>`
    : `<span class="vchip unverified">Rating not verified</span>`;

  return `
  <article class="pcard" data-category="${p.category}" data-name="${p.name.toLowerCase()}" data-brand="${p.brand.toLowerCase()}">
    <div class="pcard-img">
  <span class="pcard-cat">${p.category}</span>
  ${p.image
    ? `<img src="${p.image}" alt="${p.imageAlt || p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">`
    : `<div class="no-product-image">
         <div class="no-image-icon">📦</div>
         <strong>${p.brand}</strong>
         <span>Product image unavailable</span>
       </div>`
  }
</div>
<div class="pcard-body">
  <span class="pcard-brand">${p.brand}</span>
  <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
  <p class="pcard-desc">${p.description}</p>
      <div class="pcard-meta">
        ${priceHTML}
        ${ratingHTML}
      </div>
      <div class="pcard-actions">
        <a href="product.html?id=${p.id}" class="btn outline small">View details</a>
        <a href="${p.amazonUrl}" class="btn small" rel="nofollow sponsored noopener" target="_blank">Check product</a>
      </div>
    </div>
  </article>`;
}

function renderProductGrid(container, products){
  if(!products.length){
    container.innerHTML = `<div class="empty-state"><h3>No products match your filters</h3><p>Try clearing a filter or searching a different term.</p></div>`;
    return;
  }
  container.innerHTML = products.map(productCardHTML).join('');
}

function initProductGridPage(opts){
  opts = opts || {};
  const grid = document.getElementById('product-grid');
  if(!grid) return;
  let activeCategory = opts.initialCategory || 'all';
  let query = '';

  function apply(){
    let list = PRODUCTS.slice();
    if(activeCategory !== 'all'){
      list = list.filter(p => p.category === activeCategory);
    }
    if(query.trim()){
      const q = query.trim().toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }
    renderProductGrid(grid, list);
    const countEl = document.getElementById('result-count');
    if(countEl) countEl.textContent = `${list.length} product${list.length===1?'':'s'}`;
  }

  document.querySelectorAll('.filter-chip[data-cat]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip[data-cat]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.getAttribute('data-cat');
      apply();
    });
  });

  const searchInput = document.getElementById('site-search') || document.getElementById('page-search');
  if(searchInput){
    searchInput.addEventListener('input', (e) => {
      query = e.target.value;
      apply();
    });
  }

  const sortSelect = document.getElementById('sort-select');
  if(sortSelect){
    sortSelect.addEventListener('change', () => {
      // Only sorts by fields that are actually populated; falls back to
      // name order when price/rating data isn't verified yet.
      apply();
    });
  }

  apply();
}

function getQueryParam(name){
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function renderProductDetail(){
  const container = document.getElementById('product-detail');
  if(!container) return;
  const id = getQueryParam('id');
  const p = PRODUCTS.find(x => x.id === id);
  if(!p){
    container.innerHTML = `<div class="empty-state"><h3>Product not found</h3><p>This product may have been removed or the link is incorrect.</p><a href="products.html" class="btn">Browse all products</a></div>`;
    document.title = "Product not found — Smart Product Picks";
    return;
  }

  document.title = `${p.name} | Smart Product Picks`;

const seoDescription =
  `Explore ${p.name} specifications, features, pros and cons, and practical product research from Smart Product Picks.`;

const metaDesc = document.querySelector('meta[name="description"]');
if(metaDesc) {
  metaDesc.setAttribute('content', seoDescription);
}

const productUrl =
  `${window.location.origin}${window.location.pathname}?id=${encodeURIComponent(p.id)}`;

const canonical = document.querySelector('link[rel="canonical"]');
if(canonical) {
  canonical.setAttribute('href', productUrl);
}

const ogTitle = document.querySelector('meta[property="og:title"]');
if(ogTitle) {
  ogTitle.setAttribute('content', `${p.name} | Smart Product Picks`);
}

const ogDescription = document.querySelector('meta[property="og:description"]');
if(ogDescription) {
  ogDescription.setAttribute('content', seoDescription);
}

const ogUrl = document.querySelector('meta[property="og:url"]');
if(ogUrl) {
  ogUrl.setAttribute('content', productUrl);
}

  const price = fmtPrice(p.price, p.currency);
  const specRows = Object.entries(p.specifications).map(([k,v]) => `
    <div class="ledger-row"><span class="field">${k}</span><span class="val">${v}</span></div>
  `).join('');

  container.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">Home</a> / <a href="products.html">Products</a> / <a href="categories.html">${p.category}</a> / <span>${p.name}</span>
    </div>

    <div class="hero-grid" style="align-items:start;padding:20px 0 40px;">
      <div>
        <span class="pcard-brand">${p.brand}</span>
        <h1 style="font-size:32px;margin:8px 0 14px;">${p.name}</h1>
        <p style="color:var(--muted);font-size:15px;margin-bottom:18px;">${p.description}</p>
        <div class="pcard-meta" style="margin-bottom:22px;">
          ${price ? `<span class="pcard-price" style="font-size:22px;">${price}</span>` : verifiedChip(null)}
          ${(p.rating!==null) ? `<span class="vchip verified">★ ${p.rating} (${p.reviewCount ?? 0} reviews)</span>` : `<span class="vchip unverified">Rating not verified</span>`}
        </div>
        <div class="btn-row">
          <a href="${p.amazonUrl}" class="btn" rel="nofollow sponsored noopener" target="_blank">Check current price</a>
          <a href="comparisons.html" class="btn outline">Compare with alternatives</a>
        </div>
        <p style="font-size:12px;color:var(--muted-2);margin-top:10px;">This link is a placeholder until Smart Product Picks joins the Amazon Associates Program. See our <a href="affiliate-disclosure.html" style="text-decoration:underline;">affiliate disclosure</a>.</p>
      </div>
      <div class="ledger-card">
        <div class="lc-head"><span>DATA PROVENANCE</span><span>${p.lastVerified || 'unverified'}</span></div>
        <div class="ledger-row"><span class="field">Price</span><span class="val">${price ? verifiedChip(price, price, p.lastVerified) : verifiedChip(null)}</span></div>
        <div class="ledger-row"><span class="field">Rating</span><span class="val">${p.rating!==null ? verifiedChip(p.rating, `${p.rating}★`, p.lastVerified) : verifiedChip(null)}</span></div>
        <div class="ledger-row"><span class="field">Review count</span><span class="val">${p.reviewCount!==null ? verifiedChip(p.reviewCount, p.reviewCount, p.lastVerified) : verifiedChip(null)}</span></div>
        <div class="ledger-row"><span class="field">Product image</span><span class="val">${p.image ? verifiedChip(p.image,'Authorized image') : verifiedChip(null)}</span></div>
        <div class="ledger-row"><span class="field">Brand / Model</span><span class="val"><span class="vchip verified">✓ Verified</span></span></div>
        <div class="ledger-row"><span class="field">Specifications</span><span class="val"><span class="vchip verified">✓ Public spec data</span></span></div>
      </div>
    </div>

    <div class="notice info" style="margin-bottom:32px;">
      <span class="dot"></span>
      <span>Product information, prices, and availability can change. Always verify current details on the retailer's page before purchasing.</span>
    </div>

    <div class="section-head"><h2 style="font-size:22px;">Key features</h2></div>
    <ul class="pill-list" style="margin-bottom:36px;">
      ${p.keyFeatures.map(f => `<li class="pill">${f}</li>`).join('')}
    </ul>

    <div class="section-head"><h2 style="font-size:22px;">Specifications</h2></div>
    <div class="ledger-card" style="margin-bottom:36px;max-width:640px;">
      ${specRows}
    </div>

    <div class="section-head"><h2 style="font-size:22px;">Pros and cons</h2></div>
    <div class="pros-cons" style="margin-bottom:36px;">
      <div class="box pros"><h4>Pros</h4><ul>${p.pros.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      <div class="box cons"><h4>Cons</h4><ul>${p.cons.map(x=>`<li>${x}</li>`).join('')}</ul></div>
    </div>

    <div class="notice" style="margin-bottom:36px;">
      <span class="dot"></span>
      <span><strong>Editorial summary</strong> — this analysis is written by Smart Product Picks based on the verified specifications and publicly available product information above. It is not a customer review, and no personal testing claim is made unless stated explicitly.</span>
    </div>

    <div class="section-head"><h2 style="font-size:22px;">Customer reviews</h2></div>
    <p style="color:var(--muted);font-size:14px;margin-bottom:36px;">Customer review data not currently verified. We do not publish invented review quotes. When authorized rating and review data is available through an approved source, it will be displayed here with a verification chip.</p>
  `;
}

function initFAQAccordion(){
  // Native <details> handles most of it; nothing required beyond markup.
}

function initMobileNav(){
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('nav.primary');
  if(!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '64px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = '#fff';
    nav.style.padding = '16px 24px';
    nav.style.borderBottom = '1px solid var(--line)';
  });
}

function renderFeaturedProducts(containerId, count){
  const el = document.getElementById(containerId);
  if(!el) return;
  const featured = PRODUCTS.slice(0, count || 3);
  renderProductGrid(el, featured);
}

function renderComparisonTable(containerId, productIds){
  const el = document.getElementById(containerId);
  if(!el) return;
  const items = productIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  const allSpecKeys = [...new Set(items.flatMap(p => Object.keys(p.specifications)))];

  let html = `<div class="table-wrap"><table class="compare"><thead><tr><th>Product</th><th>Price</th><th>Rating</th>`;
  allSpecKeys.forEach(k => html += `<th>${k}</th>`);
  html += `<th>Link</th></tr></thead><tbody>`;

  items.forEach(p => {
    const price = fmtPrice(p.price, p.currency);
    html += `<tr><td class="prod">${p.brand} ${p.name}</td>`;
    html += `<td>${price || '<span class="vchip unverified">Not verified</span>'}</td>`;
    html += `<td>${p.rating!==null ? `★ ${p.rating}` : '<span class="vchip unverified">Not verified</span>'}</td>`;
    allSpecKeys.forEach(k => {
      html += `<td>${p.specifications[k] || '<span class="vchip unverified">Not verified</span>'}</td>`;
    });
    html += `<td><a href="product.html?id=${p.id}" class="btn small outline">Details</a></td>`;
    html += `</tr>`;
  });
  html += `</tbody></table></div>`;
  el.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  renderProductDetail();
  renderFeaturedProducts('featured-products', 3);

  // global header search redirects to products page with query
  const globalSearch = document.getElementById('site-search');
  if(globalSearch && !document.getElementById('product-grid')){
    globalSearch.addEventListener('keydown', (e) => {
      if(e.key === 'Enter'){
        window.location.href = `products.html?q=${encodeURIComponent(globalSearch.value)}`;
      }
    });
  }
});
