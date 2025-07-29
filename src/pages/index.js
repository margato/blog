import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';



export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="Description will go into a meta tag in <head />">
            <style>
                {`

        .header-row {
          display: flex;
          flex-direction: column; 
          align-items: center;
          justify-content: center;
          padding: 4rem 1rem;
        }

        @media (min-width: 768px) {
          .header-row {
            flex-direction: row; 
          }
        }

        .header-col-left {
          width: 100%;
          text-align: center;
          margin-bottom: 2rem; /* mb-8 */
          padding: 1rem;
        }

        @media (min-width: 768px) {
          .header-col-left {
            width: 50%; /* md:w-1/2 */
            text-align: left; /* md:text-left */
            margin-bottom: 0; /* md:mb-0 */
          }
        }

        .header-title {
          font-size: 3rem; 
          font-weight: bold;
          line-height: 1.25; 
          margin-bottom: 1rem;
          border-radius: 0.25rem; 
        }

        .header-subtitle {
          font-size: 1.25rem; 
          margin-bottom: 1.5rem; 
          opacity: 0.9; 
          border-radius: 0.25rem;
        }
      
        .header-col-right {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 1rem;
        }

        @media (min-width: 768px) {
          .header-col-right {
            width: 50%;
          }
        }

        .header-image {
          max-width: 12rem; 
          height: auto;
          border-radius: 0.5rem;
        }

        @media (min-width: 768px) {
          .header-image {
            max-width: 18rem;
          }
        }

        @media (min-width: 1024px) {
          .header-image {
            max-width: 24rem;
          }
        }
        `}
            </style>
            <main>
                <>


                    <div className="header-row">
                        <div className="header-col-left">
                            <h1 className="header-title">Knowledge Library</h1>
                            <p className="header-subtitle">A collection of articles, proof-of-concepts, and code samples covering software architecture, cloud infrastructure, and design patterns.</p>
                            <a
                                className="button--primary"
                                href="/blog"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </>
            </main>
        </Layout>
    );
}
