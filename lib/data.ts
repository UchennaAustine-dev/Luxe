export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  date: string;
  category: string;
  author: string;
  featured?: boolean;
}

export const featuredPosts: Post[] = [
  {
    id: "1",
    title: "The Rise of Sustainable Fashion: How Brands Are Adapting",
    slug: "sustainable-fashion-brands-adapting",
    excerpt:
      "Explore how major fashion houses and indie brands alike are embracing sustainability in their collections and supply chains.",
    coverImage:
      "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "May 2, 2023",
    category: "Fashion",
    author: "Emma Johnson",
    featured: true,
  },
  {
    id: "2",
    title: "Summer Beauty Essentials: Skincare Routines for Hot Weather",
    slug: "summer-beauty-essentials",
    excerpt:
      "Discover the perfect skincare routine to keep your skin glowing and protected during the hot summer months.",
    coverImage:
      "https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "June 15, 2023",
    category: "Beauty",
    author: "Alex Chen",
    featured: true,
  },
  {
    id: "3",
    title: "Hidden Gems: Unexplored Destinations for Your Next Adventure",
    slug: "hidden-gems-travel-destinations",
    excerpt:
      "Venture off the beaten path with our guide to lesser-known but equally stunning travel destinations around the world.",
    coverImage:
      "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "July 8, 2023",
    category: "Travel",
    author: "Maya Patel",
    featured: true,
  },
];

export const allPosts: Post[] = [
  ...featuredPosts,
  {
    id: "4",
    title: "Minimalist Wardrobe: Building a Capsule Collection",
    slug: "minimalist-wardrobe-capsule-collection",
    excerpt:
      "Learn how to create a versatile capsule wardrobe that maximizes style while minimizing clutter.",
    coverImage:
      "https://images.pexels.com/photos/5705490/pexels-photo-5705490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 10, 2023",
    category: "Fashion",
    author: "Emma Johnson",
  },
  {
    id: "5",
    title: "The Science of Skincare: Understanding Active Ingredients",
    slug: "science-of-skincare-active-ingredients",
    excerpt:
      "Demystifying retinol, vitamin C, hyaluronic acid, and other popular skincare ingredients.",
    coverImage:
      "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "March 22, 2023",
    category: "Beauty",
    author: "Alex Chen",
  },
  {
    id: "6",
    title: "Solo Travel Guide: Embracing Adventure on Your Own Terms",
    slug: "solo-travel-guide-adventure",
    excerpt:
      "Tips, destinations, and safety advice for those looking to embark on a solo travel journey.",
    coverImage:
      "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "February 18, 2023",
    category: "Travel",
    author: "Maya Patel",
  },
  {
    id: "7",
    title: "Mindful Living: Creating Balance in a Busy World",
    slug: "mindful-living-balance",
    excerpt:
      "Practical strategies for incorporating mindfulness into your daily routine for better mental health.",
    coverImage:
      "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "January 30, 2023",
    category: "Lifestyle",
    author: "Maya Patel",
  },
  {
    id: "8",
    title: "Vintage Fashion Revival: Styles Making a Comeback",
    slug: "vintage-fashion-revival",
    excerpt:
      "From 70s flares to 90s minimalism, discover which retro trends are cycling back into the spotlight.",
    coverImage:
      "https://images.pexels.com/photos/6567739/pexels-photo-6567739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "May 15, 2023",
    category: "Fashion",
    author: "Emma Johnson",
  },
  {
    id: "9",
    title: "Home Spa Day: Luxury Self-Care Rituals on a Budget",
    slug: "home-spa-day-self-care",
    excerpt:
      "Transform your bathroom into a spa retreat with these affordable DIY treatments and ambiance tips.",
    coverImage:
      "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "June 5, 2023",
    category: "Beauty",
    author: "Alex Chen",
  },
];
