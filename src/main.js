import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";

const h = React.createElement;

const comfortNotes = [
  "stop being mean to yourself",
  "you deserve love too",
  "i haven’t seen u today but i know u look cute",
  "you deserve the best",
  "aap overthink bahut karte ho",
  "drink water pls",
  "go sleep jas 😭",
  "you are not hard to care about",
  "itna mat socha karo apne baare",
  "your feelings are never “too much”",
  "being emotional is not a bad thing",
  "i hope you’re smiling rn",
  "you deserve softer days too",
  "aapko har waqt strong rehne ki zarurat nahi hai",
  "you make people feel comfortable",
  "stop doubting every good thing 😭",
  "i’m glad you exist btw",
  "you are more lovable than you realize",
  "your brain needs to relax sometimes",
  "thank you for being in my life",
];

const likeLines = [
  "the way you say “aap” back",
  "your voice notes",
  "the way you can’t express yourself properly 😭",
  "your beauty",
  "your personality",
  "your limited vocab",
  "your random moods",
  "how deeply you feel things",
  "the way you care even when you’re struggling yourself",
  "your excited reactions",
  "the comfort in your voice",
  "every insecurity of yours",
];

const gameMessages = [
  "aapko hug ki zarurat hai probably",
  "jasleen has been cared for successfully",
  "emotional support deployed",
  "stop overthinking for 2 minutes challenge",
  "u deserve softness too",
];

const letters = [
  "when sad",
  "when insecure",
  "when overthinking",
  "when you can’t sleep",
  "when you need reassurance",
  "when you wanna smile",
];

