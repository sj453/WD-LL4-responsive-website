// This file is intentionally left blank for now. It will be used for JavaScript if needed in the future.
// Destination data for search feature
const destinations = [
  {
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
    desc: "Paris, the City of Light, is famous for its art, fashion, gastronomy, and culture. Don't miss the Eiffel Tower!"
  },
  {
    name: "Santorini",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    desc: "Santorini, Greece, is known for its stunning sunsets, white-washed houses, and beautiful blue domes overlooking the sea."
  },
  {
    name: "Kyoto",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    desc: "Kyoto, Japan, is famous for its classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses."
  },
  {
    name: "Bali",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
    desc: "Bali, Indonesia, is a tropical paradise known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs."
  },
  {
    name: "Banff",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    desc: "Banff, Canada, is a resort town in the Rocky Mountains, known for its stunning mountain scenery and turquoise lakes."
  },
  {
    name: "Rome",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
    desc: "Rome, Italy, is a sprawling city with nearly 3,000 years of globally influential art, architecture, and culture."
  },
  {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    desc: "Dubai, UAE, is known for luxury shopping, ultramodern architecture, and a lively nightlife scene."
  },
  {
    name: "New York",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    desc: "New York City, USA, is famous for its skyline, Broadway shows, and vibrant city life."
  },
  {
    name: "Rio de Janeiro",
    image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=400&q=80",
    desc: "Rio de Janeiro, Brazil, is known for its Copacabana and Ipanema beaches, Christ the Redeemer statue, and Carnival festival."
  },
  {
    name: "Buenos Aires",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
    desc: "Buenos Aires, Argentina, is famous for its European-style architecture, tango dancing, and vibrant culture."
  },
  {
    name: "Cape Town",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    desc: "Cape Town, South Africa, is known for its harbor, Table Mountain, and beautiful beaches."
  },
  {
    name: "Reykjavik",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
    desc: "Reykjavik, Iceland, is the world's northernmost capital, famous for its modernist architecture and natural wonders."
  },
  {
    name: "Zermatt",
    image: "https://images.unsplash.com/photo-1464013778555-8e723c2f01f8?auto=format&fit=crop&w=400&q=80",
    desc: "Zermatt, Switzerland, is a mountain resort renowned for skiing, climbing, and hiking, at the foot of the Matterhorn."
  }
];

// Search feature logic
const searchInput = document.getElementById('destination-search');
const searchResult = document.getElementById('search-result');

if (searchInput) {
  searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim().toLowerCase();
    if (query.length === 0) {
      searchResult.style.display = 'none';
      searchResult.innerHTML = '';
      return;
    }
    // Find by city or country name (case-insensitive, partial match)
    const found = destinations.find(dest => dest.name.toLowerCase().includes(query));
    if (found) {
      searchResult.innerHTML = `
        <img src="${found.image}" alt="${found.name}">
        <div class="result-title">${found.name}</div>
        <div class="result-desc">${found.desc}</div>
      `;
      searchResult.style.display = 'block';
    } else {
      searchResult.innerHTML = '<div class="result-desc">Destination not found. Try another name!</div>';
      searchResult.style.display = 'block';
    }
  });
}
