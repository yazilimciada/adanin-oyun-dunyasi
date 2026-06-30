// 1. Oyun için gerekli değişkenleri tanımlayalım
let gizliSayi = Math.floor(Math.random() * 100) + 1; // 1 ile 100 arasında rastgele sayı
let kalanHak = 7;

// 2. HTML'deki elemanları JavaScript'e tanıtalım (ID'leri ile çağırıyoruz)
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const rightCount = document.getElementById('rightCount');

// 3. Butona tıklandığında ne olacağını belirleyelim
guessButton.addEventListener('click', function() {
    // Kullanıcının kutuya yazdığı sayıyı alıp tam sayıya çeviriyoruz
    const tahmin = parseInt(guessInput.value);

    // Eğer kullanıcı boş bıraktıysa veya geçersiz bir şey yazdıysa uyaralım
    if (isNaN(tahmin) || tahmin < 1 || tahmin > 100) {
        message.textContent = "Lütfen 1 ile 100 arasında geçerli bir sayı girin!";
        return; // Fonksiyonu burada durdur
    }

    // Hak sayısını bir azaltalım
    kalanHak--;
    rightCount.textContent = kalanHak;

    // 4. Tahmin kontrolü yapalım
    if (tahmin === gizliSayi) {
        message.textContent = `🎉 Tebrikler! Gizli sayıyı (${gizliSayi}) bildin!`;
        guessButton.disabled = true; // Oyunu bitir, butona basılmasın
    } else if (kalanHak === 0) {
        message.textContent = `😢 Oyun bitti! Maalesef bilemedin. Doğru sayı: ${gizliSayi}`;
        guessButton.disabled = true;
    } else if (tahmin < gizliSayi) {
        message.textContent = "📉 Daha yukarı! Biraz daha büyük bir sayı dene.";
    } else if (tahmin > gizliSayi) {
        message.textContent = "📈 Daha aşağı! Biraz daha küçük bir sayı dene.";
    }

    // Her tahminden sonra girdi kutusunu temizleyelim ve odağı orada tutalım
    guessInput.value = '';
    guessInput.focus();
});