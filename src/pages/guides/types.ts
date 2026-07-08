import React from 'react';

export interface GuideArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Fundamentals' | 'Engineering' | 'Finance' | 'Documentation';
  readTime: string;
  date: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  content: React.FC;
}