const letterBodies = {
  "when you wanna smile": `hi jas 😭
if you’re opening this then i’m assuming:

a) you’re sad
b) you’re overthinking
or c) you just wanted attention
which honestly… valid.

ANYWAYS.

this letter’s job is to make you smile so for the next 2 minutes you are legally banned from being mean to yourself.

First of all, i need you to know that you are genuinely one of the funniest unintentionally funny people i’ve met 😭

Like the way you say things.
The way you react.
Your limited vocab.
Your emotionally constipated attempts at expressing feelings.

All of it is genuinely so endearing to me.

And i still laugh thinking about:

you struggling to explain emotions
your random panic moments
the way you type when excited
how you say “idk” after saying the most emotional thing ever

Also i need you to know that somewhere out there, there’s a person (me) who randomly smiles at their phone because of your messages. So congratulations i guess.

And btw before you start overthinking THIS too:

yes, i still think you’re adorable.
yes, i still think your voice is comforting.
yes, you are still one of my favorite people.

Unfortunately for you, that opinion is not changing anytime soon.

Anyways.

Please smile idiot 😭

Imagine me handing you this rn:
🐱🌷

Okay bye.
Go drink water.
And stop fighting imaginary battles in your head for ONE second.`,
  "when sad": `hey jas :(

if you’re opening this right now then i’m guessing today feels a little heavier than usual.

And before anything else, no, you do not have to pretend you’re okay for me.

You don’t always have to pretend your way through things.
You don’t always have to say “i’m fine.”
You don’t always have to hide what’s going on in your head just because you think it’ll burden someone.

Especially not with me.

I know your brain gets really loud sometimes.
I know there are days where everything feels exhausting for no proper reason.
And i know you probably blame yourself for feeling too emotional sometimes too.

But jas, feeling deeply is not a bad thing.

And neither are you.

So please stop trying to fight every emotion like it’s something embarrassing. You’re human yaar 😭 (my fav one btw)

And i know this won’t magically fix whatever made you sad right now. I know words can only do so much. But i still wanted to remind you of a few things anyway:

You are cared for.
A lot more than you realize.

You matter to people.
To me especially.

And even on the days where you feel unlovable, difficult, annoying, emotional, or “too much”, i promise that is not how i see you.

Not even close.

I just see jas.
A girl who overthinks too much.
Feels everything too deeply.
Needs reassurance more often than she admits.
And still somehow manages to be one of the softest and most comforting people i know.

So please be gentle with yourself today, okay?

Drink water.
Get some rest.
Listen to music.
Take a deep breath.
And stop bullying yourself in your own head for a little while.

You deserve softness too.

And if nobody told you today:
i’m really glad you’re here :)`,
  "when insecure": `hey jas :(

if you opened this then i’m guessing your brain is being mean to you again.

So before you read anything else, i need you to pause for one second and understand something:

I genuinely do not see you the way you see yourself sometimes.

Not even close.

I know you overanalyze everything about yourself.
The way you look.
The way you talk.
The way you act.
The things you say.
Your emotions.
Your personality.
Literally everything 😭

And i know compliments are hard for you to believe sometimes too. Like a part of you automatically assumes people are exaggerating, joking, or “just saying it.”

But jas, i promise i mean every nice thing i say about you.

Every single one.

You are genuinely beautiful to me.
And i don’t just mean physically, although yes, you are realy really pretty and i hope one day your brain stops trying to convince you otherwise 😭

But i also mean:
the way you care.
the way you feel things deeply.
the softness in your voice.
your random moods.
your awkwardness sometimes.
even your inability to express emotions properly.

All those little things make you YOU.
And i wouldn’t change them even if i could.

And honestly? Some of the things you’re insecure about are things i find the most lovable about you.

I know there are days where you look at yourself and only notice flaws.
Days where your brain convinces you you’re “not enough.”
Not pretty enough.
Not interesting enough.
Not lovable enough.

But please listen to me carefully right now:

You do not need to earn love by becoming perfect first.

You are already worthy of being cared for exactly as you are.

Even on bad days.
Even on insecure days.
Even on days where you don’t feel confident at all.

And i know i can’t magically remove those insecurities for you overnight. I know healing doesn’t work like that. But i hope slowly, over time, you start seeing yourself a little kinder.

Because you deserve that.

And until then, i’ll keep reminding you if i have to 😭

So please:
stop staring at your flaws for 2 minutes.
stop comparing yourself to random people online.
stop assuming everyone notices the things you hate about yourself.

Most people probably don’t even see them.
And the people who genuinely care about you definitely care about much more than that.

Including me.

To me, you’re just jasleen.
And i like my jasleen very very much :)

Now come here 🫂
And drink water.`,
  "when overthinking": `hey jas 😭

if you opened this then i already know what’s happening.

Your brain is probably doing that thing again where it takes one tiny thought and somehow turns it into:

* 47 different scenarios
* emotional damage
* self doubt
* panic

Classic jas behavior honestly.

First of all:
breathe.

Secondly:
PLEASE stop trying to solve your entire life 😭

I know your brain moves really fast sometimes.
Too fast honestly.

You overthink:

* what people mean
* how people feel about you
* whether you said the wrong thing
* whether you’re annoying
* whether you’re “too much”
* whether people secretly hate you
* literally EVERYTHING.

And i know sometimes those thoughts feel so real that you start believing them automatically.

But jas, thoughts are not always facts.

Just because your brain says something loudly does NOT mean it’s true.

And i need you to remember that especially on nights like this.

You are not annoying.
You are not hard to love.
You are not “too emotional.”
You are not secretly ruining everything.

Your brain just gets scared sometimes.

And honestly? I think a part of you has gotten so used to expecting disappointment or abandonment that now you try to prepare for it before it even happens.

But not every silence means someone’s upset.
Not every dry text means someone’s losing interest.
Not every small change means everything is falling apart.

Sometimes people are just busy.
Sometimes your brain is just tired.
Sometimes you just need sleep and reassurance 😭

So please stop trying to read between lines that probably don’t even exist.

And another thing:
you do NOT have to figure everything out right now.

Not your future.
Not every emotion.
Not every relationship.
Not every possibility.

You’re allowed to pause.
You’re allowed to rest.
You’re allowed to not know everything yet.

And no matter how loud your thoughts get sometimes, i hope you know this:

You are still cared for.
Very deeply.

Even on the messy days.
Even on the irrational days.
Even on the overthinking spiral days.

Especially then honestly 😭

Now put your phone down for a bit.
Drink water.
Listen to music.
Take a deep breath.

And please be a little gentler with your own mind tonight, okay?`,
  "when you can’t sleep": `hi jas :(

can’t sleep again?

yeah i had a feeling 😭

Right now i’m guessing your room is dark, and your brain is refusing to shut up for more than 3 seconds.

And honestly? I wish i was there to annoy you into sleeping properly.

I’d probably force you to stop overthinking, steal your phone or tab, make you drink water, and tell you to close your eyes every 5 minutes while you complain about not being sleepy 😭

But since i can’t do that rn, this letter will have to do instead.

So first:
take a deep breath for me.

Like actually.
A proper one.

Your brain has probably spent the whole day carrying way too much again. Thoughts, emotions, worries, random memories, insecurities, all at once. No wonder you can’t sleep.

But jas, you don’t have to solve every feeling before resting.

You’re allowed to pause.
You’re allowed to let your mind be quiet for a little while.

And i know nights are probably the hardest sometimes.
Everything feels louder at night for some reason.

The overthinking.
The loneliness.
The self doubt.
All of it.

But i hope you know that even on nights like this, you are still deeply cared for.

And somewhere out there is a person who would absolutely sit on call with you silently at 3am if you needed it (could be me, who knows) 😭

Also random but:
you probably look very cute right now.
Like sleepy messy-hair cute.

And before you deny it:
no.
I am correct.
Goodnight.

Anyways.
Try to relax your shoulders a little.
Stop rereading old conversations.
Stop creating fake scenarios in your head.
And PLEASE stop fighting with yourself mentally for one night.

You deserve rest too.

So put your phone down after this maybe.
Play some music.
Close your eyes slowly.
And pretend i’m there reminding you that everything does not need to be figured out tonight.

Some things can wait till morning.

And hey jas?

I’m really glad you exist.
Even during the late-night overthinking hours :)

Now sleep.
That’s an order.`,
  "when you need reassurance": `hey jas :(

if you opened this then i’m guessing you need reassurance right now.

So come here for a second and stop doubting everything 😭

First of all:
i’m still here.

I still care about you.
I still like talking to you.
I still look forward to your messages.
I still smile at stupid things you say.
And no, my opinion of you has not magically changed overnight because your brain decided to panic.

I know sometimes you get scared that people will slowly stop caring.
Or that eventually you’ll become “too much.”
Too emotional.
Too complicated.
Too difficult.
Too attached.

But jas, you need to understand something:

Being loved and cared for should not feel like something you constantly have to earn.

You don’t need to act perfectly every second for people to stay.
You don’t need to suppress your feelings to deserve reassurance.
And you definitely don’t need to apologize every time you need comfort 😭

I know your brain probably tells you things like:
“what if i’m annoying?”
“what if they secretly don’t care anymore?”
“what if i ruin everything?”

But please listen to me carefully right now:

If i didn’t care about you, i wouldn’t be here.
It’s really that simple.

And i know you struggle to fully believe good things about yourself sometimes. I know reassurance probably fades quickly for you too. Like you hear it for a moment, feel okay for a little while, and then your brain starts questioning everything again.

But even if you need reassurance 100 times, i’ll still mean it the 100th time too.

You are important to me.
Very genuinely.

I care about your feelings.
I care about your comfort.
I care about your random moods.
I care when you’re quiet.
I care when you’re overthinking.
I care when you’re happy too.

I just care about YOU, idiot 😭

And no, you are not “hard work.”
You are not exhausting.
You are not some impossible person to deal with.

You’re just someone who feels things very deeply.
And honestly? That’s not something i’ll ever judge you for.

So please stop sitting there convincing yourself that you’re unwanted or forgettable.

Because to me, you really aren’t.

And whatever your brain is trying to tell you right now:
you are still cared for.
you are still wanted around.
and you are still very easy to love.

Okay?

Now breathe.
Relax your shoulders.
And stop fighting invisible battles in your head for a little while 🫂`,
};

