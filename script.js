function generateQuotes() {
    const quotesObj = {
        "— Babe Ruth": '“Never let the fear of striking out keep you from playing the game.”',
        "— Steve Jobs": '“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.”',
        "— Wordsworth": '“The best portion of a good man\'s life is his little nameless, unencumbered acts of kindness and of love.”',
        "― Mark Twain": '“Good friends, good books, and a sleepy conscience: this is the ideal life.”',
        "― Allen Saunders": '“Life is what happens to us while we are making other plans.”',
        "― douglas adams": '“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”',
        "― Dr. Seuss": '“Sometimes the questions are complicated and the answers are simple.”',
        "― George Bernard Shaw": '“Life isn\'t about finding yourself. Life is about creating yourself.”',
        "― Dr. Seuss": '“Today you are You, that is truer than true. There is no one alive who is Youer than You.”',
    }
    const autors = Object.keys(quotesObj);

    const randomAutor = autors[Math.floor(Math.random() * autors.length)];
    console.log(randomAutor);

    const quote = quotesObj[randomAutor];
    console.log(quote);

    const quoteElem = document.querySelector('#quote');
    quoteElem.innerHTML = quote;

    const autorElem = document.querySelector('#autor');
    autorElem.innerHTML = randomAutor;
}