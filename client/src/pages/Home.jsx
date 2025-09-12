import React from 'react';
import { useNavigate } from 'react-router-dom';

// Container component for consistent horizontal padding & max-width
import Container from '../components/Container.jsx';

import InfoCard from '../components/InfoCard';
import infoCardData from '../data/home/infoCardData.js';

import FeatureCard from '../components/FeaturesCard.jsx';
import featuresCardData from '../data/home/featuresCardData.js';



const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-text">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <Container className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Learning made simple, for everyone.
          </h1>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
            {infoCardData.map((cardData, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-secondary border border-border hover:shadow-lg transition-shadow"
              >
                <InfoCard {...cardData} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-background">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Everything you need to learn and teach effectively.
            </h2>
            <p className="text-lg text-muted">
              Courses, quizzes, certificates, and more — all in one platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresCardData.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>

          {/* Mid-section CTA */}
          <div className="text-center mt-12">
            <button
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              onClick={() => navigate('/courses')}
            >
              Explore Courses
            </button>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-secondary">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              From idea to impact in 3 steps.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: 1, title: 'Sign Up', text: 'Create your free Skill Shelf account.', color: 'bg-primary' },
              { num: 2, title: 'Choose Your Role', text: 'Start learning or become an instructor (or both!).', color: 'bg-accent' },
              { num: 3, title: 'Start Your Journey', text: 'Learn, teach, and share your expertise with the world.', color: 'bg-purple-600' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className={`${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4`}>
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-background">
        <Container className="text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">
            Built for passionate learners and teachers.
          </h2>
          <p className="text-lg text-muted mb-8">
            Whether you're learning your first programming language, improving your design skills,
            or teaching baking from your home kitchen — Skill Shelf gives your passion a place to grow.
          </p>
          <p className="text-lg text-primary font-semibold">
            100+ learners already exploring their skills.
          </p>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <Container className="text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your next skill is waiting.
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join Skill Shelf today — and start learning or teaching in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => navigate('/courses')}
            >
              Start Learning Now
            </button>
            <button
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              onClick={() => navigate('/dashboard')}
            >
              Publish Your First Course
            </button>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default Home;