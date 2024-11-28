function showAnswer(answer, resultId) {
    document.getElementById(resultId).textContent = answer;
  }

  function showFavoriteLine() {
    const favoriteLine = "It’s always you, Santhosi! You’re not just my favorite person—you’re the spark that lights up even my dullest days and the one who makes every moment memorable. Your kindness, positivity, and the way you bring joy into every situation are things I truly cherish. You’re my constant support, my partner in fun, and the person who knows exactly how to lift my spirits. Thank you for being the amazing friend you are and for making life so much brighter just by being in it. You’re one of a kind, and I’m so lucky to call you my friend! 💖";
    document.getElementById('special-quiz-result').textContent = favoriteLine;
  }

  function showFavoriteLine2() {
    const favoriteLine = "It always you Santhosi, you are the kind of friend who makes life brighter just by being in it. Your energy is contagious, your kindness knows no bounds, and your ability to turn any moment into a happy memory is truly a gift. You’re not just my favorite person—you’re my partner in fun, my go-to for advice, and the one who always knows how to make me laugh. I’m so lucky to have a friend like you who makes everything better just by being yourself!";
    document.getElementById('special-quiz-result').textContent = favoriteLine;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const giftBox = document.getElementById('gift-box');
    const hiddenMessage1 = document.getElementById('hidden-message1');
    const hiddenMessage2 = document.getElementById('hidden-message2');
    const hiddenImageContainer = document.getElementById('hidden-image-container'); 
    const hiddenImage = document.getElementById('hidden-image');

    if (!giftBox || !hiddenMessage1 || !hiddenMessage2 || !hiddenImageContainer || !hiddenImage) {
        console.error("One or more elements are missing");
        return;
    }

    giftBox.addEventListener('click', function() {
        hiddenMessage1.style.display = 'block';
        hiddenMessage2.style.display = 'block';
        hiddenImageContainer.style.display = 'block';
        giftBox.style.display = 'none'; 
    });
});

