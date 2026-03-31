const quotes = [
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { text: "Push yourself, because no one else will.", author: "Unknown" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "Consistency beats motivation.", author: "Unknown" }
];

function newQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");

  quoteEl.style.opacity = 0;

  setTimeout(() => {
    quoteEl.innerText = random.text;
    authorEl.innerText = "- " + random.author;
    quoteEl.style.opacity = 1;
  }, 300);
}

function copyQuote() {
  const text = document.getElementById("quote").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}