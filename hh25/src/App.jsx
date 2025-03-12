import { useState, useEffect } from 'react';
import './App.css';
import LoyolaLogo from './icons/Loyola-logo.png';
import MIS from './icons/MIS.png';
import ACM from './icons/ACM.png';
import CyberHounds from './icons/CyberHounds.png';
import { BriefcaseMedical, BrainCircuit, CircleDollarSign, Sprout, GraduationCap, Sparkles, Crown } from 'lucide-react';
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3 } from "react-icons/tb";
import { GrInstagram } from "react-icons/gr";
import { TbBrandDiscord } from "react-icons/tb";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false); // New state for toggling visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleApplyClick = () => {
    setIsFormVisible(true); // Show the form when the button is clicked
  };

  return (
    <div className="bg-gray-950 relative overflow-hidden">
      {/* Enhanced Background stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: i % 5 === 0 ? '#f0f0ff' : '#ffffff',
              opacity: Math.random() * 0.9 + 0.1,
              animation: `twinkle ${Math.random() * 5 + 2}s infinite alternate`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>



      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={LoyolaLogo} alt="Logo" className="h-10 w-10" />
            <span className="text-white font-bold text-xl ml-2">HackHounds '25</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-green-300 hover:text-pink-100 transition">About</a>
            <a href="#schedule" className="text-green-300 hover:text-pink-100 transition">Schedule</a>
            <a href="#tracks" className="text-green-300 hover:text-pink-100 transition">Tracks</a>
            <a href="#prizes" className="text-green-300 hover:text-pink-100 transition">Prizes</a>
            <a href="#faq" className="text-green-300 hover:text-pink-100 transition">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-32 pb-20 relative z-10 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-12 text-center pixelated glow-text">
          HACK<span className="text-green-400">HOUNDS</span> 2025
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-black border border-white/30 text-white px-6 py-2 rounded-full">
            April 5-6
          </div>
          <div className="bg-black border border-white/30 text-white px-6 py-2 rounded-full">
            Baltimore, MD
          </div>
          <div className="bg-black border border-white/30 text-white px-6 py-2 rounded-full">
            24 Hours
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-white text-xl">
            Join the <a href="#" className="text-pink-300 hover:underline">Instagram</a> and <a href="#" className="text-pink-300 hover:underline">Discord</a>
          </p>
          <p className="text-white text-xl mt-2">
            for more information on the event!
          </p>
        </div>

              {/* Apply Button */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={handleApplyClick}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Apply
          </button>
        </div>

        {/* Typeform Embed */}
        {isFormVisible && (
          <div className="max-w-4xl mx-auto mt-8">
            <iframe
              src="https://form.typeform.com/to/jymAQivY"
              width="100%"
              height="500"
              frameBorder="0"
              style={{ border: 'none' }}
              title="Typeform Survey"
            ></iframe>
          </div>
        )}
      </div>

        {/* Interactive Astronaut */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="pixel-art astronaut-container">
            <div className="astronaut">
              <div className="helmet"></div>
              <div className="visor">
                <div className="eye left"></div>
                <div className="eye right"></div>
              </div>
              <div className="body"></div>
            </div>
          </div>
          
          <div className="pixel-cloud float-animation">
            {/* Cloud-like shape */}
          </div>
        </div>
      </main>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center pixelated">
        <p className="text-2xl mb-2 tracking-widest animate-pulse">SCROLL FOR</p>
        <p className="text-2xl tracking-widest animate-pulse">MORE INFO!</p>
        <div className="mt-4 animate-bounce">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900/40 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-12 text-center pixelated glow-text">ABOUT</h2>
          <div className="max-w-4xl mx-auto bg-gray-900/70 border border-gray-500/50 rounded-2xl p-8 shadow-lg backdrop-blur-md">
            <p className="text-white text-lg mb-4">
              HackHounds is Baltimore's premier student-run hackathon, bringing together 300+ innovative minds from across the country for 24 hours of coding, creativity, and collaboration.
            </p>
            <p className="text-white text-lg mb-4">
              Whether you're a seasoned developer or just starting out, join us for a weekend of learning, building, and connecting with industry experts and fellow tech enthusiasts.
            </p>
            <p className="text-white text-lg">
              This year's theme, "Cosmic Connections," challenges participants to create projects that bridge gaps and connect communities through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Tracks Section - NEW */}
      <section id="tracks" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-12 text-center pixelated glow-text">TRACKS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            

      {/* Track 1 - Health Tech */}
      <div className="bg-black/50 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
          <BriefcaseMedical size={32} className="text-blue-400" />
        </div>
        <h3 className="text-2xl font-bold text-blue-400 text-center mb-4 pixelated">HEALTH TECH</h3>
        <p className="text-white text-center">
          Create solutions that improve healthcare access, patient outcomes, or wellness tracking. Focus on leveraging technology to solve real-world health challenges.
        </p>
      </div>

      {/* Track 2 - AI/ML */}
      <div className="bg-black/50 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-red-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
          <BrainCircuit size={32} className="text-red-400" />
        </div>
        <h3 className="text-2xl font-bold text-red-400 text-center mb-4 pixelated">AI/ML</h3>
        <p className="text-white text-center">
          Build innovative applications using artificial intelligence and machine learning. From natural language processing to computer vision, show us what AI can do.
        </p>
      </div>

            {/* Track 3 - Fintech */}
      <div className="bg-black/50 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
          <CircleDollarSign size={32} className="text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-green-400 text-center mb-4 pixelated">FINTECH</h3>
        <p className="text-white text-center">
          Revolutionize financial services with innovative technology solutions. From payment systems to financial education, make finance more accessible and efficient.
        </p>
      </div>

      {/* Track 4 - Sustainability */}
      <div className="bg-black/50 border border-amber-700/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-amber-700/20 rounded-full flex items-center justify-center mb-4 mx-auto">
          <Sprout size={32} className="text-amber-700" />
        </div>
        <h3 className="text-2xl font-bold text-amber-700 text-center mb-4 pixelated">SUSTAINABILITY</h3>
        <p className="text-white text-center">
          Create tech solutions that address environmental challenges, promote sustainability, and help build a greener future for our planet.
        </p>
        </div>
      

            {/* Track 5 - Education */}
      <div className="bg-black/50 border border-yellow-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
          <GraduationCap size={32} className="text-yellow-400" />
        </div>
        <h3 className="text-2xl font-bold text-yellow-400 text-center mb-4 pixelated">EDUCATION</h3>
        <p className="text-white text-center">
          Develop innovative tools that enhance learning experiences, improve educational access, or help students and educators achieve better outcomes.
        </p>
      </div>

            {/* Track 6 - Open Innovation */}
      <div className="bg-black/50 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mb-4 mx-auto">
          <Sparkles size={32} className="text-purple-400" />
        </div>
        <h3 className="text-2xl font-bold text-purple-400 text-center mb-4 pixelated">OPEN INNOVATION</h3>
        <p className="text-white text-center">
          Got a wild idea that doesn't fit our other tracks? This is your space to innovate freely and create something truly unique and groundbreaking.
        </p>
      </div>
    </div>
        </div>
      </section>

      {/* Prizes Section - NEW */}
      <section id="prizes" className="py-24 bg-gray-900/40 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-12 text-center pixelated glow-text">PRIZES</h2>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* First Place */}
<div className="col-span-1 md:col-span-3 bg-gradient-to-r from-amber-500/20 to-amber-300/20 border border-amber-400 rounded-xl p-8 backdrop-blur-sm transform transition-all hover:scale-105">
  <div className="flex flex-col md:flex-row items-center">
    <div className="mb-6 md:mb-0 md:mr-8">
      <div className="w-24 h-24 bg-amber-400/30 rounded-full flex items-center justify-center">
        <TbHexagonNumber1 className="w-12 h-12 text-amber-400" />
      </div>
    </div>
    <div className="text-center md:text-left">
      <h3 className="text-3xl font-bold text-amber-400 mb-2 pixelated">GRAND PRIZE</h3>
      <p className="text-white text-xl mb-4">$3,000 + Premium Tech Bundle</p>
      <p className="text-white/80">The overall best project will win cash prizes and the latest tech gadgets, plus interview opportunities with our top sponsors.</p>
    </div>
  </div>
</div>

{/* Second Place */}
<div className="bg-gradient-to-r from-slate-400/20 to-slate-300/20 border border-slate-400 rounded-xl p-6 backdrop-blur-sm transform transition-all hover:scale-105">
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-slate-400/30 rounded-full flex items-center justify-center mb-4">
      <TbHexagonNumber2 className="w-8 h-8 text-slate-300" />
    </div>
    <h3 className="text-2xl font-bold text-slate-300 mb-2 pixelated">SECOND PLACE</h3>
    <p className="text-white text-lg mb-2">$1,500 + Tech Accessories</p>
    <p className="text-white/80">Runner-up project with exceptional innovation and execution.</p>
  </div>
</div>

{/* Third Place */}
<div className="bg-gradient-to-r from-amber-700/20 to-amber-600/20 border border-amber-700 rounded-xl p-6 backdrop-blur-sm transform transition-all hover:scale-105">
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-amber-700/30 rounded-full flex items-center justify-center mb-4">
      <TbHexagonNumber3 className="w-8 h-8 text-amber-600" />
    </div>
    <h3 className="text-2xl font-bold text-amber-600 mb-2 pixelated">THIRD PLACE</h3>
    <p className="text-white text-lg mb-2">$750 + Smart Accessories</p>
    <p className="text-white/80">Third best project combining creativity and technical skill.</p>
  </div>
</div>
            
            {/* Track Prizes */}
            <div className="bg-black/50 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mb-4">
                  < Crown size={32} className="text-purple-400" /> 
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-2 pixelated">TRACK WINNERS</h3>
                <p className="text-white text-lg mb-2">$500 Per Track</p>
                <p className="text-white/80">Best project in each of our six themed tracks.</p>
              </div>
            </div>
            
            {/* Audience Choice */}
            <div className="bg-black/50 border border-pink-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-pink-400/20 rounded-full flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 11V13" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 9V15" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 7V17" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 5V19" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-pink-400 mb-2 pixelated">AUDIENCE CHOICE</h3>
                <p className="text-white text-lg mb-2">$750 + Prize Pack</p>
                <p className="text-white/80">Voted by fellow hackers and event attendees.</p>
              </div>
            </div>
            
            {/* Newcomer Prize */}
            <div className="bg-black/50 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.5 9H22L16 13.5L18 21L12 17L6 21L8 13.5L2 9H9.5L12 2Z" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-2 pixelated">NEWCOMER AWARD</h3>
                <p className="text-white text-lg mb-2">$500 + Mentorship</p>
                <p className="text-white/80">Best project from first-time hackathon participants.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section id="faq" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-12 text-center pixelated glow-text">FAQ</h2>
          
          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="mb-6">
              <button 
                className={`w-full flex items-center justify-between bg-gray-900/60 border ${activeFaq === 0 ? 'border-green-400' : 'border-gray-700'} rounded-xl p-4 text-left hover:bg-gray-800/60 transition-all`}
                onClick={() => toggleFaq(0)}
              >
                <span className="text-white font-medium text-lg">Who can participate?</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform ${activeFaq === 0 ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 9L12 16L5 9" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {activeFaq === 0 && (
                <div className="bg-gray-900/40 border border-gray-800 rounded-b-xl p-4 mt-1">
                  <p className="text-white">
                    HackHounds is open to all college and university students, regardless of major or experience level. High school students are also welcome with parental consent. You don't need to be a programming expert - we welcome beginners and will have plenty of workshops and mentors to help you learn!
                  </p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 2 */}
            <div className="mb-6">
              <button 
                className={`w-full flex items-center justify-between bg-gray-900/60 border ${activeFaq === 1 ? 'border-green-400' : 'border-gray-700'} rounded-xl p-4 text-left hover:bg-gray-800/60 transition-all`}
                onClick={() => toggleFaq(1)}
              >
                <span className="text-white font-medium text-lg">How much does it cost?</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform ${activeFaq === 1 ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 9L12 16L5 9" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {activeFaq === 1 && (
                <div className="bg-gray-800 rounded-b-xl p-4 mt-1">
                  <p className="text-white">
                    Absolutely nothing! HackHounds is completely free to attend. We'll provide meals, snacks, swag, and a space to work throughout the event. We also offer travel reimbursements for students coming from outside the Baltimore area.
                  </p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 3 */}
            <div className="mb-6">
              <button 
                className={`w-full flex items-center justify-between bg-gray
                  -900/60 border ${activeFaq === 2 ? 'border-green-400' : 'border-gray-700'} rounded-xl p-4 text-left hover:bg-gray-800/60 transition-all`}
                onClick={() => toggleFaq(2)}
              >
                <span className="text-white font-medium text-lg">What should I bring?</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform ${activeFaq === 2 ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 9L12 16L5 9" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {activeFaq === 2 && (
                <div className="bg-gray-900/40 border border-gray-800 rounded-b-xl p-4 mt-1">
                  <p className="text-white">
                    Bring your laptop, charger, and any hardware you might need. We'll provide everything else, including food, drinks, and a comfortable workspace. Don't forget your student ID for check-in!
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="mb-6">
              <button 
                className={`w-full flex items-center justify-between bg-gray-900/60 border ${activeFaq === 3 ? 'border-green-400' : 'border-gray-700'} rounded-xl p-4 text-left hover:bg-gray-800/60 transition-all`}
                onClick={() => toggleFaq(3)}
              >
                <span className="text-white font-medium text-lg">Can I work in a team?</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform ${activeFaq === 3 ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 9L12 16L5 9" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {activeFaq === 3 && (
                <div className="bg-gray-900/40 border border-gray-800 rounded-b-xl p-4 mt-1">
                  <p className="text-white">
                    Yes! You can work solo or in teams of up to four people. Teaming up is a great way to collaborate, learn from each other, and build something amazing together. If you don't have a team, we'll have a team-forming session at the start of the event.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 5 */}
            <div className="mb-6">
              <button 
                className={`w-full flex items-center justify-between bg-gray-900/60 border ${activeFaq === 4 ? 'border-green-400' : 'border-gray-700'} rounded-xl p-4 text-left hover:bg-gray-800/60 transition-all`}
                onClick={() => toggleFaq(4)}
              >
                <span className="text-white font-medium text-lg">Will there be workshops?</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform ${activeFaq === 4 ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 9L12 16L5 9" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {activeFaq === 4 && (
                <div className="bg-gray-900/40 border border-gray-800 rounded-b-xl p-4 mt-1">
                  <p className="text-white">
                    Yes! We'll have a variety of workshops throughout the event covering topics like web development, mobile development, AI/ML, and more. Our workshops are designed to help you learn new skills and get started with your project.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 6 */}
            <div className="mb-6">
              <button 
                className={`w-full flex items-center justify-between bg-gray-900/60 border ${activeFaq === 5 ? 'border-green-400' : 'border-gray-700'} rounded-xl p-4 text-left hover:bg-gray-800/60 transition-all`}
                onClick={() => toggleFaq(5)}
              >
                <span className="text-white font-medium text-lg">What are the judging criteria?</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform ${activeFaq === 5 ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 9L12 16L5 9" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {activeFaq === 5 && (
                <div className="bg-gray-900/40 border border-gray-800 rounded-b-xl p-4 mt-1">
                  <p className="text-white">
                    Projects will be judged on innovation, technical complexity, creativity, and presentation. We'll also consider the potential impact of your project and how well it aligns with our theme, "Cosmic Connections."
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section - NEW */}
<section id="sponsors" className="py-24 bg-gray-900/40 backdrop-blur-sm relative z-10">
  <div className="container mx-auto px-4">
    <h2 className="text-5xl font-bold text-white mb-12 text-center pixelated glow-text">SPONSORS</h2>
    
    {/* Centered Grid for Sponsors */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
      {/* Sponsor Logos */}
      <div className="flex items-center justify-center bg-gray-900/70 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
        <img src={MIS} alt="Sponsor 1" className="max-h-20" />
      </div>
      <div className="flex items-center justify-center bg-gray-900/70 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
        <img src={CyberHounds} alt="Sponsor 2" className="max-h-20" />
      </div>
      <div className="flex items-center justify-center bg-gray-900/70 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
        <img src={ACM} alt="Sponsor 3" className="max-h-20" />
      </div>
    </div>
  </div>
</section>

      {/* Footer - NEW */}
      <footer className="bg-gray-900/80 backdrop-blur-md py-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70 mb-4">
            &copy; 2025 HackHounds. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white/70 hover:text-green-400 transition-colors">
              <TbBrandDiscord className='w-6 h-6' />
            </a>
            <a href="#" className="text-white/70 hover:text-green-400 transition-colors">
            <GrInstagram className='w-6 h-6' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;