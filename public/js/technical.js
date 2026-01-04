// Chemical Database
const CHEMICAL_DB = [
    { name: 'Acetic Acid', conc: '10%', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Hydrochloric Acid', conc: '10%', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Sulphuric Acid', conc: '25%', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Sulphuric Acid', conc: '98%', temp: '-', resin: 'None', rating: 'Avoid' },
    { name: 'Sea Water', conc: '100%', temp: '80°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Sodium Chloride', conc: 'Sat.', temp: '100°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Diesel Fuel', conc: '100%', temp: '60°C', resin: 'Isophthalic', rating: 'Recommended' },
    { name: 'Water (Potable)', conc: '100%', temp: '60°C', resin: 'Isophthalic (WRAS)', rating: 'Recommended' }
];

// Thermal Calculation Logic
const K_GRP = 3.5;

function calculateThermal(h_mm, w_mm, d_mm, heatLoad, ambient, install) {
    const h = (h_mm || 0) / 1000;
    const w = (w_mm || 0) / 1000;
    const d = (d_mm || 0) / 1000;

    let area = 0;
    if (h > 0 && w > 0 && d > 0) {
        if (install === 'wall') {
            area = 1.4 * w * (h + d) + 1.8 * d * h;
        } else {
            area = 1.8 * h * (w + d) + 1.4 * w * d;
        }
    }

    const dt = (area > 0 && K_GRP > 0) ? heatLoad / (K_GRP * area) : 0;
    const internalTemp = ambient + dt;

    return {
        area: area.toFixed(2),
        dt: dt.toFixed(1),
        internalTemp: internalTemp.toFixed(1),
        safe: internalTemp <= 55
    };
}

// UI Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Chemical Search
    const chemInput = document.getElementById('chem-search');
    const chemTable = document.getElementById('chem-table-body');

    if (chemInput && chemTable) {
        chemInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = CHEMICAL_DB.filter(c => c.name.toLowerCase().includes(query));

            chemTable.innerHTML = filtered.map(item => `
                <tr class="hover:bg-white/5 transition-colors">
                    <td class="p-4 font-bold text-white">${item.name}</td>
                    <td class="p-4 text-neutral-400">${item.conc}</td>
                    <td class="p-4 text-neutral-400">${item.temp}</td>
                    <td class="p-4 text-blue-500 font-semibold">${item.resin}</td>
                    <td class="p-4 text-right">
                        <span class="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${item.rating === 'Recommended' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}">
                            ${item.rating}
                        </span>
                    </td>
                </tr>
            `).join('');
        });
    }

    // Thermal Calculator
    const thermalInputs = ['h-dim', 'w-dim', 'd-dim', 'heat-load', 'ambient-temp', 'mount-type'];
    thermalInputs.forEach(id => {
        document.getElementById(id)?.addEventListener('input', () => {
            const h = parseFloat(document.getElementById('h-dim').value);
            const w = parseFloat(document.getElementById('w-dim').value);
            const d = parseFloat(document.getElementById('d-dim').value);
            const load = parseFloat(document.getElementById('heat-load').value);
            const amb = parseFloat(document.getElementById('ambient-temp').value);
            const mount = document.getElementById('mount-type').value;

            const res = calculateThermal(h, w, d, load, amb, mount);

            document.getElementById('res-area').innerText = res.area + ' m²';
            document.getElementById('res-dt').innerText = '+' + res.dt + ' °C';
            document.getElementById('res-temp').innerText = res.internalTemp + ' °C';

            const statusBox = document.getElementById('thermal-status');
            if (res.safe) {
                statusBox.className = 'mt-8 p-4 rounded-lg border bg-green-500/10 border-green-500/30';
                statusBox.innerHTML = '<span class="text-green-400 block text-xs font-bold">PASS: THERMAL INTEGRITY OK</span>';
            } else {
                statusBox.className = 'mt-8 p-4 rounded-lg border bg-red-500/10 border-red-500/30';
                statusBox.innerHTML = '<span class="text-red-400 block text-xs font-bold">WARNING: CRITICAL TEMP EXCEEDED</span>';
            }
        });
    });
});
