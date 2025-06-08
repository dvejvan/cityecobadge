# PrestaShop Headless Integration

## 🎯 Aktuální stav

✅ **Dokončeno:**
- Vytvořeno API rozhraní `/api/prestashop`
- Upraveny formuláře pro integraci s PrestaShop
- Připravena mock verze pro demonstraci
- Testovací stránka na `/api-test`

⚠️ **Potřebuje dokončení:**
- Konfigurace PrestaShop Webservice API
- Aktivace skutečného API spojení

## 🔧 Technická implementace

### 1. API Routes
- **Soubor:** `app/api/prestashop/route.ts`
- **Endpointy:**
  - `GET /api/prestashop` - test připojení
  - `POST /api/prestashop` - vytvoření zákazníka/objednávky

### 2. Upravené komponenty
- **`components/EnhancedOrderForm.tsx`** - nyní posílá data do PrestaShop API
- **Přidána testovací stránka:** `app/api-test/page.tsx`

## 🏪 PrestaShop konfigurace (potřebné kroky)

### V admin panelu (`http://cityecobadge.eu/admin`):

1. **Advanced Parameters → Webservice**
   - ✅ "Enable PrestaShop's webservice" 
   - ✅ API klíč vytvořen: `6SZKIXFW21U8E6XHMM1X3ZPEKKTDAGNV`

2. **Potřebná oprávnění pro API klíč:**
   - ✅ Customers (GET, POST)
   - ✅ Orders (GET, POST) 
   - ❓ Products (GET) - zkontroluj
   - ❓ Addresses (GET, POST) - přidej

3. **Server konfigurace:**
   - ❓ Zkontroluj .htaccess v root složce PrestaShop
   - ❓ Ověř mod_rewrite na serveru

## 🧪 Testování

### Aktuálně dostupné:
1. **Mock API** - funguje pro demonstraci
2. **Test stránka:** `https://twoje-domena.com/api-test`
3. **Objednávkový formulář** - integrovaný s API

### Co testovat:
```bash
# Test připojení
curl -X GET https://twoje-domena.com/api/prestashop

# Test objednávky  
curl -X POST https://twoje-domena.com/api/prestashop \
  -H "Content-Type: application/json" \
  -d '{"action":"createOrder","data":{"firstName":"Test","lastName":"User","email":"test@example.com"}}'
```

## 🚀 Další kroky

### 1. Dokončení PrestaShop konfigurace
```bash
# V PrestaShop admin:
1. Zkontroluj oprávnění API klíče
2. Aktivuj všechny potřebné webservice resources
3. Otestuj API endpoint přímo: http://cityecobadge.eu/api/?ws_key=6SZKIXFW21U8E6XHMM1X3ZPEKKTDAGNV
```

### 2. Aktivace skutečného API
```typescript
// V app/api/prestashop/route.ts zakomentuj mock a odkomentuj skutečné API volání
```

### 3. Vytvoření produktu v PrestaShop
- **Název:** "Grüne Umweltplakette"
- **Cena:** €15.99
- **SKU:** "UMWELT-GREEN-001"

## 📊 Datový tok

```
Next.js Frontend → API Route → PrestaShop → Database
     ↓                ↓           ↓
  Form Data    →   XML/JSON  →   MySQL
```

## 🔍 Debugging

### Logy v Next.js:
```bash
# Server logs
npm run dev

# Browser dev tools
Console → Network tab
```

### PrestaShop API test:
```bash
# Direct API test
curl -u "6SZKIXFW21U8E6XHMM1X3ZPEKKTDAGNV:" \
  "http://cityecobadge.eu/api/?output_format=JSON"
```

## 💡 Výhody Headless řešení

✅ **Frontend:** Zůstává současný Next.js design  
✅ **Backend:** PrestaShop spravuje objednávky  
✅ **Jednoduchá údržba:** Žádné PHP templaty  
✅ **Škálovatelnost:** Oddělené systémy  
✅ **SEO:** Next.js optimalizace

---

**Status:** 🟨 Mock implementation ready, awaiting PrestaShop configuration