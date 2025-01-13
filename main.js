document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('proxy-form');
  const input = document.getElementById('url-input');
  const historyList = document.getElementById('history-list');
  const themeToggle = document.getElementById('theme-toggle');

  // Load history from local storage
  const loadHistory = () => {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    historyList.innerHTML = history
      .map((url) => `<li><a href="/proxy?url=${encodeURIComponent(url)}" target="_blank">${url}</a></li>`)
      .join('');
  };

  // Save history to local storage
  const saveToHistory = (url) => {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    if (!history.includes(url)) {
      history.push(url);
      localStorage.setItem('history', JSON.stringify(history));
      loadHistory();
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = input.value.trim();
    if (!url) return alert('Enter a valid URL!');
    saveToHistory(url);
    window.location.href = `/proxy?url=${encodeURIComponent(url)}`;
  });

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });

  loadHistory();
});
