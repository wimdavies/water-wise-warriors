import React from 'react';
import './Resources.css';

const Resources = () => {
    return (
        <div className="resources-container">
            <h1 className="resources-title">Resources</h1>
            <p className="resources-intro">Want to learn more? Explore these articles to educate and inspire cold water swimmers with safety tips, health benefits, and practical advice.</p>
            
            <h2 className="resources-subtitle">Articles</h2>
            <ol className="resources-list">
                <li>
                    <p>
                        <b>The Royal National Lifeboat Institution (RNLI):</b> <a href="https://rnli.org/safety/choose-your-activity/open-water-swimming" className="resources-link">Open Water Swimming Guide</a>
                        <br />
                        This guide provides essential safety advice and guidelines for swimming in open water to ensure a safe and enjoyable experience.
                    </p>
                </li>
                <li>
                    <p>
                        <b>The Outdoor Swimming Society:</b> <a href="https://www.outdoorswimmingsociety.com/survive/" className="resources-link">Survive Collection</a>
                        <br />
                        This collection includes expert articles on cold water swimming such as 'Expert Tips for Beginner Swimmers', 'How to Acclimatise', and 'Understanding Hypothermia'.
                    </p>
                </li>
                <li>
                    <p>
                        <b>BBC:</b> <a href="https://www.bbc.com/future/article/20200130-cold-water-swimming-what-are-the-benefits" className="resources-link">Cold Water SwimmingWhat is the Safest Way to Do It?</a>
                        <br />
                        This article explores the mental and physical health benefits of cold water swimming while also emphasising the associated risks and providing safety guidelines.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Outdoor Swimmer Magazine:</b> <a href="https://www.outdoorswimmer.com/advice/cold-water-swimming-faqs/" className="resources-link">Cold Water Swimming FAQs</a>
                        <br />
                        This article answers common questions about cold water swimming, including safety tips, acclimatisation techniques, and health considerations.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Outside & Active:</b> <a href="https://outsideandactive.com/articles/the-benefits-of-cold-water-swimming-and-how-to-get-started" className="resources-link">The Benefits of Cold Water Swimming and How to Get Started</a>
                        <br />
                        This piece highlights the physical and mental benefits of cold water swimming and offers practical advice on safely acclimating and enjoying the activity.
                    </p>
                </li>
            </ol>
            
            <h2 className="resources-subtitle">Podcasts</h2>
            <ul className="resources-list">
                <li>
                    <p>
                        <b>Feel Better, Live More with Dr. Rangan Chatterjee:</b> <a href="https://drchatterjee.com/wim-hof-on-waking-up-to-your-true-potential" className="resources-link">Wim Hof on Waking Up to Your True Potential</a>
                        <br />
                        Wim Hof discusses the power of cold-water immersion and breathing techniques to unlock your potential, improve health, and build resilience.
                    </p>
                </li>
                <li>
                    <p>
                        <b>The Happy Pear Podcast:</b> <a href="https://thehappypear.ie/the-science-behind-cold-hot-exposure-with-susanna-soberg" className="resources-link">The Science Behind Cold & Hot Exposure</a>
                        <br />
                        This episode features Susanna Søberg discussing the metabolic and psychological benefits of cold water swimming and heat exposure.
                    </p>
                </li>
                <li>
                    <p>
                        <b>The Joy of Swimming Podcast:</b> <a href="https://joyofswimming.com/" className="resources-link">The Joy of Swimming Podcast</a>
                        <br />
                        This podcast celebrates the passion, stories, and benefits of swimming through conversations with enthusiasts and experts.
                    </p>
                </li>
            </ul>
            
            <h2 className="resources-subtitle">Ted Talk</h2>
            <ul className="resources-list">
                <li>
                    <p>
                        <b>Cold Shower Therapy:</b> <a href="https://www.youtube.com/watch?v=Ms8YGPcjys0" className="resources-link">Joel Runyon at TEDxLUC</a>
                        <br />
                        Joel Runyon explores the transformative power of cold shower therapy in boosting resilience and overcoming challenges.
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default Resources;
