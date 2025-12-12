export interface LoveMessage {
  id: string;
  occasion: string;
  title: string;
  message: string;
  emoji: string;
  date?: string;
}

export const loveMessages: LoveMessage[] = [
  {
    id: "1",
    occasion: "Just Because",
    title: "For When You Miss Me",
    emoji: "💕",
    message: `My love,

If you're reading this, it means I'm not there with you right now. But I want you to know that even when we're apart, you're always on my mind.

Every moment without you feels a little longer, every song reminds me of you, and every beautiful thing I see makes me wish you were there to share it with me.

You are my favorite person, my best friend, and the love of my life. Distance is just a number, and my heart will always find its way to you.

I love you more than words could ever express.

Forever yours ❤️`
  },
  {
    id: "2",
    occasion: "Birthday",
    title: "Happy Birthday, My Love",
    emoji: "🎂",
    message: `Happy Birthday, my beautiful one!

Today is one of my favorite days of the year because it's the day the world was blessed with you. Every candle on your cake represents another year of your amazing light shining in this world.

I'm so grateful that I get to be the one who loves you, who celebrates you, and who gets to witness all the beautiful moments of your life.

May this year bring you all the happiness, love, and dreams your heart can hold. You deserve the universe and more.

Happy Birthday, my love. Here's to many more together.

With all my love ❤️`
  },
  {
    id: "3",
    occasion: "Anniversary",
    title: "Another Year of Us",
    emoji: "💍",
    message: `My dearest,

Another year has passed, and my love for you has only grown stronger. Looking back at our journey together, I'm filled with so much gratitude and joy.

Every laugh we've shared, every challenge we've overcome, every quiet moment together has been a treasure. You've made my life richer, fuller, and more beautiful than I ever imagined.

Thank you for choosing me, for loving me, and for being my partner in this beautiful adventure called life.

Here's to us, to our love, and to all the beautiful years ahead.

I love you endlessly.

Your forever partner ❤️`
  },
  {
    id: "4",
    occasion: "When You're Sad",
    title: "I'm Here For You",
    emoji: "🤗",
    message: `My sweet love,

I know today might be hard, and I wish I could be there to hold you right now. But even though I can't be there in person, please know that my love is wrapping around you like the warmest hug.

You are so strong, so resilient, and so incredibly brave. Whatever you're going through, you don't have to face it alone. I'm always here for you, cheering you on, believing in you.

It's okay to not be okay sometimes. Let yourself feel, let yourself rest, and know that brighter days are coming. And I'll be right here, loving you through it all.

You are my sunshine, even on cloudy days.

With all my love and support ❤️`
  },
  {
    id: "5",
    occasion: "Good Morning",
    title: "Rise & Shine, Beautiful",
    emoji: "☀️",
    message: `Good morning, my love!

I hope you slept well and that this message brings a smile to your beautiful face as you start your day.

Remember that you are amazing, capable, and loved beyond measure. Whatever today brings, know that you've got this, and I believe in you completely.

Go out there and shine bright, my love. The world is lucky to have you, and I'm the luckiest of all to call you mine.

Have the most wonderful day!

I love you more than yesterday, less than tomorrow ❤️`
  },
  {
    id: "6",
    occasion: "Good Night",
    title: "Sweet Dreams, My Love",
    emoji: "🌙",
    message: `Goodnight, my love,

As you close your eyes tonight, I want you to drift off knowing how deeply loved you are. You are the last thing on my mind before I sleep and the first thing I think of when I wake.

May your dreams be filled with happiness and peace. May you wake up refreshed and ready to take on another beautiful day.

Thank you for being you. Thank you for every moment, every smile, every laugh. You make my world complete.

Sleep tight, my angel. I'll be dreaming of you.

Sweet dreams and endless love ❤️`
  },
  // Empty slots for future messages (7-50)
  ...Array.from({ length: 44 }, (_, i) => ({
    id: String(i + 7),
    occasion: "Coming Soon",
    title: `Message ${i + 7}`,
    emoji: "💌",
    message: `This message slot is waiting for your special words...

Tap here to remind your love to write a new message for you!`
  }))
];