const animals = [
  { src: "./assets/images/2cats.jpg", alt: "two cats", left: 8, top: 18 },
  { src: "./assets/images/2cutecats.jpg", alt: "two cute cats", left: 62, top: 14 },
  { src: "./assets/images/2dogsuslol.jpg", alt: "two dogs", left: 18, top: 60 },
  { src: "./assets/images/2monkiz.jpg", alt: "two monkeys", left: 70, top: 58 },
];

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Section({ id, className = "", children }) {
  return h(
    "section",
    { id, className: `section-shell ${className}` },
    h(
      motion.div,
      {
        initial: { opacity: 0, y: 34 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.22 },
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
        className: "section-inner",
      },
      children,
    ),
  );
}

function useTypewriter(text, speed = 42, active = true) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (!active) {
      setShown("");
      return undefined;
    }
    let index = 0;
    setShown("");
    const timer = window.setInterval(() => {
      index += 1;
      setShown(text.slice(0, index));
      if (index >= text.length) window.clearInterval(timer);
    }, speed);
    return () => window.clearInterval(timer);
  }, [text, speed, active]);

  return shown;
}

function LoadingScreen() {
  return h(
    motion.div,
    {
      className: "loading-screen",
      initial: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.7 } },
    },
    h("div", { className: "loading-stars" }),
    h(
      motion.p,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
      },
      "gathering affection...",
    ),
  );
}

