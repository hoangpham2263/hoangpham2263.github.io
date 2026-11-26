export type GameCategoryId = "pvp" | "team" | "chat" | "quiz" | "fun";

export type GameCategory = {
  id: GameCategoryId;
  label: { vi: string; en: string };
};

export type LiveGame = {
  slug: string;
  category: GameCategoryId;
  name: { vi: string; en: string };
  description: { vi: string; en: string };
};

export const gameCategories: GameCategory[] = [
  { id: "pvp", label: { vi: "Đấu trường PvP", en: "Player vs Player" } },
  { id: "team", label: { vi: "Đấu phe / Quốc gia", en: "Team vs Team" } },
  { id: "chat", label: { vi: "Streamer vs Khán giả", en: "You vs Chat" } },
  { id: "quiz", label: { vi: "Đố vui & Giải đố chữ", en: "Word & Quiz" } },
  { id: "fun", label: { vi: "Giải trí tương tác", en: "Just for Fun" } },
];

export const gamesConfig: LiveGame[] = [
  // 1. Player vs Player (11)
  {
    slug: "evo-monster",
    category: "pvp",
    name: { vi: "Đấu Trường Tiến Hóa Quái Thú", en: "Evo Monster" },
    description: {
      vi: "Đấu trường sinh tồn nơi avatar khán giả thu thập năng lượng và tiến hóa quái thú theo cấp độ.",
      en: "Interactive survival arena where viewer avatars collect energy and evolve into stronger monsters.",
    },
  },
  {
    slug: "blob-battle",
    category: "pvp",
    name: { vi: "Đại Chiến Slime", en: "Blob Battle" },
    description: {
      vi: "Đấu trường battle royale cho các slime gắn avatar khán giả nuốt năng lượng và va chạm loại đối thủ.",
      en: "Slime battle royale arena where viewer avatars grow bigger and knock out rivals.",
    },
  },
  {
    slug: "musical-chairs",
    category: "pvp",
    name: { vi: "Ghế Âm Nhạc Avatar", en: "Musical Chairs" },
    description: {
      vi: "Chạy vòng quanh ghế theo nhạc synth WebAudio và tranh chỗ ngồi ngay khi nhạc dừng.",
      en: "Run around the chairs to WebAudio synth beats and scramble for a seat when the music stops.",
    },
  },
  {
    slug: "slap-arena",
    category: "pvp",
    name: { vi: "Đấu Trường Tát Bay", en: "Slap Arena" },
    description: {
      vi: "Đối kháng hài hước trên cầu cảng: tích lực từ tương tác chat và quà tặng để đánh bay đối thủ.",
      en: "Slap-battle showdown on a pier powered by live chat interactions and gift boosts.",
    },
  },
  {
    slug: "marble-race",
    category: "pvp",
    name: { vi: "Đua Bi Avatar", en: "Marble Race" },
    description: {
      vi: "Đua bi vật lý 2D qua 4 bản đồ chướng ngại vật với avatar khán giả gắn trực tiếp lên từng viên bi.",
      en: "2D physics marble race across 4 obstacle tracks with viewer avatars on every marble.",
    },
  },
  {
    slug: "goat-sumo",
    category: "pvp",
    name: { vi: "Sumo Dê Núi", en: "Goat Sumo" },
    description: {
      vi: "Đấu đẩy sumo trên võ đài tròn: húc văng đối thủ ra khỏi vòng bằng tương tác trực tiếp.",
      en: "Ring-out goat sumo clashes where live viewer actions power every charge.",
    },
  },
  {
    slug: "stick-fighters",
    category: "pvp",
    name: { vi: "Đấu Kiếm Người Que", en: "Stick Fighters" },
    description: {
      vi: "Đối kháng võ đường 1v1 giữa các chiến binh người que với hệ thống vũ khí tiến hóa theo quà tặng.",
      en: "1v1 dojo stick-figure duels featuring weapon upgrades triggered by gifts.",
    },
  },
  {
    slug: "run-party",
    category: "pvp",
    name: { vi: "Đại Hội Chạy Đua", en: "Run Party" },
    description: {
      vi: "Đua chạy voxel tối đa 80 avatar khán giả qua 4 bản đồ cùng xe đua, sấm sét và tăng tốc.",
      en: "80-player voxel footrace across 4 maps with speed boosts, vehicles and lightning hazards.",
    },
  },
  {
    slug: "take-the-crown",
    category: "pvp",
    name: { vi: "Tranh Ngai Vàng", en: "Take the Crown" },
    description: {
      vi: "Vượt hành lang xoắn ốc né bẫy và tranh giành ngai vàng trên đỉnh đấu trường.",
      en: "Climb a trap-filled spiral corridor to seize and defend the crown at the top.",
    },
  },
  {
    slug: "car-race",
    category: "pvp",
    name: { vi: "Đua Xe F1 Avatar", en: "Car Race" },
    description: {
      vi: "Giải đua F1 Grand Prix 40 xe gắn avatar khán giả, tăng tốc nitro và tranh thứ hạng thời gian thực.",
      en: "40-car F1 Grand Prix with viewer-avatar racers, nitro boosts and live standings.",
    },
  },
  {
    slug: "chainsaw-clash",
    category: "pvp",
    name: { vi: "Đấu Trường Cưa Xích", en: "Chainsaw Clash" },
    description: {
      vi: "Sinh tồn trong đấu trường lưỡi cưa xoay, né đòn và loại dần đối thủ đến người sống sót cuối cùng.",
      en: "Spinning-blade survival arena where avatars battle until one last winner stands.",
    },
  },

  // 2. Team vs Team (11)
  {
    slug: "territory-war",
    category: "team",
    name: { vi: "Đại Chiến Lãnh Thổ", en: "Territory War" },
    description: {
      vi: "Chia phe tô màu và tranh chiếm từng ô lãnh thổ trên bản đồ bằng bình luận, thả tim và quà tặng.",
      en: "Multi-team map conquest where comments, likes and gifts expand each faction's territory.",
    },
  },
  {
    slug: "tower-war",
    category: "team",
    name: { vi: "Xây Tháp Tranh Tài", en: "Tower War" },
    description: {
      vi: "Đua xây tháp theo đội: nạp gạch tăng chiều cao cho phe mình hoặc tung đòn phá tháp phe đối thủ.",
      en: "Team tower-building race combining fast stacking with sabotage strikes against rivals.",
    },
  },
  {
    slug: "boys-vs-girls",
    category: "team",
    name: { vi: "Đại Chiến Nam vs Nữ", en: "Boys vs Girls" },
    description: {
      vi: "Kéo co năng lượng 2 phe Nam vs Nữ với 4 chủ đề đối đầu và bảng vinh danh đóng góp.",
      en: "Two-team energy tug-of-war across 4 switchable themes with top-contributor highlights.",
    },
  },
  {
    slug: "mma-clash",
    category: "team",
    name: { vi: "Võ Đài Quốc Gia", en: "MMA Clash" },
    description: {
      vi: "Đấu võ đài đối kháng giữa 8 quốc gia: chọn lá cờ bằng comment và tiếp sức bằng quà tặng.",
      en: "8-nation MMA showdown where viewers pick flags via chat and boost fighters with gifts.",
    },
  },
  {
    slug: "nations-boat-race",
    category: "team",
    name: { vi: "Đua Thuyền Quốc Gia", en: "Nations Boat Race" },
    description: {
      vi: "Đua thuyền quốc gia với thuyền trưởng avatar, chướng ngại vật và vòng phao loại trực tiếp.",
      en: "National boat race featuring avatar captains, river hazards and elimination buoys.",
    },
  },
  {
    slug: "tank-battle",
    category: "team",
    name: { vi: "Đại Chiến Xe Tăng", en: "Tank Battle" },
    description: {
      vi: "Chiến trường xe tăng giữa các đội, nâng cấp hỏa lực và pháo kích theo mốc quà tặng.",
      en: "Team tank warfare with gift-powered artillery strikes and armor upgrades.",
    },
  },
  {
    slug: "nations-derby",
    category: "team",
    name: { vi: "Đua Ngựa Quốc Gia", en: "Nations Derby" },
    description: {
      vi: "Đua ngựa quốc gia kèm hiệu ứng cánh Pegasus và sấm sét xung phong khi khán giả tiếp sức.",
      en: "International horse derby with Pegasus wings and lightning charge boosts.",
    },
  },
  {
    slug: "battle-arena",
    category: "team",
    name: { vi: "Chiến Trường 2 Phe", en: "Battle Arena" },
    description: {
      vi: "Hỗn chiến 2 phe tự động kết hợp vòng quay kho vũ khí hạng nặng trên màn hình dọc.",
      en: "Automated two-faction battlefield featuring a heavy-weapon supply roulette.",
    },
  },
  {
    slug: "horse-race",
    category: "team",
    name: { vi: "Đường Đua Ngựa Vô Tận", en: "Horse Race" },
    description: {
      vi: "Đường đua ngựa nhiều làn liên tục, khán giả cổ vũ tăng tốc cho chú ngựa mình chọn về đích.",
      en: "Endless multi-lane horse race accelerated in real time by audience cheers.",
    },
  },
  {
    slug: "bridge-brawl",
    category: "team",
    name: { vi: "Đấu Trường Cầu Chiến", en: "Bridge Brawl" },
    description: {
      vi: "Thủ thành 2 đường cầu Đỏ vs Xanh: triệu hồi quân từ chat để đẩy sập trụ đối phương.",
      en: "Two-lane Red vs Blue bridge push where chat spawns troops to break the enemy tower.",
    },
  },
  {
    slug: "flappy-battle",
    category: "team",
    name: { vi: "Chim Bay Đại Chiến", en: "Flappy Battle" },
    description: {
      vi: "Chia đôi màn hình đua chim tự lái giữa 2 phe, vượt cột ống và tung hiệu ứng gây nhiễu.",
      en: "Split-screen auto-flying bird battle where two teams race past pipes and trigger hazards.",
    },
  },

  // 3. You vs Chat (11)
  {
    slug: "climb-1000",
    category: "chat",
    name: { vi: "1000 Bậc Thang: Phe Cứu vs Phe Phá", en: "Climb 1000 Stairs" },
    description: {
      vi: "Thử thách leo 1000 bậc thang: phe Cứu đẩy lên đỉnh, phe Phá thả bẫy kéo tụt lại.",
      en: "1000-stair climbing challenge pitting Save supporters against Sabotage pranksters.",
    },
  },
  {
    slug: "boulder-push",
    category: "chat",
    name: { vi: "Đẩy Đá Lên Đỉnh", en: "Boulder Push" },
    description: {
      vi: "Game hoạt hình hài hước kiểu Sisyphus: khán giả hợp sức đẩy tảng đá lên đỉnh hoặc làm nó lăn xuống.",
      en: "Sisyphus-style comedy game where viewers push the boulder uphill or send it rolling back.",
    },
  },
  {
    slug: "rope-walk",
    category: "chat",
    name: { vi: "Đi Dây Trên Không", en: "Rope Walk" },
    description: {
      vi: "Giữ thăng bằng đi trên dây cao tầng trước những cơn gió và đồ vật khán giả ném từ chat.",
      en: "High-wire tightrope walk fighting wind gusts and objects thrown by live chat.",
    },
  },
  {
    slug: "zombie-hill",
    category: "chat",
    name: { vi: "Đồi Xác Sống", en: "Zombie Hill" },
    description: {
      vi: "Phòng thủ căn cứ đỉnh đồi với 13 cấp quân hàm, khán giả hóa thân zombie tấn công hoặc tiếp viện tháp pháo.",
      en: "Hilltop base defense with 13 military ranks where chat spawns zombies or deploys turret aid.",
    },
  },
  {
    slug: "fruit-slice",
    category: "chat",
    name: { vi: "Chém Hoa Quả", en: "Fruit Slice" },
    description: {
      vi: "Dojo chém trái cây 2 phe: khán giả tung trái cây ghi điểm hoặc ném bom làm gián đoạn chuỗi combo.",
      en: "Fruit-slicing dojo where chat tosses bonus fruit or sneaks bombs into the combo streak.",
    },
  },
  {
    slug: "voxel-craft",
    category: "chat",
    name: { vi: "Xây Tường Khối Vuông", en: "Voxel Craft" },
    description: {
      vi: "Xây và bảo vệ bức tường khối vuông trước loạt công cụ phá hủy do người xem kích hoạt.",
      en: "Build and defend a voxel block wall against viewer-triggered demolition strikes.",
    },
  },
  {
    slug: "flappy-3d",
    category: "chat",
    name: { vi: "Heo Bay Vượt Ống", en: "Flappy 3D" },
    description: {
      vi: "Heo cánh nhỏ bay vượt ống 3D theo cơ chế kéo co chiều cao giữa streamer và người xem.",
      en: "3D pipe-dodging flight with live altitude tug-of-war between streamer and chat.",
    },
  },
  {
    slug: "log-rush",
    category: "chat",
    name: { vi: "Vịt Nhảy Khúc Gỗ", en: "Log Rush" },
    description: {
      vi: "Điều khiển chú vịt nhảy lên các khúc gỗ trôi để chạy thoát cơn lũ dâng liên tục.",
      en: "Hop a duck up floating logs to outrun rising floodwaters pushed by chat events.",
    },
  },
  {
    slug: "window-wipe",
    category: "chat",
    name: { vi: "Lau Kính Nhà Cao Tầng", en: "Window Wipe" },
    description: {
      vi: "Lau sạch kính tòa nhà chọc trời trong khi né mưa vết bẩn và đồ ném tới tấp từ phòng chat.",
      en: "Scrub skyscraper windows clean while dodging splatters and items tossed by viewers.",
    },
  },
  {
    slug: "tower-stack",
    category: "chat",
    name: { vi: "Xếp Tháp Chạm Trời", en: "Tower Stack" },
    description: {
      vi: "Xếp chồng khối tháp qua nhiều tầng khí hậu đối đầu các cú rung lắc phá tháp từ khán giả.",
      en: "Stack tower blocks through sky biomes while withstanding viewer sabotage shakes.",
    },
  },
  {
    slug: "lunar-dash",
    category: "chat",
    name: { vi: "Đường Đua Mặt Trăng", en: "Lunar Dash" },
    description: {
      vi: "Đua phi hành gia trọng lực thấp qua 4 hành tinh với phản lực, mưa thiên thạch và bước nhảy ánh sáng.",
      en: "Low-gravity astronaut dash across 4 planets with jetpacks, meteor showers and warp jumps.",
    },
  },

  // 4. Word & Quiz (22)
  {
    slug: "word-master",
    category: "quiz",
    name: { vi: "Vua Giải Đố Tiếng Việt", en: "Word Master" },
    description: {
      vi: "Gameshow đuổi hình bắt chữ và giải đố tiếng Việt trực tiếp kèm MC giọng đọc Edge TTS.",
      en: "Vietnamese word-puzzle and visual riddle gameshow with Edge TTS host narration.",
    },
  },
  {
    slug: "million-quiz",
    category: "quiz",
    name: { vi: "Triệu Phú Kiến Thức", en: "Million Quiz" },
    description: {
      vi: "Gameshow trắc nghiệm A/B/C/D nhiều mức điểm, khán giả bình luận chọn đáp án và leo bảng xếp hạng.",
      en: "Multiple-choice A/B/C/D quiz show where viewers answer in chat to climb the leaderboard.",
    },
  },
  {
    slug: "guess-the-flag",
    category: "quiz",
    name: { vi: "Đoán Cờ Quốc Gia", en: "Guess the Flag" },
    description: {
      vi: "Đố vui quốc kỳ 24/7 tự động chuyển câu, ghi nhận người trả lời đúng nhanh nhất trên màn hình.",
      en: "24/7 automated world-flag trivia highlighting the fastest correct chat answer.",
    },
  },
  {
    slug: "missing-letters",
    category: "quiz",
    name: { vi: "Điền Chữ Còn Thiếu", en: "Missing Letters" },
    description: {
      vi: "Đoán từ tiếng Việt từ các chữ cái bị che khuyết, mở dần gợi ý theo thời gian.",
      en: "Fill in missing letters to solve masked Vietnamese words as timed hints reveal.",
    },
  },
  {
    slug: "guess-the-logo",
    category: "quiz",
    name: { vi: "Đoán Logo Thương Hiệu", en: "Guess the Logo" },
    description: {
      vi: "Đố vui nhận diện thương hiệu tự động với 3 chế độ che logo tăng dần độ khó.",
      en: "Automated brand-logo quiz featuring 3 progressive masking difficulty modes.",
    },
  },
  {
    slug: "four-pics",
    category: "quiz",
    name: { vi: "4 Hình 1 Chữ", en: "Four Pics" },
    description: {
      vi: "Bảng ghim 4 ảnh Polaroid gợi ý cùng một từ khóa bí mật để phòng chat cùng đoán.",
      en: "Four Polaroid photo clues pinned on a board pointing to one hidden keyword.",
    },
  },
  {
    slug: "would-you-rather",
    category: "quiz",
    name: { vi: "Bạn Chọn Cái Nào", en: "Would You Rather" },
    description: {
      vi: "Bình chọn tranh luận 2 phương án với 126 câu hỏi tiếng Việt và đống avatar vật lý 2D chia phe.",
      en: "Debate poll game with 126 Vietnamese dilemmas and 2D physics avatar vote piles.",
    },
  },
  {
    slug: "guess-the-location",
    category: "quiz",
    name: { vi: "Đoán Quốc Gia Qua Phố", en: "Guess the Location" },
    description: {
      vi: "Khám phá đường phố 360° kèm quả địa cầu 3D để khán giả đoán đúng quốc gia.",
      en: "360° street-view geography quiz paired with a 3D globe reveal.",
    },
  },
  {
    slug: "five-letters",
    category: "quiz",
    name: { vi: "Đoán Từ 5 Chữ", en: "Five Letters" },
    description: {
      vi: "Phiên bản Wordle chơi chung trực tiếp: cả phòng chat cùng ghép manh mối tìm từ 5 ký tự.",
      en: "Collaborative live Wordle where the entire chat works together to solve 5-letter words.",
    },
  },
  {
    slug: "context",
    category: "quiz",
    name: { vi: "Đoán Từ Theo Ngữ Cảnh", en: "Context" },
    description: {
      vi: "Săn từ bí mật dựa trên thang đo độ gần ngữ nghĩa sau mỗi lượt đoán từ chat.",
      en: "Contexto-style semantic hunting game ranking every chat guess by closeness.",
    },
  },
  {
    slug: "true-or-false",
    category: "quiz",
    name: { vi: "Đúng Hay Sai", en: "True or False" },
    description: {
      vi: "Gameshow đố vui các sự thật bất ngờ, chia 2 luồng bình chọn Đúng / Sai và lật đáp án tức thì.",
      en: "Fast-paced trivia pitting True vs False votes on surprising facts.",
    },
  },
  {
    slug: "word-swipe",
    category: "quiz",
    name: { vi: "Vòng Quay Ghép Chữ", en: "Word Swipe" },
    description: {
      vi: "Ô chữ co-op với vòng quay chữ cái giúp khán giả cùng ghép đủ toàn bộ từ ẩn trên bảng.",
      en: "Co-op letter-wheel crossword where viewers uncover all hidden words on the board.",
    },
  },
  {
    slug: "trivia-time",
    category: "quiz",
    name: { vi: "Đố Vui A/B/C/D", en: "Trivia Time" },
    description: {
      vi: "Trắc nghiệm kiến thức 24/7 có chế độ ẩn phiếu bình chọn tạo kịch tính đến giây mở đáp án.",
      en: "24/7 trivia gameshow with hidden vote tallies until the final reveal.",
    },
  },
  {
    slug: "quick-math",
    category: "quiz",
    name: { vi: "Tính Nhẩm Siêu Tốc", en: "Quick Math" },
    description: {
      vi: "Đua tốc độ tính nhẩm với phép toán sinh tự động theo nhiều mức độ khó.",
      en: "Rapid-fire mental arithmetic race with dynamically generated equations.",
    },
  },
  {
    slug: "memory-maestro",
    category: "quiz",
    name: { vi: "Siêu Trí Nhớ Số", en: "Memory Maestro" },
    description: {
      vi: "Thử thách ghi nhớ dãy số qua 20 cấp độ dài dần, kiểm tra phản xạ và trí nhớ ngắn hạn.",
      en: "20-level number-sequence memory challenge scaling up each round.",
    },
  },
  {
    slug: "word-hunt",
    category: "quiz",
    name: { vi: "Săn Từ Ô Chữ", en: "Word Hunt" },
    description: {
      vi: "Tìm từ ẩn trên lưới ô chữ và bắn tọa độ ô vuông kèm bảng đánh dấu avatar khán giả.",
      en: "Grid word-search battle where viewers call coordinates to claim hidden words.",
    },
  },
  {
    slug: "crowd-says",
    category: "quiz",
    name: { vi: "Khảo Sát Đám Đông", en: "Crowd Says" },
    description: {
      vi: "Gameshow kiểu Family Feud Việt Nam: cả phòng chat chung sức lật hết các đáp án khảo sát phổ biến.",
      en: "Family Feud-style survey show where chat guesses the top popular answers.",
    },
  },
  {
    slug: "word-cross",
    category: "quiz",
    name: { vi: "Ô Chữ Giao Nhau", en: "Word Cross" },
    description: {
      vi: "Ghép ô chữ giao nhau trên mặt bàn gỗ nỉ xanh, mở chữ dần theo từng đáp án đúng.",
      en: "Crossword-style intersecting word board on green felt solved live by chat.",
    },
  },
  {
    slug: "find-the-word",
    category: "quiz",
    name: { vi: "Lật Chữ Tìm Từ", en: "Find the Word" },
    description: {
      vi: "Đua đoán từ có cùng chữ cái đầu hoặc chủ đề trước khi đồng hồ đếm ngược kết thúc.",
      en: "Race the countdown to find matching words sharing the target starting letters.",
    },
  },
  {
    slug: "word-association",
    category: "quiz",
    name: { vi: "Chuỗi Từ Liên Tưởng", en: "Word Association" },
    description: {
      vi: "Đoán chuỗi 12 từ liên tưởng liên tiếp và duy trì hệ số combo cùng khán giả.",
      en: "Chain 12 associated words in a row to build high audience combo streaks.",
    },
  },
  {
    slug: "guess-the-drawing",
    category: "quiz",
    name: { vi: "Đuổi Hình Vẽ Tay", en: "Guess the Drawing" },
    description: {
      vi: "Pictionary tương tác hỗ trợ cả chế độ tự vẽ (Auto-Draw) lẫn bảng vẽ trực tiếp cho streamer.",
      en: "Live Pictionary supporting both automated strokes and a real-time streamer canvas.",
    },
  },
  {
    slug: "guess-the-number",
    category: "quiz",
    name: { vi: "Đoán Số Bí Ẩn", en: "Guess the Number" },
    description: {
      vi: "Đoán số theo gợi ý Cao/Thấp thu hẹp khoảng giá trị, tích hợp thanh mục tiêu follow.",
      en: "Higher/Lower secret-number guessing game with live range narrowing and follow goals.",
    },
  },

  // 5. Just for Fun (14)
  {
    slug: "melon-pop",
    category: "fun",
    name: { vi: "Dưa Hấu Dây Chun", en: "Melon Pop" },
    description: {
      vi: "Quấn dây chun quanh quả dưa hấu theo từng tương tác cho tới khoảnh khắc nổ tung bất ngờ.",
      en: "Wrap rubber bands around a watermelon on every viewer action until it bursts.",
    },
  },
  {
    slug: "tung-tung-smash",
    category: "fun",
    name: { vi: "Đập Tung Tung", en: "Tung Tung Smash" },
    description: {
      vi: "Game hoạt hình giải trí với 20 loại vũ khí vui nhộn mở khóa theo quà tặng và bình luận.",
      en: "Comedy smash game featuring 20 quirky weapons unlocked via chat and gifts.",
    },
  },
  {
    slug: "dance-floor",
    category: "fun",
    name: { vi: "Đi Bar Online — Sàn Nhảy DJ", en: "Dance Floor" },
    description: {
      vi: "Sàn nhảy nightclub tương tác với nhạc sàn tổng hợp WebAudio, hiệu ứng bass drop và avatar lên sàn.",
      en: "Virtual DJ nightclub with WebAudio synth beats, bass drops and dancing viewer avatars.",
    },
  },
  {
    slug: "dance-party",
    category: "fun",
    name: { vi: "Đại Tiệc Sàn Nhảy", en: "Dance Party" },
    description: {
      vi: "Sàn nhảy flash-mob voxel đồng bộ 12 điệu nhảy và bàn mix beat trực tiếp trên stream.",
      en: "Synchronized voxel flash-mob dance floor with 12 dance moves and a live beat deck.",
    },
  },
  {
    slug: "christmas-tree",
    category: "fun",
    name: { vi: "Cây Thông Giáng Sinh Avatar", en: "Christmas Tree" },
    description: {
      vi: "Trang trí cây thông Noel bằng quả châu gắn ảnh đại diện khán giả và ngôi sao đỉnh cây VIP.",
      en: "Decorate a Christmas tree with viewer-avatar ornaments and a VIP tree-top star.",
    },
  },
  {
    slug: "card-factory",
    category: "fun",
    name: { vi: "Xưởng In Thẻ Bài VIP", en: "Card Factory" },
    description: {
      vi: "Dây chuyền in thẻ bài sưu tập gắn avatar khán giả với 7 bậc độ hiếm và hiệu ứng lấp lánh.",
      en: "Collectible card press printing custom viewer-avatar cards across 7 rarity tiers.",
    },
  },
  {
    slug: "pfp-printer",
    category: "fun",
    name: { vi: "Máy In Ảnh Đại Diện", en: "PFP Printer" },
    description: {
      vi: "Máy in phun ảo in ảnh đại diện khán giả kèm khung trang trí mở khóa theo quà tặng.",
      en: "Virtual inkjet printer outputting framed viewer profile pictures on live events.",
    },
  },
  {
    slug: "ai-host",
    category: "fun",
    name: { vi: "MC Ảo Giao Lưu Chat", en: "AI Host" },
    description: {
      vi: "Trợ lý MC ảo có khẩu hình động theo giọng đọc Edge TTS và 3 tạo hình nhân vật giao lưu khán giả.",
      en: "Lip-synced virtual MC assistant with 3 character skins and Edge TTS voice replies.",
    },
  },
  {
    slug: "name-diary",
    category: "fun",
    name: { vi: "Nhật Ký Ghi Tên Khán Giả", en: "Name Diary" },
    description: {
      vi: "Sổ tay viết tên khán giả bằng hiệu ứng bút chì, bút máy vàng và ghim ảnh Polaroid trực tiếp.",
      en: "Handwritten notebook inscribing viewer names with pencil, gold pen and Polaroid snapshots.",
    },
  },
  {
    slug: "guess-your-future",
    category: "fun",
    name: { vi: "Mèo Thầy Bói Xem Vận Mệnh", en: "Guess Your Future" },
    description: {
      vi: "Mèo thầy bói rút lá bài Tarot vui nhộn và đọc lời tiên tri hài hước cho từng khán giả.",
      en: "Fortune-teller cat drawing humorous Tarot readings for viewers in real time.",
    },
  },
  {
    slug: "coin-mint",
    category: "fun",
    name: { vi: "Xưởng Đúc Xu Hoàng Kim", en: "Coin Mint" },
    description: {
      vi: "Máy dập xu in avatar người xem với 6 cấp chất liệu đổ đầy hầm kho báu vật lý.",
      en: "Coin-stamping press minting 6-tier viewer-avatar coins into a physics treasure vault.",
    },
  },
  {
    slug: "clip-machine",
    category: "fun",
    name: { vi: "Máy Phát Clip Tương Tác", en: "Clip Machine" },
    description: {
      vi: "Kích hoạt clip phản ứng theo sự kiện LIVE với 8 clip hoạt hình dựng sẵn và hỗ trợ tải lên MP4/WebM.",
      en: "Event-triggered reaction clip player with 8 built-in animations and MP4/WebM uploads.",
    },
  },
  {
    slug: "snake",
    category: "fun",
    name: { vi: "Rắn Săn Mồi Tự Lái", en: "Snake" },
    description: {
      vi: "Rắn AI tự tìm đường trên bàn chơi trong khi khán giả thả táo tăng dài hoặc đặt bom cắt đuôi.",
      en: "Autonomous AI snake while viewers drop apples to grow it or bombs to cut its tail.",
    },
  },
  {
    slug: "roast-your-photo",
    category: "fun",
    name: { vi: "Chú Chó Tấu Hài Cà Khịa Avatar", en: "Roast Your Photo" },
    description: {
      vi: "Sân khấu stand-up comedy nơi chú chó MC bình luận vui nhộn về avatar người xem qua giọng đọc TTS.",
      en: "Stand-up comedy stage where a canine host delivers playful TTS roasts of viewer avatars.",
    },
  },
];
