
import { useState, useEffect, useRef } from 'react';
import { useAnimateIn } from '@/lib/animations';
import { 
  Brain, 
  Lightbulb, 
  Search, 
  Upload, 
  Database, 
  Zap,
  CheckCircle,
  Code,
  PenTool,
  BookOpen,
  Save,
  Shield,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Link } from 'react-router-dom';

const FeatureCard = ({ 
  icon, 
  title, 
  description,
  color = 'primary'
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  color?: string
}) => {
  return (
    <div className="group flex flex-col items-start p-6 glass-panel rounded-lg h-full transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-${color}/10 mb-4 transition-transform duration-300 group-hover:scale-110`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-primary transition-colors group-hover:text-primary/90">{title}</h3>
      <p className="text-foreground/80 transition-colors group-hover:text-foreground/90">{description}</p>
    </div>
  );
};

const WorkflowStep = ({ 
  number, 
  title, 
  description,
  color = "primary" 
}: { 
  number: number, 
  title: string, 
  description: string,
  color?: string 
}) => {
  return (
    <div className="relative group transition-transform hover:-translate-y-1">
      <div className={`absolute top-0 left-0 w-10 h-10 rounded-full bg-${color} text-white flex items-center justify-center font-bold text-lg z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
        {number}
      </div>
      <div className="pl-16">
        <h3 className="text-xl font-bold mb-2 transition-colors group-hover:text-primary">{title}</h3>
        <p className="text-foreground/80 transition-colors group-hover:text-foreground">{description}</p>
      </div>
    </div>
  );
};

const FeatureShowcase = ({
  title,
  description,
  image,
  features,
  reversed = false,
  badges
}: {
  title: string,
  description: string,
  image: string,
  features: { icon: React.ReactNode, text: string }[],
  reversed?: boolean,
  badges?: string[]
}) => {
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 my-16`}>
      <div className="w-full md:w-1/2">
    {/* Fixed height so all feature images remain consistent size across sections */}
    <div className="relative glass-panel rounded-lg overflow-hidden h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] group">
          <img
            src={imgSrc}
            alt={title}
      className="w-full h-full object-cover brightness-95 transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
            onError={() => {
              if (imgSrc !== '/placeholder.svg') setImgSrc('/placeholder.svg');
            }}
            loading="lazy"
          />
          {badges && badges.length > 0 && (
            <div className="absolute inset-0 flex flex-wrap items-start content-start gap-2 p-4 pointer-events-none">
              {badges.map((b,i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-medium rounded-md backdrop-blur-sm bg-black/40 text-white border border-white/20 shadow-sm"
                >{b}</span>
              ))}
            </div>
          )}
        </div>
      </div>
  <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-foreground/80 mb-6">{description}</p>
        <div className="space-y-4">
          {features.map((feature, index) => (
    <div key={index} className="flex items-start gap-3 group/feat">
      <div className="w-6 h-6 mt-1 flex-shrink-0 text-primary transition-transform duration-300 group-hover/feat:scale-110 group-hover/feat:rotate-6">
                {feature.icon}
              </div>
      <p className="text-foreground/80 transition-colors group-hover/feat:text-foreground">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ValueProp = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode,
  title: string,
  description: string
}) => {
  return (
    <div className="group flex flex-col items-center text-center p-6 transition-transform duration-300 hover:-translate-y-1">
      
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 transition-colors group-hover:text-primary">{title}</h3>
      <p className="text-foreground/80 transition-colors group-hover:text-foreground">{description}</p>
    </div>
  );
};

const HowPage = () => {
  const [loading, setLoading] = useState(true);
  const showContent = useAnimateIn(false, 300);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const parallaxFactor = 0.4;
        heroRef.current.style.transform = `translateY(${scrollPosition * parallaxFactor}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] rounded-full bg-accent/5 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <div ref={heroRef} className="relative w-full max-w-3xl mx-auto">
            <div className="absolute -z-10 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="glass-panel rounded-full py-5 px-8 inline-block mx-auto mb-12">
              <h1 className="text-2xl md:text-3xl font-bold text-primary">How does Cortex work?</h1>
            </div>
            
            <p className="text-xl text-center text-foreground/80 max-w-2xl mx-auto mb-12">
              There's a lot of magic and sophisticated technology behind Cortex, but we've kept it simple to use.
            </p>
            
            <div className="flex justify-center">
              <Button size="lg" className="rounded-full">
                Start exploring
              </Button>
            </div>
          </div>
        </div>
        
        {/* Workflow Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">The Cortex Workflow</h2>
          
          <div className="relative">
            <div className="absolute left-5 top-6 w-0.5 h-[calc(100%-60px)] bg-gradient-to-b from-primary via-accent to-primary/30"></div>
            
            <div className="space-y-16 pl-4">
              <WorkflowStep 
                number={1}
                title="Collect"
                description="Easily save content from anywhere - web pages, images, documents, notes, and more with our browser extension or mobile app."
              />
              <WorkflowStep 
                number={2}
                title="Organize"
                description="Cortex automatically categorizes and tags your content using advanced AI, creating a beautiful, organized knowledge base without manual effort."
              />
              <WorkflowStep 
                number={3}
                title="Connect"
                description="Discover surprising connections between your ideas with our neural network visualization that reveals patterns you might miss."
              />
              <WorkflowStep 
                number={4}
                title="Create"
                description="Transform your collected knowledge into new ideas, projects, and content with powerful AI assistance that understands your thinking."
              />
            </div>
          </div>
        </div>
        
        {/* Feature Showcases */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Designed for Your Digital Brain</h2>
          
          {/* Visual knowledge base hero image uses VISUAL_KB_IMAGE constant defined above. */}
          
          <FeatureShowcase
            title="Your knowledge base is visual"
            description="Cortex transforms your notes and saved content into a beautiful, visual interface that makes browsing your digital mind a pleasure."
            image="https://images.unsplash.com/photo-1664575197229-3bbebc281874?auto=format&fit=crop&w=1200&q=80"
            badges={["Visual Graph", "Tags", "Image Extraction", "Adaptive Grid"]}
            features={[
              { icon: <CheckCircle size={24} />, text: "Visual organization of your knowledge" },
              { icon: <CheckCircle size={24} />, text: "Custom tagging system for personalized categorization" },
              { icon: <CheckCircle size={24} />, text: "Automatic image extraction from saved content" },
              { icon: <CheckCircle size={24} />, text: "Beautiful grid layouts that adapt to your content" },
            ]}
          />
          
          <FeatureShowcase
            title="Find anything instantly"
            description="Powerful semantic search understands what you're looking for, not just matching keywords but finding related concepts."

            image="https://plus.unsplash.com/premium_photo-1677408938823-dddebdf2fbff?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            badges={["Semantic Vector Search", "Concept Matching", "Advanced Filters", "Saved Queries", "Chat"]}
            features={[
              { icon: <CheckCircle size={24} />, text: "Neural search that understands concepts, not just keywords" },
              { icon: <CheckCircle size={24} />, text: "Filter by content type, date, source, and custom tags" },
              { icon: <CheckCircle size={24} />, text: "Save complex searches for quick access later" },
              { icon: <CheckCircle size={24} />, text: "Chat with your knowledge base in natural language" },
            ]}
            reversed={true}
          />
          
          <FeatureShowcase
            title="AI-powered connections"
            description="Discover non-obvious relationships between concepts. Cortex surfaces latent links using embeddings, clustering, and temporal co-occurrence so you spot emerging themes early."
            image="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            badges={["Graph View", "Embeddings", "Insights", "Pattern Detection"]}
            features={[
              { icon: <CheckCircle size={24} />, text: "Neural connection map visualizes relationships between your ideas" },
              { icon: <CheckCircle size={24} />, text: "Suggestion engine recommends relevant content from your knowledge base" },
              { icon: <CheckCircle size={24} />, text: "Weekly insights report highlights emerging patterns" },
              { icon: <CheckCircle size={24} />, text: "Continuously learns from your usage patterns" },
            ]}
          />
          
          <FeatureShowcase
            title="Your private knowledge hub"
            description="Your second brain stays yours. Every item is encrypted, access-controlled, and exportable—no ads, tracking pixels, or hidden monetization." 
            image="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            badges={["E2E Encryption", "Zero Ads", "Ownership", "Local Mode"]}
            features={[
              { icon: <CheckCircle size={24} />, text: "End-to-end encryption for all your data" },
              { icon: <CheckCircle size={24} />, text: "No data mining or advertising" },
              { icon: <CheckCircle size={24} />, text: "Optional local-only storage mode" },
              { icon: <CheckCircle size={24} />, text: "Export your data anytime in standard formats" },
            ]}
            reversed={true}
          />
          
          <FeatureShowcase
            title="An extension for your mind"
            description="Seamlessly capture, retrieve, and refine ideas across devices. Low-friction capture + synchronized context + an API lets Cortex plug into your personal workflow." 
            image="https://plus.unsplash.com/premium_photo-1727437241902-fff4a967af01?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            badges={["Cross-Device Sync", "Browser Extensions", "Native Apps", "Open API"]}
            features={[
              { icon: <CheckCircle size={24} />, text: "Synchronized across all your devices in real-time" },
              { icon: <CheckCircle size={24} />, text: "Browser extensions for Chrome, Firefox, Safari, and Edge" },
              { icon: <CheckCircle size={24} />, text: "Native apps for iOS, Android, macOS, and Windows" },
              { icon: <CheckCircle size={24} />, text: "API for custom integrations with your workflow" },
            ]}
          />
        </div>
        
        {/* Values Section */}
        <div className="py-16 px-4 rounded-lg glass-panel my-24">
          <h2 className="text-3xl font-bold text-center mb-3">We believe software should stay out of the way</h2>
          <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto mb-16">
            And let you focus on what matters — which isn't software.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueProp
              icon={<Brain className="w-8 h-8 text-primary" />}
              title="Focus is freedom"
              description="Cortex helps you stay focused by eliminating distractions and streamlining your thinking process."
            />
            <ValueProp
              icon={<Shield className="w-8 h-8 text-primary" />}
              title="Make it invisible"
              description="The best tools are the ones you forget you're using because they feel like natural extensions of yourself."
            />
            <ValueProp
              icon={<Lightbulb className="w-8 h-8 text-primary" />}
              title="Less becomes more"
              description="By removing unnecessary features and complexity, we create a more powerful experience."
            />
          </div>
          
          <div className="flex justify-center mt-16">
            <Button size="lg" className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 active:scale-95" asChild>
              <Link to="/">
                Start your journey
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Upload className="w-8 h-8 text-primary" />}
              title="Import"
              description="Easily import your notes, PDFs, images, and web links into your second brain."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-primary" />}
              title="Organize"
              description="Our AI automatically categorizes and tags your content for effortless organization."
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8 text-primary" />}
              title="Connect"
              description="Discover hidden connections between your ideas with our neural network visualization."
            />
            <FeatureCard
              icon={<Search className="w-8 h-8 text-primary" />}
              title="Retrieve"
              description="Instantly find exactly what you're looking for with semantic search that understands context."
            />
            <FeatureCard
              icon={<Lightbulb className="w-8 h-8 text-primary" />}
              title="Generate"
              description="Get AI-powered insights and suggestions based on your knowledge base."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-primary" />}
              title="Execute"
              description="Turn your ideas into action with project management and collaboration tools."
            />
          </div>
        </div>
        
        {/* Who is it for section */}
        <div className="mb-20 glass-panel p-10 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Made for designers, writers, researchers, developers & visual minds of all kinds</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center group transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <PenTool className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Designers</h3>
            </div>
            <div className="text-center group transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Writers</h3>
            </div>
            <div className="text-center group transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Search className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Researchers</h3>
            </div>
            <div className="text-center group transition-transform duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Code className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Developers</h3>
            </div>
          </div>
        </div>
        
        {/* Technical Details */}
        <div className="mt-20 glass-panel p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">AI Technology</h3>
              <p className="text-foreground/80 mb-4">
                Our platform uses state-of-the-art large language models and vector embeddings to understand the meaning behind your content, not just keywords.
              </p>
              <h3 className="text-xl font-bold mb-3">Data Storage</h3>
              <p className="text-foreground/80">
                All your data is encrypted end-to-end and stored in secure cloud infrastructure with regular backups and disaster recovery.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Integration</h3>
              <p className="text-foreground/80 mb-4">
                Connect with tools you already use like Notion, Evernote, Google Drive, and more through our extensive API.
              </p>
              <h3 className="text-xl font-bold mb-3">Customization</h3>
              <p className="text-foreground/80">
                Tailor the experience to your needs with customizable workflows, templates, and visualization options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowPage;