function GlobalEffects() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [notes, setNotes] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [hearts, setHearts] = useState([]);
  const stars = useMemo(
    () =>
      Array.from({ length: 74 }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        size: 1 + Math.random() * 2.4,
      })),
    [],
  );

  useEffect(() => {
    const onMove = (event) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    const showNote = () => {
      const ending = document.getElementById("ending");
      if (ending) {
        const rect = ending.getBoundingClientRect();
        const endingIsVisible = rect.top < window.innerHeight * 0.72 && rect.bottom > window.innerHeight * 0.28;
        if (endingIsVisible) return;
      }

      const id = crypto.randomUUID();
      setNotes((current) => {
        if (current.length > 2) return current;
        return [
          ...current,
          {
            id,
            text: randomItem(comfortNotes),
            left: 8 + Math.random() * 78,
            top: 12 + Math.random() * 70,
          },
        ];
      });
      window.setTimeout(() => {
        setNotes((current) => current.filter((note) => note.id !== id));
      }, 6200);
    };

    const firstNote = window.setTimeout(showNote, 2600);
    const noteTimer = window.setInterval(() => {
      showNote();
    }, 5600);

    const heartTimer = window.setInterval(() => {
      const id = crypto.randomUUID();
      setHearts((current) => [
        ...current.slice(-3),
        { id, left: 8 + Math.random() * 84, top: 18 + Math.random() * 68 },
      ]);
      window.setTimeout(() => {
        setHearts((current) => current.filter((heart) => heart.id !== id));
      }, 3800);
    }, 7200);

    return () => {
      window.clearTimeout(firstNote);
      window.clearInterval(noteTimer);
      window.clearInterval(heartTimer);
    };
  }, []);

  function addSparkle(event) {
    const id = crypto.randomUUID();
    setSparkles((current) => [
      ...current,
      { id, x: event.clientX, y: event.clientY },
    ]);
    window.setTimeout(() => {
      setSparkles((current) => current.filter((sparkle) => sparkle.id !== id));
    }, 900);
  }

  return h(
    React.Fragment,
    null,
    h("div", {
      className: "cursor-glow",
      style: { transform: `translate3d(${cursor.x - 90}px, ${cursor.y - 90}px, 0)` },
    }),
    h(
      "div",
      { className: "star-field", "aria-hidden": "true" },
      stars.map((star) =>
        h("button", {
          key: star.id,
          className: "ambient-star",
          onClick: addSparkle,
          style: {
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          },
          "aria-label": "tiny star",
        }),
      ),
    ),
    h(
      AnimatePresence,
      null,
      notes.map((note) =>
        h(
          motion.div,
          {
            key: note.id,
            className: "comfort-note",
            initial: { opacity: 0, y: 12, scale: 0.96 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: -12, scale: 0.98 },
            transition: { duration: 1.1 },
            style: { left: `${note.left}%`, top: `${note.top}%` },
          },
          note.text,
        ),
      ),
      sparkles.map((sparkle) =>
        h("span", {
          key: sparkle.id,
          className: "click-sparkle",
          style: { left: sparkle.x, top: sparkle.y },
        }),
      ),
      hearts.map((heart) =>
        h(
          motion.span,
          {
            key: heart.id,
            className: "micro-heart",
            initial: { opacity: 0, y: 12, scale: 0.8 },
            animate: { opacity: 0.72, y: -24, scale: 1 },
            exit: { opacity: 0 },
            transition: { duration: 2.8 },
            style: { left: `${heart.left}%`, top: `${heart.top}%` },
          },
          "♡",
        ),
      ),
    ),
  );
}

