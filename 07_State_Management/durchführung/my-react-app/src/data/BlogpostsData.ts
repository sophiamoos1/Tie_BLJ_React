import type {BlogPost} from "../types/BlogPost";

export const blogPosts: BlogPost[] = [
    {
        id: 1, 
        title: "My first post on my personal Blog",
        content: "This is my very first blog post, and I’m oddly excited even though I have nothing particularly important to say. Today I discovered that typing random thoughts can feel strangely productive. I might write about technology, or maybe about the mysterious disappearance of my left sock — who knows. For now, I’m just experimenting to see how this blog layout handles a bit of text. If you’re reading this, congratulations: you’ve reached the end of a masterpiece of absolute nonsense.",
        publishDate: new Date('2025-11-01'),
        imagePath: '../images/image1.png'
    },
    {
        id: 2,
        title: "Today I learned something new in React",
        content: "Today I learned something new in React, although I’m still not entirely sure why it works the way it does. I tried experimenting with a small component, and suddenly everything started updating like magic. At one point I thought I broke the whole app, but it turned out I had just forgotten a single curly brace. Somehow, that tiny mistake taught me more than any tutorial I watched today. I guess learning React is basically a mix of confusion, curiosity, and tiny victories.",
        publishDate: new Date('2025-11-02'),
        imagePath: '../images/image4.png'
    },
    {
        id: 3,
        title: "I just noticed, that I can't relay on AI when it comes to UML",
        content: "I just noticed I can’t rely on AI when it comes to UML, and today’s experiment proved it perfectly. I asked for a simple diagram, and what I got looked more like abstract art than software architecture. After trying three different prompts, I realized it was faster to sketch the diagram myself. Somehow, drawing boxes and arrows by hand felt strangely satisfying. Maybe AI is great for many things, but when it comes to UML, I guess it still needs a reality check.",
        publishDate: new Date('2025-11-02'),
        imagePath: '../images/image3.png'
    },
     {
        id: 4,
        title: "LLM get better every day",
        content: "LLMs get better every day, and sometimes it feels like they level up faster than I can keep track of. Yesterday they struggled with something simple, and today they suddenly handle it like it was nothing. It’s both exciting and a little unsettling to watch them improve at this pace. I keep wondering what they’ll be able to do next week—or even tomorrow. For now, I’m just enjoying the ride and experimenting with whatever new tricks they surprise me with.",
        publishDate: new Date('2025-11-04'),
        imagePath: '../images/image2.png',
    },
     {
        id: 5,
        title: "Blue light blocking glases are a big scam...",
        content: "Blue light blocking glasses are a big scam, or at least that’s what I realized after wearing them for a week. I kept waiting for my eyes to feel magically refreshed, but nothing really changed except the tint of everything I looked at. Even my laptop screen started to look like it was trying out a vintage filter. Maybe they work for some people, but for me it felt more like paying for stylish placebo. At this point, I think I’ll just stick to taking real breaks instead of trusting orange-tinted miracles.",
        publishDate: new Date('2025-11-06'),
        imagePath: '../images/image5.png'
    }
]