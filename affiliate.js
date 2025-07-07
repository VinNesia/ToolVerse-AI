const affiliateLinks = {
  "ChatGPT": "https://openai.com?ref=toolverse",
  "MidJourney": "https://midjourney.com?ref=toolverse"
};

document.querySelectorAll('.tool-button').forEach(button => {
  const toolName = button.closest('.tool-card').querySelector('.tool-title').textContent;
  if (affiliateLinks[toolName]) {
    button.href = affiliateLinks[toolName];
  }
});