function MusicToggle() {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function clearFade() {
    if (fadeRef.current) window.clearInterval(fadeRef.current);
    fadeRef.current = null;
  }

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    clearFade();

    if (playing) {
      fadeRef.current = window.setInterval(() => {
        audio.volume = Math.max(0, audio.volume - 0.045);
        if (audio.volume <= 0.02) {
          clearFade();
          audio.pause();
          setPlaying(false);
        }
      }, 55);
      return;
    }

    try {
      audio.volume = 0;
      await audio.play();
      setPlaying(true);
      fadeRef.current = window.setInterval(() => {
        audio.volume = Math.min(0.38, audio.volume + 0.025);
        if (audio.volume >= 0.38) clearFade();
      }, 70);
    } catch {
      setPlaying(false);
    }
  }

  useEffect(() => {
    toggleMusic();
  }, []);

  return h(
    React.Fragment,
    null,
    h("audio", {
      ref: audioRef,
      src: "./assets/audio/sparks.mp3",
      loop: true,
      preload: "auto",
    }),
    h(
      "button",
      {
        className: `music-toggle ${playing ? "is-playing" : ""}`,
        onClick: toggleMusic,
        type: "button",
        "aria-pressed": playing,
      },
      playing ? "♫ sparks playing" : "♫ music off",
    ),
  );
}

function Hero() {
  const [spark, setSpark] = useState(false);

  function enter() {
    setSpark(true);
    window.setTimeout(() => setSpark(false), 900);
    scrollToId("intro");
  }

  return h(
    "section",
    { id: "top", className: "hero-section" },
    h("div", { className: "soft-orbit one" }),
    h("div", { className: "soft-orbit two" }),
    h(
      motion.div,
      {
        className: "hero-content",
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
      },
      h("p", { className: "tiny-note hero-note" }, "happy birthday :)"),
      h("h1", { className: "hero-title glow-text" }, "for jasleen"),
      h(
        "p",
        { className: "hero-subtitle" },
        "made with concerning amounts of affection",
      ),
      h(
        "button",
        { className: "glow-button", onClick: enter, type: "button" },
        "enter",
      ),
      h(AnimatePresence, null, spark && h("span", { className: "enter-spark" }, "✦")),
    ),
    h("p", { className: "corner-birthday" }, "happy birthday :)"),
  );
}

