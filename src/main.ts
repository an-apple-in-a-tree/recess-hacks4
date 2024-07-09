import "./style.css";
import Banner from "/banner.png";
import Wave from "/wave.png";
import Logo from "/logo.jpg";
import AOS from "aos";


document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
      <header class = "bg-aqua">
       <img src="${Banner}" alt="Logo" class="w-screen">
       <div class = "bg-crimson">
       <div class="container mx-auto flex justify-center items-center pt-8 px-6 w-full">
            <nav>   
            <ul class="font-nunito-sans flex space-x-24 text-2xl text-white pt-4 px-4">
                    <li><a href="#about" class="hover:font-bold">About</a></li>
                    <li><a href="#schedule" class="hover:font-bold">Schedule</a></li>
                    <li><a href="#prizes" class="hover:font-bold">Prizes</a></li>
                    <li><a href="#sponsors" class="hover:font-bold">Sponsors</a></li>
                    <li><a href="#register" class="hover:font-bold">Register</a></li>
                    <li><a href="#contact" class="hover:font-bold">Contact</a></li>
                </ul>
            </nav>
        </div>
       </div>
    <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 140" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(228, 57, 71, 1)" offset="0%"></stop><stop stop-color="rgba(228, 57, 71, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,56L26.7,51.3C53.3,47,107,37,160,44.3C213.3,51,267,75,320,77C373.3,79,427,61,480,49C533.3,37,587,33,640,39.7C693.3,47,747,65,800,67.7C853.3,70,907,56,960,46.7C1013.3,37,1067,33,1120,39.7C1173.3,47,1227,65,1280,65.3C1333.3,65,1387,47,1440,42C1493.3,37,1547,47,1600,58.3C1653.3,70,1707,84,1760,81.7C1813.3,79,1867,61,1920,49C1973.3,37,2027,33,2080,30.3C2133.3,28,2187,28,2240,39.7C2293.3,51,2347,75,2400,91C2453.3,107,2507,117,2560,119C2613.3,121,2667,117,2720,116.7C2773.3,117,2827,121,2880,123.7C2933.3,126,2987,126,3040,119C3093.3,112,3147,98,3200,86.3C3253.3,75,3307,65,3360,51.3C3413.3,37,3467,19,3520,30.3C3573.3,42,3627,84,3680,95.7C3733.3,107,3787,89,3813,79.3L3840,70L3840,140L3813.3,140C3786.7,140,3733,140,3680,140C3626.7,140,3573,140,3520,140C3466.7,140,3413,140,3360,140C3306.7,140,3253,140,3200,140C3146.7,140,3093,140,3040,140C2986.7,140,2933,140,2880,140C2826.7,140,2773,140,2720,140C2666.7,140,2613,140,2560,140C2506.7,140,2453,140,2400,140C2346.7,140,2293,140,2240,140C2186.7,140,2133,140,2080,140C2026.7,140,1973,140,1920,140C1866.7,140,1813,140,1760,140C1706.7,140,1653,140,1600,140C1546.7,140,1493,140,1440,140C1386.7,140,1333,140,1280,140C1226.7,140,1173,140,1120,140C1066.7,140,1013,140,960,140C906.7,140,853,140,800,140C746.7,140,693,140,640,140C586.7,140,533,140,480,140C426.7,140,373,140,320,140C266.7,140,213,140,160,140C106.7,140,53,140,27,140L0,140Z"></path></svg>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="bg-aqua text-white py-12">
    <div class="container mx-auto text-center pt-20 pb-6">
            <h1 class="text-6xl font-bold mb-4">Empowering the Next Generation of Innovators</h1>
            <p class="text-xl mb-4">Join us for Recess Hacks 4.0 - An Online Hackathon for Innovative Highschoolers!</p>
            <p class="text-lg mb-8 montserrat">August 30th, 2024 - September 1st, 2024</p>
            <a href="#register" class="bg-tealish text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition">Register Now</a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="pb-20 bg-sunshine">
        <img src = "${Wave}" alt="Wave" class="w-screen my-0">
        <div class="container pt-20 mx-auto text-center">
            <h2 class="text-3xl font-bold mb-12 montserrat">About Recess Hacks</h2>
            <p class="mb-6 text-lg nunito-sans mx-8">Recess Hacks is an exciting hackathon that empowers high school students to experience the thrill of 
            hacking and building projects with cutting-edge tech tools. 
            Based in Canada, we welcome participants from around the globe. 
            Stay tuned, as this year’s theme will be revealed soon, promising an engaging and innovative challenge for all attendees. Join us to collaborate, learn, and create!</p>
            <img src="${Logo}" alt="About Image" class="mx-auto rounded-lg shadow-md">
        </div>
    </section>

    <!-- Schedule Section -->
    <section id="schedule" class="bg-aqua py-20 text-white">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Event Schedule</h2>
            <p>Coming Soon! Stay tuned.</p>
        </div>
    </section>

    <!-- Prizes Section -->
    <section id="prizes" class="bg-crimson py-20 text-white">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Prizes and Rewards</h2>
            <p>Our current prize pool is $500000 CAD! Stay tuned for updates as we post more prizes.</p>
        </div>
    </section>

    <!-- Sponsors Section -->
    <section id="sponsors" class="bg-sunshine py-20">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Our Sponsors</h2>
            <p class="mb-6">Thank you to all our sponsors below:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
            <img src="/sponsors/aops.png" alt="AOPS" class="mx-auto rounded-lg shadow-md">
           <img src="/sponsors/wolfram.png" alt="Wolfram Alpha" class="mx-auto rounded-lg shadow-md"> 
           <img src="/sponsors/ttmath.jpg" alt="TT Math" class="mx-auto rounded-lg shadow-md">
           <img src="/sponsors/axure.png" alt="Axure" class="mx-auto rounded-lg shadow-md">
           <img src="/sponsors/xyz.png" alt=".xyz" class="mx-auto rounded-lg shadow-md"> 
           <img src="/sponsors/gmc.png" alt="gmc" class="mx-auto rounded-lg shadow-md">   
            </div>
            <div class="flex justify-center space-x-6 mb-6">
                <p>Interested in sponsoring Recess Hacks?</p>
            </div>
            <a href="mailto:sponsor@recesshacks@gmail.com"" class="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition">Become a Sponsor</a>
        </div>
    </section>

    <!-- Registration Section -->
    <section id="register" class="py-20 bg-crimson text-white">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Register for Recess Hacks 4.0</h2>
            <p class="mb-6">Please join the discord server, register on devpost and fill out the participant forms! </p>
            <form action="https://recesshacks4.devpost.com/" method="post" class="max-w-lg mx-auto">
                <!-- Registration form fields -->
                <button type="submit" class="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition w-full" onclick="window.location.href='https://recesshacks4.devpost.com/'">Register Now</button>
            </form>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-gray-50 py-20">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Get in Touch</h2>
            <p>Email: <a href="mailto:contact@recesshack.com" class="text-indigo-600 hover:underline">contact@recesshacks.com</a></p>
            <div class="flex justify-center space-x-12 mt-8">
                <a href="https://www.instagram.com/recesshacks"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" class="h-8"></a>
                <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" alt="Twitter" class="h-8 bg-black"></a>
                <a href="https://recesshacks4.devpost.com/"><img src="https://seeklogo.com/images/D/devpost-logo-95FF685C5D-seeklogo.com.png" alt="Devpost" class="h-8"></a>
                <a href="https://discord.com/invite/RrCY76mefj"><img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="Discord" class="h-8"></a>
                <a href="https://linktr.ee/recesshacks"><img src="https://cdn.icon-icons.com/icons2/3912/PNG/512/linktree_logo_icon_247832.png" alt="Linktree" class="h-8"></a>
                <!-- Add more social media as needed -->
            </div>
        </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-white py-6">
        <div class="container mx-auto text-center">
            <p>&copy; 2024 Recess Hacks. All rights reserved.</p>
        </div>
    </footer>
  </div>
`;

AOS.init();

