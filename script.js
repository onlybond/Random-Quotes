const motivationalQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The secret of getting ahead is getting started. - Mark Twain",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The secret of getting ahead is getting started. - Mark Twain",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
    "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles. - Wayne Dyer",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "Nothing is impossible. The word itself says 'I'm possible!' - Audrey Hepburn",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "Success is not just about making money. It’s about making a difference. - Unknown",
    "The only person you should try to be better than is the person you were yesterday. - Unknown",
    "When you know what you want, and you want it bad enough, you’ll find a way to get it. - Jim Rohn",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going. - Chantal Sutherland",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The secret of getting ahead is getting started. - Mark Twain",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
    "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles. - Wayne Dyer",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "Nothing is impossible. The word itself says 'I'm possible!' - Audrey Hepburn",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "Success is not just about making money. It’s about making a difference. - Unknown",
    "The only person you should try to be better than is the person you were yesterday. - Unknown",
    "When you know what you want, and you want it bad enough, you’ll find a way to get it. - Jim Rohn",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going. - Chantal Sutherland",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The secret of getting ahead is getting started. - Mark Twain",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
    "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles. - Wayne Dyer",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "Nothing is impossible. The word itself says 'I'm possible!' - Audrey Hepburn"];

var s = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
document.write(s)

function next() {
    s = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    document.body.style.backgroundImage = "url('https://random.imagecdn.app/v1/image?width=500&height=150')"
    jsdiv.innerHTML = s
}