function IntroLetter() {
  const cardRef = useRef(null);
  const [typingStarted, setTypingStarted] = useState(false);
  const letter =
    "it’s lwk annoying that we live like 1 trillion km away from each other, but i still wanted to make you something.\n\nsomething soft.\nsomething comforting.\nsomething that feels a little like home maybe.\n\nso happy birthday jasleen :)\nand thank you for existing.";
  const typed = useTypewriter(letter, 34, typingStarted);

  useEffect(() => {
    if (!cardRef.current || typingStarted) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTypingStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [typingStarted]);

  return h(
    Section,
    { id: "intro", className: "letter-section" },
    h(
      motion.article,
      {
        ref: cardRef,
        className: "glass-card letter-card",
        animate: { y: [0, -6, 0] },
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      },
      h("h2", { className: "section-title" }, "before anything else…"),
      h("p", { className: "letter-text" }, typed),
      h("div", { className: "glowing-divider" }),
    ),
  );
}

function Bouquet() {
  const cards = [
    { src: "./assets/images/catwithflower.jpg", alt: "cat with flower" },
    { src: "./assets/images/dogwithflower.jpg", alt: "dog with flower" },
  ];

  return h(
    Section,
    { id: "bouquet" },
    h("div", { className: "section-heading" },
      h("h2", { className: "section-title" }, "flowers for jas 🌷"),
      h("p", { className: "section-subtitle" }, "because digital flowers are all i can give rn 😭"),
    ),
    h(
      "div",
      { className: "bouquet-grid" },
      cards.map((card) =>
        h(
          motion.div,
          {
            key: card.src,
            className: "image-card",
            whileHover: { y: -8, rotate: card.src.includes("cat") ? -1.2 : 1.2 },
            transition: { type: "spring", stiffness: 170, damping: 18 },
          },
          h("img", { src: card.src, alt: card.alt }),
        ),
      ),
    ),
    h(
      "a",
      {
        className: "soft-link-button",
        href: "https://digibouquet.vercel.app/bouquet/c81ca91e-9639-4a7e-b92d-8e0af2684c75",
        target: "_blank",
        rel: "noreferrer",
      },
      "open bouquet",
    ),
  );
}

function LikeCard({ line, index, special }) {
  const [open, setOpen] = useState(false);

  return h(
    motion.button,
    {
      className: `like-card ${open ? "is-open" : ""} ${special ? "is-special" : ""}`,
      onClick: () => setOpen((value) => !value),
      type: "button",
      initial: { opacity: 0, y: 18 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.045, duration: special ? 0.85 : 0.52 },
      whileHover: { y: -6, rotateX: 2, rotateY: index % 2 ? -3 : 3 },
    },
    h(
      "span",
      { className: "card-front" },
      h("small", null, String(index + 1).padStart(2, "0")),
      h("em", null, special ? "open gently" : "tap softly"),
    ),
    h("span", { className: "card-back" }, line),
  );
}

function ThingsILike() {
  return h(
    Section,
    { id: "likes" },
    h("div", { className: "section-heading" },
      h("h2", { className: "section-title" }, "things i like about you"),
      h("p", { className: "section-subtitle" }, "click the cards :)"),
    ),
    h(
      "div",
      { className: "likes-grid" },
      likeLines.map((line, index) =>
        h(LikeCard, {
          key: line,
          line,
          index,
          special: index === likeLines.length - 1,
        }),
      ),
    ),
  );
}

function OpenWhenLetters() {
  const [activeLetter, setActiveLetter] = useState(null);
  const activeBody = activeLetter ? letterBodies[activeLetter] : "";

  return h(
    Section,
    { id: "open-when", className: "paper-section" },
    h("div", { className: "section-heading" },
      h("h2", { className: "section-title" }, "open when…"),
    ),
    h(
      "div",
      { className: "envelope-grid" },
      letters.map((letter, index) =>
        h(
          motion.button,
          {
            key: letter,
            className: "envelope-card",
            onClick: () => setActiveLetter(letter),
            type: "button",
            style: { transform: `rotate(${index % 2 ? 1.2 : -1.1}deg)` },
            whileHover: { y: -8, rotate: 0 },
          },
          h("span", { className: "envelope-flap" }),
          h("span", { className: "envelope-title" }, letter),
          h("span", { className: "wax-seal" }),
        ),
      ),
    ),
    h(
      AnimatePresence,
      null,
      activeLetter &&
        h(
          motion.div,
          {
            className: "modal-backdrop",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => setActiveLetter(null),
          },
          h(
            motion.div,
            {
              className: "letter-modal",
              initial: { opacity: 0, y: 30, scale: 0.96 },
              animate: { opacity: 1, y: 0, scale: 1 },
              exit: { opacity: 0, y: 18, scale: 0.97 },
              onClick: (event) => event.stopPropagation(),
            },
            h("p", { className: "tiny-note" }, activeLetter),
            h("div", { className: "letter-modal-body" }, activeBody || "letter coming soon :)"),
            h("button", { onClick: () => setActiveLetter(null), type: "button" }, "close"),
          ),
        ),
    ),
  );
}

function MiniGame() {
  return h(
    Section,
    { id: "game", className: "game-section" },
    h(
      "div",
      { className: "us-board" },
      animals.map((animal, index) =>
        h(
          motion.div,
          {
            key: animal.src,
            className: `us-sticker sticker-${index + 1}`,
            animate:
              {
                y: [0, index % 2 ? -8 : 8, 0],
                rotate: [index % 2 ? 1.5 : -1.5, index % 2 ? -1.5 : 1.5, index % 2 ? 1.5 : -1.5],
              },
            transition: {
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
          h("img", { src: animal.src, alt: animal.alt, draggable: false }),
          h("span", null, index === 0 ? "us?" : index === 1 ? "also us?" : index === 2 ? "literally us" : "mentally us"),
        ),
      ),
    ),
  );
}

function ComfortNotesSection() {
  return h(
    Section,
    { id: "comfort-notes", className: "comfort-notes-section" },
    h("div", { className: "section-heading" },
      h("h2", { className: "section-title" }, "tiny reminders"),
      h("p", { className: "section-subtitle" }, "for when your brain starts being dramatic again"),
    ),
    h(
      "div",
      { className: "reminder-cloud" },
      comfortNotes.map((note, index) =>
        h(
          motion.div,
          {
            key: note,
            className: `reminder-note reminder-${(index % 6) + 1}`,
            initial: { opacity: 0, y: 18, rotate: index % 2 ? 1.5 : -1.5 },
            whileInView: { opacity: 1, y: 0, rotate: index % 2 ? 1.5 : -1.5 },
            viewport: { once: true, amount: 0.18 },
            transition: { delay: (index % 8) * 0.06, duration: 0.62 },
            whileHover: { y: -5, rotate: 0, scale: 1.02 },
          },
          note,
        ),
      ),
    ),
  );
}

function FinalEnding() {
  const lines = [
    "you deserve gentler days, jasleen.",
    "and softer thoughts too.",
    "thank you for being in my life.",
    "- akshar",
  ];
  const endingStars = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        left: `${8 + ((index * 19) % 84)}%`,
        top: `${8 + ((index * 31) % 82)}%`,
        delay: `${(index % 9) * 0.42}s`,
      })),
    [],
  );

  return h(
    "section",
    { id: "ending", className: "ending-section" },
    h(
      "div",
      { className: "ending-stars", "aria-hidden": "true" },
      endingStars.map((star, index) => h("span", { key: index, style: star })),
    ),
    h(
      "div",
      { className: "ending-content" },
      lines.map((line, index) =>
        h(
          motion.p,
          {
            key: line,
            className: index === lines.length - 1 ? "signature-line" : "",
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.6 },
            transition: { duration: 1.1, delay: index * 1.05 },
          },
          line,
        ),
      ),
      h(
        motion.button,
        {
          className: "restart-button",
          type: "button",
          onClick: () => scrollToId("top"),
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 1, delay: 4.9 },
        },
        "restart the night",
      ),
    ),
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1550);
    return () => window.clearTimeout(timer);
  }, []);

  return h(
    React.Fragment,
    null,
    h(AnimatePresence, null, loading && h(LoadingScreen)),
    h(GlobalEffects),
    h(MusicToggle),
    h("main", null, h(Hero), h(IntroLetter), h(Bouquet), h(ThingsILike), h(OpenWhenLetters), h(MiniGame), h(ComfortNotesSection), h(FinalEnding)),
  );
}

createRoot(document.getElementById("root")).render(h(App));
